import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

import { connect } from 'react-redux'
import FormRow from '../components/FormRow'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: ''
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    })
  }

  tryLogin() {
    this.props.navigation.replace('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder={'user@mail.com'}
            value={this.state.email}
            onChangeText={value => this.onChangeHandler('mail', value)}
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
        <View style={styles.button}>
          <Button title="Entrar" onPress={() => this.tryLogin()} />
        </View>
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

export default connect(
  null,
  null
)(Login)
