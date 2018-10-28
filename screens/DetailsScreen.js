import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { timeFrom } from 'utils/helpers'

import { markers } from 'utils/dummyData'

export default class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props
    const personID = navigation.getParam('personID', 'NO-ID')
    const person = markers[personID]
    return (
      <View style={styles.container}>
        <Image
          source={person.fullImage}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text>Name: {person.name}</Text>
          <Text>Last seen: {timeFrom(person.location.timestamp)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '40%',
    marginBottom: '6%'
  },
  text: {
    paddingHorizontal: '3%'
  }
})

