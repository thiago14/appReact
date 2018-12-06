import firebase from 'firebase'
import { Alert } from 'react-native'

export const SET_FORM_EDIT_SERIE = 'SET_FORM_EDIT_SERIE'
export const setFormEditSerie = serie => ({
    type: SET_FORM_EDIT_SERIE,
    serie
})

export const SET_FIELD = 'SET_FIELD'
export const setField = (field, value) => {
  return {
      type: SET_FIELD,
      field,
      value
  }
}

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS'
const serieSavedSuccess = () => ({
  type: SERIE_SAVED_SUCCESS
})

export const RESET_FORM = 'RESET_FORM'
export const resetForm = () => ({
  type: RESET_FORM
})

export const saveSerie = serie => {
  const { currentUser } = firebase.auth()
  return async dispatch => {
    const db = firebase.database()
    if(serie.id) {
      await db
          .ref(`/users/${currentUser.uid}/series/${serie.id}`)
          .set(serie)
    } else {
      await db
          .ref(`/users/${currentUser.uid}/series`)
          .push(serie)
    }
    dispatch(serieSavedSuccess())
  }
}

export const deleteSerie = serie => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Deletar',
        `Deseja deletar a série ${serie.title}?`,
        [{
          text:'Não',
          onPress: () => resolve(false),
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            const { currentUser } = firebase.auth()
            try {
              await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                  .remove()
              resolve(true)
            } catch (e) {
              reject(e.message)
            }
          }
        }],
        {cancelable: false}
      )
    })
  }
}