import { createStackNavigator } from 'react-navigation'

import LoginPage from './pages/Login';
import SeriesPage from './pages/SeriesPage'

export default createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!',
      alignContent: 'center'
    }
  },
  'Main': {
    screen: SeriesPage
  },
}, {
  navigationOptions: {
    title: 'Series',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30
    }
  }
})