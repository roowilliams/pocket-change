import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { 
    StyleSheet, 
    View, 
    Dimensions, 
    Text, 
    Animated, 
    Image 
} from 'react-native'

import {
    Constants,
    MapView,
    Location, 
    Permissions
} from 'expo'

const { Marker } = MapView

import moment from 'moment'

import PreviewCard from '../components/PreviewCard'

import { markers, markersByID } from '../utils/dummyData'

const { width, height } = Dimensions.get('window')

const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 60;


const StyledPreviewCard = styled(PreviewCard)`
    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    padding: 10px;
    elevation: 2;
    background-color: #fff;
    overflow: hidden;
`
const StyledMapView = styled(MapView)`
    flex-direction: row;
    flex: 1;
    align-items: flex-end;
    width: 100%;
`

const StyledMarker = styled(Marker)`
    border-radius: 4;
    width: 8;
    height: 8;
    background-color: rgba(130,4,150, 0.3);
`

const MarkerWrap = styled(Animated.View)`
    align-items: center;
    justify-content: center;
    align-self: center;
`

const MarkerRing = styled(Animated.View)`
    width: 24;
    height: 24;
    border-radius: 12;
    background-color: rgba(130,4,150, 0.3);
    position: absolute;
    top: -9;
    left: -12;
    border-width: 1;
    border-color: rgba(130,4,150, 0.5);
`

const CardList = styled(Animated.ScrollView)`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
`
const Container = styled.View`
    flex: 1;
`

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            location: null,
            errorMessage: null,
            showPerson: null
        }

        let { width, height } = Dimensions.get('window')
        const ASPECT_RATIO = width / height
        this.LATITUDE_DELTA = 0.06
        this.LONGITUDE_DELTA = this.LATITUDE_DELTA * ASPECT_RATIO

        // this should probably be based on screen height
        this.mapOffsetLat = -0.011
        this.index = 0
        this.animation = new Animated.Value(0)

    }

    componentWillMount() {
 
        this.getLocation()
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= markersByID.length) {
                index = markersByID.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }
    
            clearTimeout(this.regionTimeout)
            this.regionTimeout = setTimeout(() => {
            if (this.index !== index) {
                this.index = index
                const { lat, lng } = markers[markersByID[index]].location
                const location = { latitude: lat+this.mapOffsetLat, longitude: lng }
                console.log(location)
                this.map.animateToRegion({
                    ...location,
                    latitudeDelta: this.LATITUDE_DELTA,
                    longitudeDelta: this.LONGITUDE_DELTA,
                },350)}
            }, 10)
        })
    }

    getLocation = async () => {
        // let { status } = geolocation.requestAuthorization();
        // if (status !== 'granted') {
        //     this.setState({
        //         errorMessage: 'Permission to access location was denied',
        //     })
        // }

        // geolocation.getCurrentPosition(location => this.setState({ location }))
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    }

    regionFrom(lat, lon, accuracy) {
        const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
        const circumference = (40075 / 360) * 1000;

        const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
        const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);
        return {
            latitude: lat+this.mapOffsetLat,
            longitude: lon,
            latitudeDelta: this.LATITUDE_DELTA,
            longitudeDelta: this.LONGITUDE_DELTA
            // latitudeDelta: Math.max(0, latDelta),
            // longitudeDelta: Math.max(0, lonDelta)
        }
    }

    handleMarkerPress = event => {
        console.log(event.nativeEvent.id)
        console.log(this.peopleList)
        const newX = index * CARD_WIDTH
        this.peopleList.scrollTo({x: newX, y: 0, animated: true})
        event.stopPropagation();
    }

    handleCardPress = id => {
        this.props.navigation.navigate('Details', { 'personID': id })
    }

    render() {

        const { location } = this.state

        const interpolations = markersByID.map((id, index) => {
            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
              inputRange,
              outputRange: [1, 2.5, 1],
              extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { opacity, scale }
          });

        return (
            <Container>

                    <StyledMapView
                        initialRegion={location ? this.regionFrom(location.coords.latitude, location.coords.longitude, location.coords.accuracy) : null}
                        innerRef={node => this.map = node}
                        showsUserLocation={true}
                        onMarkerPress={this.handleMarkerPress}
                    >
                        {markersByID.map((id, index) => {
                            const marker = markers[id]
                            const latlng = { latitude: marker.location.lat, longitude: marker.location.lng }
                            const opacity = interpolations[index].opacity
                            const scale = interpolations[index].scale

                            return ( 
                                <StyledMarker key={`${index}-${id}`} coordinate={latlng}>
                                    <MarkerWrap style={{opacity: opacity}} image={marker.avatar}>
                                        <MarkerRing style={{transform:[{scale: scale}]}} />
                                    </MarkerWrap> 
                                </StyledMarker>
                            )
                        })}


                    </StyledMapView>
 
                            <CardList
                                horizontal
                                scrollEventThrottle={8}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={CARD_WIDTH+20}
                                decelerationRate="fast"
                                innerRef={ref => this.peopleList = ref}
                                onScroll={Animated.event(
                                    [
                                        {
                                            nativeEvent: {
                                                contentOffset: {
                                                    x: this.animation,
                                                },
                                            },
                                        },
                                    ],
                                    { useNativeDriver: true }
                                )}
                                contentContainerStyle={styles.endPadding}
                            >
                            {markersByID.map((id, index) => {
                                const marker = markers[id]
                                return (
                                    <StyledPreviewCard key={index} person={marker} width={CARD_WIDTH} height={CARD_HEIGHT} showDetails={this.handleCardPress}  />
                                )
                            })}
                        </CardList>

            </Container>
        )
    }
}


const styles = StyleSheet.create({

    endPadding: {
      paddingRight: width - CARD_WIDTH-10,
      paddingLeft: 20,
    }
  });