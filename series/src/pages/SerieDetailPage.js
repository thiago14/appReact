import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Row from "../components/Row"

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
        <Row label="Descrição" content={serie.description} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1
  }
})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerieDetailPage)