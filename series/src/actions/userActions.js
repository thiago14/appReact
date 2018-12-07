import firebase from 'firebase'
import config from '../../config.json'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
})

export const USER_LOGOUT = 'USER_LOGOUT'
export const userLogout = () => ({
  type: USER_LOGOUT
})

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}

export const tryLogin = ({email, password}) => dispatch => {
  return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        const action = userLoginSuccess(user);
        dispatch(action)
        return user;
      })
      .catch(error => {
        return Promise.reject(error)
      })
}

export const register = ({email, password}) => dispatch => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(reject)
    }
  )
}

export const logout = () => dispatch => {
  return async () => {
    try{
      await firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch(userLogout())
        })
    } catch(e) {
      return Promise.reject(error)
    }
  }
}