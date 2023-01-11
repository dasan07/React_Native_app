import { api } from '../api';
import { CODE_KEY, Config } from '../../Config/index';

import { SignInURL, SignUpURL } from '../../Utility/Url';

export const SigninAction = api.injectEndpoints({
    reducerPath: 'SigninAction',
    endpoints: (builder) => ({
        CreatePost: builder.mutation({
            query: (grandType) => {
                console.log(grandType);
                return {
                    url: SignInURL,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                    },
                    body: JSON.stringify(grandType),
                    
                }
            }
           
        }),
        CreatePostSignUp: builder.mutation({
            query: (grand) => {
                console.log(grand);
                return {
                    url: SignUpURL,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                    },
                    body: JSON.stringify(grand),
                    
                }
            },
           
        })
    })
   
    
})


export const { useCreatePostMutation,useCreatePostSignUpMutation } = SigninAction