import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Picker,
  Slider,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { connect } from 'react-redux'

import FormRow from '../components/FormRow'

import { setField, resetForm, saveSerie } from '../actions'

class SerieFormPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    }
  }

  render() {
    const { serieForm, setField } = this.props
    return (
      // <KeyboardAvoidingView
      //   keyboardVerticalOffset={150}
      //   behavior="padding"
      //   enabled
      // >
        <ScrollView>
          <FormRow>
              <TextInput
                style={styles.input}
                placeholder="Título"
                value={serieForm.title}
                onChangeText={value => setField('title', value)}
              />
          </FormRow>
          <FormRow>
              <TextInput
                style={styles.input}
                placeholder="Url da imagem"
                value={serieForm.img}
                onChangeText={value => setField('img', value)}
              />
          </FormRow>
          <FormRow>
              <Picker
                selectedValue={serieForm.gender}
                onValueChange={itemValue => setField('gender', itemValue)}
              >
                <Picker.Item label="Policial" value="Policial" />
                <Picker.Item label="Comédia" value="Comédia" />
                <Picker.Item label="Terror" value="Terror" />
              </Picker>
          </FormRow>
          <FormRow>
              <View style={styles.sameRow}>
                <Text>Nota:</Text>
                <Text>{serieForm.rate}</Text>
              </View>
              <Slider
                onValueChange={value => setField('rate', value)}
                value={serieForm.rate}
                minimumValue={0}
                maximumValue={100}
                step={5}
              />
          </FormRow>
          <FormRow>
              <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={serieForm.description}
                onChangeText={value => setField('description', value)}
                numberOfLines={4}
                multiline
              />
          </FormRow>
          <Button
            title="Salvar"
            onPress={()=>saveSerie(serieForm)}
          />
      </ScrollView>
      // </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  }
})

const mapStateToProps = state => {
  return {
    serieForm: state.serieForm
  }
}

const mapDispatchToProps = {
  setField,
  resetForm
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerieFormPage)