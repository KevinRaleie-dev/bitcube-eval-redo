import React, { useContext } from 'react';
import Container from '../components/Container';
import { useForm } from 'react-hook-form';
import { FormControl, Stack, FormLabel, Input, Button, Text, Checkbox } from '@chakra-ui/core';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const { user, setUser } = useContext(AuthContext);
    const {register, handleSubmit, formState} = useForm();

    // TODO: a few things we need to do here...
    // when everything checks out when logging in a user
    // we store the user response from the server inside the app's context
    // eg setUser(response)
    // const onSubmit = () => {
    //     // console.log(data);
    // };

    const onSubmit = async (data) => {
        // const {email, password} = data;

        const BASE_URL = 'https://localhost:5001/api/users/login';

        try {
           const response = await axios.post(BASE_URL, data);

        console.log(response);
        setUser(response);
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        
            <Container>
                <Text fontSize='5xl' fontWeight='bold' marginBottom={4}>Login</Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input name='email' ref={register} type='email' id='email' placeholder=''/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input name='password' ref={register} type='password' id='password' placeholder=''/>
                    </FormControl>
                    {/* <Checkbox value="Remember">Remember me</Checkbox>   */}
                    <Button
                    type='submit' 
                    isLoading={formState.isSubmitting}
                    loadingText='Logging in...'
                    >Login</Button>
                    </Stack>
                </form>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </Container>
    )
}

export default Login;