import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Button, Flex, Text } from '@chakra-ui/core';

const Navbar = (props) => {

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
                <Box ml={"auto"}>     
                    <Button onClick={() => props.history.push('/login')} marginRight={4} variant='outline'>Sign in</Button>       
                    <Button onClick={() => props.history.push('/register')} variantColor='blue' bg='#6b63ff'>Sign up</Button>  
                </Box>
    </Flex>
    )
}

export default withRouter(Navbar);