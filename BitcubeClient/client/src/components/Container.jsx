import React from 'react'
import { Box } from '@chakra-ui/core';

const Container = (props) => {
    const { children, marginTop } = props;
    return (
       <Box
       mt={marginTop}
       maxWidth='600px'
       mx='auto'
       width='100%'
       >
           {children}
       </Box>
    )
}

export default Container;