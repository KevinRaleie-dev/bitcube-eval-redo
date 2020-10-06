import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/core';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const {user} = React.useContext(AuthContext);

    const logout = () => {
            // set the current user to null 
    };

    return (
    <Flex 
            bg="white" 
            w="100%" 
            p={4} 
            color="black"
            borderBottomWidth='1px'
            >
                <Link to="/">
                    <Text 
                    fontSize='3xl' 
                    fontWeight='bold'
                    >
                        <span role='img' aria-label='Image'>👋🏼</span>Friend.ly
                    </Text>
                </Link>
                <Box ml={"auto"}
                >{
                    user ?  <Link to="/login">
                                <Button variantColor='blue' bg='#6b63ff'>Log Out</Button>
                            </Link> : 
                    <>
                        <Link to="/login">
                            <Button marginRight={4} variant='outline'>Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button variantColor='blue' bg='#6b63ff'>Sign Up</Button>
                        </Link>
                    </>
                    
                    }
                </Box>
    </Flex>
    )
}

export default Navbar;