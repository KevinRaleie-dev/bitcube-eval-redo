import React, {useContext} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Button, Flex, Text, Stack } from '@chakra-ui/core';
import AuthContext from '../context/AuthContext';


const Navbar = (props) => {

    const { user, setUser } = useContext(AuthContext);
    return (
    <Flex 
            bg="white" 
            w="100%" 
            p={4} 
            color="black"
            borderBottomWidth='1px'
            top={0}
            position='sticky'
            zIndex={2}
            >
                <Link to={Object.keys(user).length === 0 ? '/' : '/home'}>
                    <Text 
                    fontSize='3xl' 
                    fontWeight='bold'
                    >
                        <span role='img' aria-label='Image'>👋🏼</span>Friend.ly
                    </Text>
                </Link>
                <Box ml={"auto"}>
                    {
                        Object.keys(user).length === 0 ? <>
                            <Button onClick={() => props.history.push('/login')} marginRight={4} variant='outline'>Sign in</Button>       
                            <Button onClick={() => props.history.push('/register')} variantColor='blue' bg='#6b63ff'>Sign up</Button>  
                        </> : <>
                            <Stack display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                                <Link to="/profile">
                                    <Text mx={5} my={3}>
                                        Profile
                                    </Text>   
                                </Link>
                                <Link to="/friends">
                                    <Text mx={5} my={3}>
                                        Friends
                                    </Text>   
                                </Link>
                                <Button onClick={() => {
                                    setUser(null);

                                    props.history.push('/login')
                                }} variantColor='blue' bg='#6b63ff'>Log out</Button>   
                            </Stack>
                        </>
                    }     
                    
                </Box>
    </Flex>
    )
}

export default withRouter(Navbar);