import React from 'react'
import { Box } from '@chakra-ui/core';

const Container = (props) => {
    const { children } = props;
    return (
       <Box
       mt={8}
       maxWidth='800px'
       mx='auto'
       width='100%'
       >
           {children}
       </Box>
    )
}

export default Container;