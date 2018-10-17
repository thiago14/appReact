import { createStackNavigator } from 'react-navigation'

import LoginPage from './pages/Login';
import SeriesPage from './pages/SeriesPage'
import SerieDetailPage from './pages/SerieDetailPage'

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
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params
      return {
        title: serie.title
      }
    }
  },
}, {
  navigationOptions: {
    title: 'Series',
    headerTintColor: 'white',
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