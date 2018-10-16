import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// import {  } from '../actions'

export class SeriesPage extends Component {

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage)