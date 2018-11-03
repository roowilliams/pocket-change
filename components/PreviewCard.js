import React, { Component } from 'react'
import styled from 'styled-components'
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native'

import { markers, markersByID, charities } from '../utils/dummyData'
import { timeFrom } from '../utils/helpers'

import { Card } from './Layout'
import { StyledText } from './Typography'

const Container = styled(Card)`
    flex: 1;
    width: ${props => props.width};
    height: ${props => props.height};
`

const Header = styled.View`
    justifyContent: space-between;
    flex-direction: row;
    padding-horizontal: 20px;
`

const Left = styled.View`
    align-items: flex-start;
    justify-content: center;
`
const Right = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`

const CharityIcon = styled.Image`
    max-width: 100%;
    width: 64px;
    height: 64px;
`

const Name = styled.Text`
    font-size: 22px;
`

const Status = styled.Text`
    font-size: 12px;
    color: #bdbdbd;
`

const Portrait = styled.Image`
    align-self: center;
    height: 80%;
    width: 100%;
    resizeMode: cover;
`

export default class PreviewCard extends Component {
    render() {
        const { width, height, person, showDetails } = this.props
        const charity = charities[person.charity.id]
        return (
            <Container width={width} height={height}>
                <Header>
                    <Left>
                        <Name>{person.name}</Name>
                        <Status>{timeFrom(person.location.timestamp)}</Status>
                    </Left>
                    <Right>
                        <CharityIcon source={require('../assets/img/charities/logos/thebowerymission.png')} />
                    </Right>
                </Header>
                <TouchableHighlight onPress={() => showDetails(person.id)} style={styles.image}>
                    <Portrait
                        source={person.fullImage}
                        resizeMode="cover"
                    />
                </TouchableHighlight>


                {/* <Card style={styles.mb}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={charity.logo} />
                            <Body>
                                <Text>{person.name}</Text>
                                <Text note>Last seen: {timeFrom(person.location.timestamp)}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <TouchableHighlight onPress={() => showDetails(personID)} style={styles.image}>
                        <CardItem cardBody>
                            <Image
                                style={{
                                    resizeMode: "cover",
                                    width: null,
                                    height: 200,
                                    flex: 1
                                }}
                                source={person.fullImage}
                            />

                        </CardItem>
                    </TouchableHighlight>
                    <CardItem style={{ paddingVertical: 0 }}>

                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>89 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>{person.backers} Backers</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card> */}
                {/* <Card>

                    <View style={styles.text}>
                        <Text>Name: {person.name}</Text>
                        <Text>Last seen: {timeFrom(person.location.timestamp)}</Text>
                        <Button
                            title="More Details"
                            onPress={() => showDetails(personID)}
                        />
                    </View>
                </Card> */}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingVertical: '6%'
    },
    text: {
        paddingHorizontal: '3%'
    }
})

