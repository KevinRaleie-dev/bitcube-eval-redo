import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const List = ({post, rest}) => {
    return (
        <>
            <Box p={5} borderWidth="1px" borderRadius={8} my={5} {...rest}>
                <Text mt={4}>
                    {post}
                </Text>
            </Box>
        </>
    )
}

export default List
