import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Button } from 'react-native'

import { connect } from 'react-redux'
import { deleteSerie } from '../actions'

import Row from "../components/Row"
import LongText from "../components/LongText"

class SerieDetailPage extends Component {
  render() {
    const { navigation } = this.props
    const { serie } = navigation.state.params
    return (
      <ScrollView>
        {
          serie.img
          ? <Image source={{ uri: serie.img }} style={styles.image}/>
          : null
        }
        <Row label="Titulo" content={serie.title} />
        <Row label="Gênero" content={serie.gender} />
        <Row label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />
        <View style={styles.button}>
          <Button
            title="Editar"
            onPress={ () => navigation.replace('SerieFormPage', { serieToEdit: serie }) }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color="#FF0004"
            onPress={ async () => {
                const hasDeleted = await this.props.deleteSerie(serie)
                if (hasDeleted) {
                  navigation.goBack()
                }
              }
            }
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  },
  button: {
    margin: 10
  }
})

export default connect( null, { deleteSerie } )(SerieDetailPage)