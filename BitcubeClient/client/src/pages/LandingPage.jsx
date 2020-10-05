import React from 'react';
import { Box, Button, Grid, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom'
import Social from '../images/social.svg';

const LandingPage = () => {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={3} padding={10}>
            <Box w="100%" h="70vh" marginTop={20}>
                <Text fontSize='6xl' fontWeight='bold'>
                    The Platform For Building Friendships
                </Text>
                <Text fontSize='xl'>
                    Share awesome content with people you meet on the platform. Write posts about your day, week or
                    just about anything that floats your boat. Friend.ly is a platform for friends so anything you put
                    on here will only be seen by people in your friendlist. Sign up and start making some friends!
                </Text>
                <Link to='/register'>
                    <Button variantColor='blue' marginTop={5} bg='blue.300' color='white'>
                        Get Started
                    </Button>
                </Link>
            </Box>
            <Box w="100%" h="70vh" justifyContent="center" alignItems="center" display="flex">
                <img src={Social} alt="social image"/>
            </Box>
        </Grid>
    )
}

export default LandingPage;