import React from 'react'
import { Text } from 'react-native'
import { human } from 'react-native-typography'
import styled from 'styled-components'
import Colors from '../constants/Colors'

const headingFont = 'roboto-condensed-bold'
const bodyFont = 'cabin-regular'

export const Title1 = styled.Text`
  ${human.title1Object};
  line-height: ${human.title1Object.lineHeight * 1.25};
  margin-top: ${human.title1Object.lineHeight * 0.50};
`

export const Title2 = styled.Text`
  ${human.title2Object};
  margin-top: ${human.title2Object.lineHeight * 0.35};
`

export const Title3 = styled.Text`
  ${human.title3Object};
  margin-top: ${human.title3Object.lineHeight * 0.35};
`

export const Body = styled.Text`
  ${human.bodyObject};
  line-height: ${human.bodyObject.lineHeight * 1.25};
  margin-top: ${human.bodyObject.lineHeight * 0.35};
`


export const StyledText = styled(Text)`
    font-family: ${bodyFont};
    font-size: 10;
`
export const Heading1 = styled(Text)`
    font-family: ${headingFont};
    font-size: 46;
    color: ${Colors.defaultText};
    margin-vertical: 10px;
`
export const Heading2 = styled(Heading1)`
    font-size: 32;
`
export const Heading3 = styled(Heading1)`
    font-size: 22;
`

export const SubHeading = styled(Text)`
    font-size: 16;
    color: ${Colors.subText};
    margin-bottom: 10px;
`

// export const Body = styled(Text)`
//     font-family: ${bodyFont};
//     font-size: 18;

//     color: ${Colors.defaultText};
//     margin-bottom: 10px;
// `

export const TouchableText = styled(Text)`
    font-family: ${bodyFont};
    font-size: 18;

    color: ${Colors.tintColor};
`