import React from 'react';
import Container from '../components/Container';
import { Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { registerUser } from '../utils/api';
import { useMutation } from 'react-query';
import AlertModal from '../components/Alert';

const Register = ({history}) => {
    const mutation = useMutation(registerUser);
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = async (data) => {
        mutation.mutate({
            Email: data.email,
            Name: data.firstName,
            Surname: data.lastName,
            Password: data.password
        }, {
            onSettled: (data, error, variables, context) => {
                if (data) {
                    history.push('/login');
                }
            }
        })
    }

    return (
        <>
            <Container marginTop={8}>
                <Text fontSize='5xl' fontWeight='bold' marginBottom={4}>Register</Text> 
                {!formState.isSubmitSuccessful ? '' : <AlertModal status='error' variant='left-accent' description='User already exists' />}
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