import React from 'react'
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/core';
import { Link, withRouter } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Nav = (props) => {
    const {setUser} = React.useContext(AuthContext);

    return (
        <Flex 
            bg="white" 
            w="100%" 
            p={4} 
            color="black"
            borderBottomWidth='1px'
            >
                <Link to="/home">
                    <Text 
                    fontSize='3xl' 
                    fontWeight='bold'
                    >
                        <span role='img' aria-label='Image'>👋🏼</span>Friend.ly
                    </Text>
                </Link>
                <Box ml={"auto"}
                >
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
                </Box>
    </Flex>
    )
}

export default withRouter(Nav);