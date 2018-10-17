import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Row = ({ label = '', content = '' }) => (
    <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{ label }</Text>
        <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View>
)

const styles = StyleSheet.create({
  line: {
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#C5C5C5'
  },
  cell: {
      fontSize: 18,
      paddingLeft: 5
  },
  label: {
      fontWeight: 'bold',
      flex: 1
  },
  content: {
      flex: 3
  }
})

export default Row
