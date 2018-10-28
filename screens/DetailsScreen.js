import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { timeFrom } from '../utils/helpers'

import { markers } from '../utils/dummyData'

import { Container, Content, FixedBottom } from '../components/Layout'
import { Heading1, Heading2, SubHeading, Body, TouchableText } from '../components/Typography'
import { PrimaryAction } from '../components/Buttons';


const MoreButton = ({id, name, showStory}) => (
  <TouchableHighlight onPress={() => showStory(id)}>
    <TouchableText>Read {name}'s story</TouchableText>
  </TouchableHighlight>
)


const Summary = ({children, ...moreProps}) => {
  return (
    <View>
      <Body>{children}</Body>
      <MoreButton {...moreProps} />
    </View>
)}


export default class DetailsScreen extends Component {

  showStory = id => {
    this.props.navigation.navigate('Story', { 'personID': id })
  }

  render() {
    const { navigation } = this.props
    const personID = navigation.getParam('personID', 'NO-ID')
    const person = markers[personID]

	return (
		<Container>
			<Content>
				<View>
				<Heading1>{person.name}</Heading1>
				<SubHeading>Last seen: {timeFrom(person.location.timestamp)}</SubHeading>
				</View>
				<Image
				source={person.fullImage}
				style={styles.image}
				/>
				<Summary id={person.id} name={person.name} showStory={this.showStory}>
				{person.story.summary}
				</Summary>
				<Heading2>Goals</Heading2>
				<Text>- Goal 1</Text>
				<Text>- Goal 2</Text>
				<Text>- Goal 3</Text>
				<Text>- Goal 4</Text>
			</Content>
			<FixedBottom>
				<PrimaryAction>Donate to {person.name}</PrimaryAction>
			</FixedBottom>
		</Container>
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

