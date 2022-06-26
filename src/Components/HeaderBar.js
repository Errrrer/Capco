import React from 'react'
import { View, Text,SafeAreaView,Dimensions} from 'react-native'
import Styled, { css } from 'styled-components';

import colors from '../Utils/colors';

const { width,height } = Dimensions.get("screen")


const Shadow = css`
    shadowRadius: 2px;
    shadowOpacity: 5;
    shadowOffset: 3.5px 0.2px;
    elevation: 8;
    shadowColor:${colors.black};
`
const HeaderBarContainer = Styled(SafeAreaView)`
    backgroundColor:${colors.primary};
    width: 100%;
    height: ${height*0.08}px;
    zIndex: 5;
    flexDirection:row;
    justifyContent:center;
    alignItems:center;
    ${Shadow}
`
const TextMenu = Styled(Text)`
    color:${colors.white};
    font-size:20px;
    font-weight:bold;
`

const Index = ({ route }) =>{
  return (
    
    <HeaderBarContainer>
      <TextMenu>{route.name}</TextMenu>
    </HeaderBarContainer>
  )
}

export default Index;