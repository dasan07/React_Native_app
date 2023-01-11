// import {api}from '../../api';
// import {CODE_KEY} from '../../../Config/index';
// import { LoginUrl} from '@/Utility/Url';

// export const SigninPostMethod=api.injectEndpoints({
//     reducerPath:'SigninPostMethod',
//     endpoints:(builder)=>({
//         createPost:builder.mutation({
//             query:(grantType)=>{
//                 return{
//                     url:LoginUrl,
//                     method:'POST',
//                     header:{
//                         'Authorization':CODE_KEY,
//                         'Content-Type':'application/json',
//                         'offset':new Date().getTimezoneOffset(),
//                     },
//                     body:JSON.stringify(grantType)
//                 }
//             }
//         })
//     })
// })
// export const {useCreatePostMutation}=SigninPostMethod