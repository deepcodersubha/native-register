import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.0.187:5500/register', { name, email, password });
      console.log(response.data);
      navigation.navigate('Login')
    } catch (error) {
      console.error(error.message);
    }
  };

  const test = () => {
    navigate.navigation('Login')
  }


  return (
    <View > 
      <TextInput placeholder="Username" onChangeText={(text) => setName(text)} />
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} required/>
      <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  
})