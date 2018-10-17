import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native'

const SerieCard = ({ serie, isFirstColumn, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[ styles.container, isFirstColumn ]}
  >
    <View style={styles.card}>
      {serie.img ? (
        <Image source={{ uri: serie.img }} aspectRatio={1} resizeMode="cover" />
      ) : null}
      <View style={styles.cardTitleWrapper}>
        <Text adjustsFontSizeToFit textBreakStrategy="highQuality" style={styles.cardTitle}>{serie.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 5,
    height: Dimensions.get('window').width / 2
  },
  card: {
    flex: 1,
    borderWidth: 1
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    height: 50,
    position: 'absolute',
    bottom: 0,
    opacity: .8,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: 'center'
  },
  cardTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default SerieCard
