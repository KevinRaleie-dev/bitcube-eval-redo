import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/core';

const Navbar = () => {
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
                >
                    <Link to="/login">
                        <Button marginRight={4} variant='outline'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button variantColor='blue' bg='#6b63ff'>Sign Up</Button>
                    </Link>
                </Box>
    </Flex>
    )
}

export default Navbar;