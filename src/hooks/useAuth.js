import { reactive, ref, toRefs, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useMutation, useQuery, useResult } from '@vue/apollo-composable'
import { GET_CURRENT_USER, SIGNIN_USER } from '@/graphql'


export const state = reactive({
    authenticating: false,
    user: null,
    error: null,
})


export function useAuth(){

    const router = useRouter()

    const login = ref('')
    const password = ref('')
    const { mutate:signin_mutate } = useMutation(SIGNIN_USER, {});

    const getCurrentUser = () => {
       const { result, error, onResult } =  useQuery(GET_CURRENT_USER)

         onResult(queryResult => {
             if(!queryResult.data.getCurrentUser){
                 state.authenticating = false;
             }else{
                 state.authenticating = true;
             }
         })

          state.user = useResult(result, {}, (data) => data.getCurrentUser)

    }

    const signIn = () => {
        signin_mutate({
            username: login.value,
            password: password.value
        })
            .then(({ data }) => {
                localStorage.setItem("token", data.signinUser.token);
                router.go();
            })
            .catch(err => {
                state.error = err
            })
    }

    const signOut = () => {
        localStorage.removeItem("token");
        state.authenticating = false
        router.push(`/signin`)
    }


    return {
        login,
        password,
        signIn,
        signOut,
        getCurrentUser,
        // error,
        ...toRefs(state)
    };
}