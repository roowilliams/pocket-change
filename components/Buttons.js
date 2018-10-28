import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import styled from 'styled-components'
import Colors from '../constants/Colors'

const headingFont = 'roboto-condensed-bold'
const bodyFont = 'cabin-regular'

const PrimaryActionContainer = styled(View)`
    padding: 10px 20px;
    border-radius: 3;
    background-color: ${Colors.tintColor};
    align-items: center;
`
const PrimaryActionText = styled(Text)`
    color: #ffffff;
    font-family: ${bodyFont};
    font-size: 18px;
`

export const PrimaryAction = ({onPress, children}) => (
    <TouchableHighlight onPress={onPress}>
        <PrimaryActionContainer>
            <PrimaryActionText>
                {children}
            </PrimaryActionText>
        </PrimaryActionContainer>
    </TouchableHighlight>
)