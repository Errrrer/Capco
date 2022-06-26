import React,{useMemo} from 'react';
import { View, Text,TouchableOpacity,Image,Dimensions } from 'react-native';
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

const Card = Styled(TouchableOpacity)`
    backgroundColor:${colors.white};
    border: 1px solid ${colors.grayLight};
    zIndex: 5;
    height:${height*0.5}px;
    margin:20px;
    marginBottom:10px;
    marginTop:10px;
`
const ViewTitle = Styled(View)`
    padding:10px;
    flexDirection:row;
`
const TextTitle = Styled(Text)`
    color:${colors.primary};
    font-weight:bold;
`
const ViewDescription = Styled(View)`
    padding:0px 10px 0px 10px;
    flexDirection:row;
`
const TextDescription = Styled(Text)`
    color:${colors.gray};
`
const Img = Styled(Image)`
    width:100%;
    height:${height*0.2}px;
    resizeMode:cover;
`
const TextUpdateDate = Styled(Text)`
    color:${colors.grayLight};
    font-size:10px;
`

const Index = ({ title,image,description,updateDate}) =>{
    return (
      <Card>
        <ViewTitle>
            <TextTitle numberOfLines={1}>{title}</TextTitle>
        </ViewTitle>
        <ViewDescription>
            <Img source={{uri:image}}></Img>
        </ViewDescription>
        <ViewDescription>
            <TextDescription numberOfLines={8}>{description}</TextDescription>
        </ViewDescription>
        <ViewDescription style={{marginTop:5}}>
            <TextUpdateDate>{updateDate}</TextUpdateDate>
        </ViewDescription>
      </Card>
    )
  }
  
  export default Index;