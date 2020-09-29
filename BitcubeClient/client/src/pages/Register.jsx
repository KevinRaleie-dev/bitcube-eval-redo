import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import AlertModal from '../components/Alert';
import axios from 'axios';

const Register = () => {
    const {register, handleSubmit, formState} = useForm();

    const BASE_URL = 'https://localhost:5001/api/users';

    const onSubmit = async (data) => {

        const { email, password, firstName, lastName } = data;
        
        try {
            const request = await axios.post(BASE_URL, {
                Email: email,
                Name: firstName,
                Surname: lastName,
                Password: password
            });
            
            console.log(request);

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Navbar />
            <Container>
                <Text fontSize='5xl' fontWeight='bold' marginBottom={4}>Register</Text> 
                {!formState.isSubmitSuccessful ? <div></div> : <AlertModal status='error' variant='left-accent' description='User already exists' />}
                   <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                    <FormControl isRequired>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input name='email' ref={register} type='email' id='email' placeholder='Enter email address'/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='fname'>First name</FormLabel>
                        <Input name='firstName' ref={register} id='fname' placeholder='Enter your name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='lname'>Last name</FormLabel>
                        <Input name='lastName' ref={register} id='lname' placeholder='Enter your surname' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input name='password' ref={register} id='password' type='password' placeholder='Enter a password'/>
                    </FormControl>
                    <Button
                    type='submit' 
                    isLoading={formState.isSubmitting}
                    loadingText='Registering...'
                    >Register</Button>
                    </Stack>
                </form>
            </Container>
        </>
    )
}

export default Register;