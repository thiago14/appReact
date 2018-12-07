import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { tryLogin, register, initializeFirebase } from '../actions';

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

  success(user) {
    this.setState({
      message: 'Sucesso',
      isLoading: false
    })
    if(user) {
      this.props.navigation.replace('Main')
    }
  }

  error(error) {
    this.setState({
      message: this.getErrorMessage(error.code),
      isLoading: false
    })
  }

  tryLogin() {
    this.setState({
      message: '',
      isLoading: true
    })
    this.props.tryLogin(this.state)
      .then(user => this.success(user))
      .catch(error => this.error(error))
  }

  register() {
    if(
      (this.state.email && this.state.email !== '') &&
      (this.state.password && this.state.password !== '')
    ) {
      this.setState({
        message: '',
        isLoading: true
      })
      return this.props.register(this.state)
        .then(user => this.success(user))
        .catch(error => this.error(error))
    }
    return (
      Alert.alert('Preencha os campos "E-mail" e "Senha"!')
    )
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
      return (
        <View style={styles.messageWrapper}>
          <Text style={styles.message}>{ message }</Text>
        </View>
      )
    }
    return null
  }

  renderButton() {
    if(this.state.isLoading) {
      return <ActivityIndicator/>
    }
    return (
      <View>
        <View style={styles.button}>
          <Button title="Entrar" onPress={() => this.tryLogin()} />
        </View>
        <View style={styles.button}>
          <Button title="Cadastrar" onPress={() => this.register()} />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderMessage() }
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
  },
  messageWrapper: {
    backgroundColor: '#FF0004',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    width: '100%'
  },
  message: {
    textAlign: 'center',
    color: 'white'
  }
})

export default connect(null, { tryLogin, register })(LoginPage)