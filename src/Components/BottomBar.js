import React,{useMemo} from 'react';
import { View, Text,Dimensions,TouchableOpacity } from 'react-native';
import Styled, { css } from 'styled-components';

import colors from '../Utils/colors';


const Shadow = css`
    shadowRadius: 2px;
    shadowOpacity: 5;
    shadowOffset: 3.5px 0.2px;
    elevation: 8;
    shadowColor:${colors.black};
`
const BottomBarContainer = Styled(View)`
    backgroundColor:${colors.primaryDark};
    width: 100%;
    height: 8%;
    zIndex: 5;
    flexDirection:row;
    ${Shadow}
`
const BottomBarColumn = Styled(TouchableOpacity)`
    backgroundColor:${props => props.active ? colors.primary : colors.primaryDark};;
    flex:1;
    flexDirection:column;
    justifyContent:center;
    alignItems:center;
    marginRight:1px;
`
const TextMenu = Styled(Text)`
    color:${colors.white};
    font-weight:bold;
    
`

const Index = ({ state, descriptors ,navigation}) =>{
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    
    const onNavigate = (route, focused, index) => {
        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true, });
        if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }

  return (
    <BottomBarContainer>
      {state.routes.map((route, idx) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
            const focused = state.index === idx;
        return (
        <BottomBarColumn key={idx.toString()} active={focused}
            onPress={() => onNavigate(route, focused, idx)}
            >
            <TextMenu>
                {route.name}
            </TextMenu>
        </BottomBarColumn>
        )}
    )}
    </BottomBarContainer>
  );
        }

export default Index;