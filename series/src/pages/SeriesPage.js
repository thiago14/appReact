import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SerieCard from '../components/SerieCard'
import AddSerieCard from '../components/AddSerieCard'

import series from '../../series.json'

const isEven = number => {
    if(number % 2 === 0)
      return { paddingLeft: 10 }
    return { paddingRight: 10 }
}

class SeriesPage extends Component {
  render() {
    const { navigation } = this.props
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

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesPage)
