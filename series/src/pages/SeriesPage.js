import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SerieCard from '../components/SerieCard'

import series from '../../series.json'

const isEven = number => number % 2 === 0

export class SeriesPage extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[...series, { isLast: true }]}
          renderItem={({item, index}) => (
            item.isLast
            ? <View><Text>Add New</Text></View>
            : <SerieCard isFirstColumn={isEven(index)} serie={item} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          ListHeaderComponent={props => (<View style={styles.marginTop} />)}
          ListFooterComponent={props => (<View style={styles.marginBottom} />)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5,
    },
    marginBottom: {
        marginBottom: 5
    }
})

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesPage)
