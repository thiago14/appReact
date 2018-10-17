import React from 'react'
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const AddSerieCard = ({ isFirstColumn, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, isFirstColumn]}
  >
    <View style={styles.card}>
      <Image source={require('../../assets/plus-button.png')} style={styles.image}/>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window'). width / 2
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '75%',
    height: '73%',
  }
})

export default AddSerieCard