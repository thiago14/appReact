import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SerieCard from '../components/SerieCard'
import AddSerieCard from '../components/AddSerieCard'
import { watchSeries } from '../actions'

const isEven = number => {
    if(number % 2 === 0)
      return { paddingLeft: 10 }
    return { paddingRight: 10 }
}

class SeriesPage extends Component {
  componentDidMount() {
    this.props.watchSeries()
  }

  render() {
    const { series, navigation } = this.props

    if(series == null) {
      return <ActivityIndicator/>
    }
    return (
      <View>
        <FlatList
          data={[...series, { isLast: true }]}
          renderItem={({item, index}) => (
            item.isLast
            ? <AddSerieCard
                isFirstColumn={isEven(index)}
                onPress={() => navigation.navigate('SerieFormPage')}
              />
            : <SerieCard
                isFirstColumn={isEven(index)}
                serie={item}
                onPress={() => navigation.navigate('SerieDetail', { serie: item })}
              />
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

const mapStateToProps = state => {
  const { series } = state
  if(series === null) {
    return { series }
  }
  const keys = Object.keys(series)
  const newSeries = keys.map(id => {
    return { ...series[id], id }
  })
  return { series: newSeries }
}

export default connect(
  mapStateToProps,
  { watchSeries }
)(SeriesPage)
