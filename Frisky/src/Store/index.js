import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { api } from '@/Services/api'
import theme from './Theme'

import LogForm from '@/Containers/Screens/SignIn/SignIn'
import SignUp from '@/Containers/Screens/SignUp/SignUp'
import Home from '@/Containers/Screens/DashBoard/Home/Home'
import MainScreen from '@/Containers/Screens/DashBoard/MainHome/Main'
import Change from '@/Containers/Screens/ChangePassword/ChangePassword'
import Forget from '@/Containers/Screens/ForgetPassword/ForgetPassword'
import { SigninAction} from '@/Services/modules/SigninAction'
import CallShocketSlice from './CallShocketSlice/CallShocketSlice'




const reducers = combineReducers({
  theme,
  callSocketSlice:CallShocketSlice,
  
api: api.reducer,
 [SigninAction.reducer]:SigninAction.reducer,
 
  
})
 
  

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      // SigninAction.middleware,
      // SignUpAction.middleware)
    )

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
