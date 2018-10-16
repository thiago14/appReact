import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SerieCard from '../components/SerieCard'

import series from '../../series.json'

export class SeriesPage extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[...series, { isLast: true }]}
          renderItem={({item, index}) => (
            item.isLast
            ? <View><Text>Add New</Text></View>
            : <SerieCard serie={item} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesPage)
