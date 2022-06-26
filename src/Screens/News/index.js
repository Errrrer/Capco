import React, {useState,useEffect} from 'react'
import { View, Text,SafeAreaView,FlatList,TextInput} from 'react-native'
import Styled, { css } from 'styled-components';

import Card from '../../Components/Card';
import MockData from '../../__mock__/News'
import colors from '../../Utils/colors';

const Container = Styled(SafeAreaView)`
    flex: 1;
`
const ViewSearch = Styled(View)`
    backgroundColor: "#fff";
    margin:10px;
    marginLeft:20px;
    marginRight:20px;
    height:50px;
    border:1px solid ${colors.grayLight};
    border-radius:10px;
    padding:10px;
`

let data = [];
const Index = ({navigation}) =>{

  const [dataList,setDataList] = useState([]);
  const [textSearch,setTextSearch] = useState('');
  

  useEffect(()=>{
    getData();
  },[navigation])

  const getData = () =>{
    if (MockData.result == "Y" && MockData.data != null){
      data = MockData.data;
      setDataList(MockData.data);
    }
  }


  const renderItem  = ({item}) =>{
    return(
        <Card 
          title={item.title}
          description={item.description}
          image={item.image}
          updateDate={item.updateDate}
        />
      )
  }
  
  const onSearch = (text) =>{
    
    setTextSearch(text)
    
    let _filter = data.filter((item) => (item.title.toLowerCase().indexOf(text.toLowerCase()) > -1) ||  (item.description.toLowerCase().indexOf(text.toLowerCase()) > -1))

    setDataList(_filter);

    return _filter.length;
  }

  return (
     <Container style={{backgroundColor: "#fff"}}>
      <ViewSearch>
        <TextInput  placeholder='Search' 
                    value={textSearch}
                    onChangeText={(text) => onSearch(text)}
                    testID={'textSearch'}/>
      </ViewSearch>
      <FlatList 
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}/>
     </Container>
  )
}

export default Index;