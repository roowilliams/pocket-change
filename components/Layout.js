import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
    flex: 1;
    background-color: #ffffff;
`
export const Content = styled(View)`
    padding: 20px;
    flex: 1;
    background-color: #ffffff;
`
export const Card = styled(View)`
    margin: 10px;
    border-radius: 3;
    background-color: #ffffff;
    box-shadow: 0px 3px 3px #bdbdbd;
`

export const FixedBottom = styled(View)`
    position: absolute;
    bottom: 20px;
    align-items: center;
    width: 100%;
`