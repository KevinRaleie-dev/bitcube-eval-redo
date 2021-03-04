import React from 'react';
import List from './List';
import { useQuery } from 'react-query';
import {fetchPosts} from '../utils/api';
import { Box, Spinner } from '@chakra-ui/core';

const Posts = () => {
    const {data, isLoading, isError, error} = useQuery('posts', fetchPosts);
    
    return (
        <React.Fragment>
            {
                isLoading ? <>
                    <Box
                    display='flex'
                    justifyContent='center'
                    mt={3}
                    >
                        <Spinner />
                    </Box>
                </> : <>
                
                    {
                        [...data.data].reverse().map((post) => (
                            <List key={post.Id} post={post.Content} />
                        ))
                    }
                </>
            }
            {
                isError && <span>Something went wrong: {error.message}</span>
            }
        </React.Fragment>
    )
}

export default Posts
