import { reactive, ref, toRefs, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useMutation, useQuery, useResult } from '@vue/apollo-composable'
import { GET_CURRENT_USER, SIGNIN_USER } from '@/graphql'


export const state = reactive({
    authenticating: false,
    user: null,
    error: undefined,
})

// export const user = ref(undefined)

// Read access token from local storage?
const token = localStorage.getItem('token')


export function useAuth(){

    const router = useRouter()

    const login = ref('')
    const password = ref('')
    const { mutate } = useMutation(SIGNIN_USER, {});



      function getCurrentUser (){

       const { result, onResult } =  useQuery(GET_CURRENT_USER)

         onResult(queryResult => {
             if(!queryResult.data.getCurrentUser){
                 state.authenticating = false;
             }else{
                 state.authenticating = true;
             }
         })

          state.user = useResult(result, {}, (data) => data.getCurrentUser)

    }


    return {
        login,
        password,
        signIn:() => mutate({
                                        username: login.value,
                                        password: password.value
                                    }) .then(({ data }) => {
                                            localStorage.setItem("token", data.signinUser.token);
                                            console.log(data.signinUser);
                                            router.go();
                                        })
                                            .catch(err => {
                                                console.error(err);
                                            }),
        signOut:() => {
            localStorage.removeItem("token");
            console.log('signOut')
            // state.user = undefined;
            state.user = null;
            state.authenticating = false
            router.push(`/signin`)
        },
        getCurrentUser,
        // user,
        ...toRefs(state)
    };
}