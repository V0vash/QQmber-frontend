import { reactive, ref, toRefs, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useMutation, useQuery, useResult } from '@vue/apollo-composable'
import { GET_CURRENT_USER, SIGNIN_USER } from '@/graphql'


export function useAuth(){

    const router = useRouter()

    const login = ref('')
    const password = ref('')
    const { mutate } = useMutation(SIGNIN_USER, {
        // update: (cache, { data: { signinUser } }) => {
        //         localStorage.setItem("token", signinUser.token);
        //         console.log(signinUser)
        //         console.log(currentUser)
        //         // authorized.value = true;
        //         // router.push(`/`);
        //       },
    });

     function getCurrentUser (){
       const { result, loading, error,  } =  useQuery(GET_CURRENT_USER)

        console.log(result)

        return useResult(result, {}, (data) => data.getCurrentUser)
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
            // currentUser.value = {};
            router.push(`/signin`)
        },
        currentUser: getCurrentUser(),
        getCurrentUser
    };
}