import React, { useState } from 'react';
import { Text, View,StyleSheet,FlatList, Alert,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Product from './components/product';
import AddProduct from './components/addProduct';

export default function App() {

  const [prods,setProds] = useState([
    {text:'Bananas', key: 1},
    {text: 'Casavas', key:2},
    {text: 'Limes', key:3}
  ]);

  const pressHandler = (key) => {
    setProds(prevProds => {
      return prevProds.filter(prod=> prod.key!=key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3){
      setProds(prevProds =>{
        return[
          {text,key: Math.random().toString() },
          ...prevProds
        ];
      });
    } else {
      Alert.alert('Short entry', 'Product name must be at least 3 characters long',
        [ {text:'OK',onPress:() => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style = {styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddProduct submitHandler={submitHandler}/>
          <View style = {styles.list}>
              <FlatList 
              data={prods} 
              renderItem={ ({item}) =>(
                <Product item = {item} pressHandler={pressHandler} />
              )}
              />
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});