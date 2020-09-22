import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/core';

const Navbar = () => {
    return (
        <div>
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
                        <span role='img' aria-label='Image'>👋🏼</span>BitFriends
                    </Text>
                </Link>
                <Box ml={"auto"}
                >
                    <Link to="/login">
                        <Button marginRight={4} variant='outline'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button>Sign Up</Button>
                    </Link>
                </Box>
            </Flex>
        </div>
    )
}

export default Navbar;