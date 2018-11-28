import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { tryLogin, initializeFirebase } from '../actions';

import { connect } from 'react-redux'
import FormRow from '../components/FormRow'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      message: '',
      password: '',
      isLoading: false
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  componentDidMount() {
    initializeFirebase()
  }

  tryLogin() {
    this.setState({
      message: '',
      isLoading: true
    })
    this.props.tryLogin(this.state)
      .then(user => {
        this.setState({
          message: 'Sucesso',
          isLoading: false
        })
        if(user) {
          this.props.navigation.replace('Main')
        }
      })
      .catch(error => {
        this.setState({
          message: this.getErrorMessage(error.code),
          isLoading: false
        })
      })
  }

  getErrorMessage(code) {
    switch (code) {
      case 'auth/wrong-password':
        return 'Senha incorreta'
      case 'auth/invalid-email':
        return 'O e-mail informado não é válido'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      default:
        return 'Erro desconhecido'
    }
  }

  renderMessage() {
    const { message } = this.state
    if(message) {
      return <View><Text>{ message }</Text></View>
    }
    return null
  }

  renderButton() {
    if(this.state.isLoading) {
      return <ActivityIndicator/>
    }
    return (
      <View style={styles.button}>
        <Button title="Entrar" onPress={() => this.tryLogin()} />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder={'user@mail.com'}
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('email', value)}
            autoCapitalize="none"
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder={'*********'}
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.onChangeHandler('password', value)}
          />
        </FormRow>
        { this.renderButton() }
        { this.renderMessage() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    padding: 5,
    paddingTop: 0
  },
  button: {
    marginTop: 10
  }
})

export default connect(null, { tryLogin })(LoginPage)