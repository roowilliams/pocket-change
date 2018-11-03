import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { markers } from '../utils/dummyData'

import { Container, Content, FixedBottom } from '../components/Layout'
import { Title1, SubHeading, Body } from '../components/Typography'
import { PrimaryAction } from '../components/Buttons';


export default class StoryScreen extends Component {
  render() {
    const { navigation } = this.props
    const personID = navigation.getParam('personID', 'NO-ID')
    const person = markers[personID]
    return (
      <Container>
        <Content>
          <Image
            source={person.fullImage}
            style={styles.image}
          />
          <View>
            <Title1>{person.name}'s Story</Title1>
          </View>
          <View>
            <Body>{person.story.expanded}</Body>
          </View>
        </Content>
        <FixedBottom>
            <PrimaryAction>Donate to {person.name}</PrimaryAction>
        </FixedBottom>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '40%',
    marginBottom: '6%'
  },
})

