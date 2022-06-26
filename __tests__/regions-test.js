import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Regions from '../src/Screens/Regions';


const page = renderer.create(<Regions/>)

test('render regions page', () => {
    expect(page).toMatchSnapshot();
});

test('render text', () => {
   const text = page.root.findByProps({testID:'textTest'}).props;
   expect(text.children).toEqual('Regions Page');
})