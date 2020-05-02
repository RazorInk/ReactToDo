import React, { useState } from 'react';
import {StyleSheet,View,Text,TextInput,Button} from 'react-native';

export default function AddProduct({submitHandler}){

    const [text,setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add New Product"
                onChangeText={changeHandler}
                value={text}
            />
            <Button color='teal' 
                onPress={() => {
                    setText('');
                    submitHandler(text);
                }}
                title='Add Product' 
            />
        </View>
    )
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});