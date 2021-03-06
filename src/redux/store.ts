import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import postsReducer from './posts-reducer'
import headerReducer from './header-reducer'
import dialogsReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'
import sidebarReducer from './sidebar-reducer'
import peopleReducer from './people-reducer'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import firebaseReducer from './firebase-reducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import coronaReducer from './corona-reducer'
import chatReducer from './chat-reducer'

const rootReducer = combineReducers({
        header: headerReducer,
        navbar: navbarReducer,
        sidebar: sidebarReducer,
        posts: postsReducer,
        dialogsPage: dialogsReducer,
        peoplePage: peopleReducer,
        profilePage: profileReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        firebaseStorage: firebaseReducer,
        corona: coronaReducer,
        chat: chatReducer
    }
)

type TRootReducer = typeof rootReducer // (globalState: GlobalStateType)=> globalState
export type TGlobalState = ReturnType<TRootReducer>

// type for combine ActionCreators into one type
export type TCombineActions<T> = T extends { [key: string]: (...args: Array<any>) => infer U } ? U : never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

// !! helper to see store in console
// @ts-ignore
window.__store__ = store
export default store