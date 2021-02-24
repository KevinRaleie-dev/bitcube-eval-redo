import React, { useContext } from 'react';
import Container from '../components/Container';
import { useForm } from 'react-hook-form';
import { FormControl, Stack, FormLabel, Input, Button, Text, Box } from '@chakra-ui/core';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import AlertModal from '../components/Alert';
import { Link } from 'react-router-dom';

const Login = ({history}) => {
    const { setUser } = useContext(AuthContext);
    const {register, handleSubmit, formState} = useForm();

    const onSubmit = async (data) => {
        
        const BASE_URL = 'https://localhost:5001/api/users/login';

        try {
            const response = await axios.post(BASE_URL, data);

            setUser(response.data);

            history.push('/home');
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container marginTop={8}>
                <Text fontSize='5xl' fontWeight='bold' marginBottom={4}>Login</Text>
                {!formState.isSubmitSuccessful ? <></> : <AlertModal variant='left-accent' status='error' description="Invalid email or password" />}
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
                    <Button
                    type='submit' 
                    isLoading={formState.isSubmitting}
                    loadingText='Signing in...'
                    >Sign In</Button>
                    </Stack>
                </form>
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
                <Box display='flex' flexDirection='row' my={5}>
                    <Text marginRight={2}>
                        Do not have an account? 
                    </Text>
                    <Link to='/register'>
                       <Text fontWeight='bold'>Register here.</Text>
                    </Link>
                </Box>
            </Container>
        </>
    )
}

export default Login;