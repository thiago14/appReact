import firebase from 'firebase'

export const SET_FIELD = 'SET_FIELD'
export const setField = (field, value) => {
  return {
      type: SET_FIELD,
      field,
      value
  }
}

export const RESET_FORM = 'RESET_FORM'
export const resetForm = () => ({
  type: RESET_FORM
})

export const saveSerie = serie => {
  const { currentUser } = firebase.auth()
  return firebase
          .database()
          .ref(`/users/${currentUser.uid}/series`)
          .push(serie)
}