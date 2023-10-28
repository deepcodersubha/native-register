import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.0.187:5500/login', { name, password });
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Username" onChangeText={(text) => setName(text)} />
            <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />

        </View>
    )
}

export default Login