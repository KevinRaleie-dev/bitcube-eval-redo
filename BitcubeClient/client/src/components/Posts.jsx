import React from 'react'
import { useQuery } from 'react-query';
import {fetchPosts} from '../utils/api';

const Posts = () => {
    const {data, isLoading, isError, error} = useQuery('posts', fetchPosts);

    
    if (isLoading){
        return <span>loading...</span>
    }
    
    if(isError) {
        return <span>Error: {error.message}</span>
    }

    const sortedData = [...data.data];

    return (
        <>
            {
                sortedData.reverse().map((post) => (
                    <li key={post.Id}>{post.Content}</li>
                ))
            }
        </>
    )
}

export default Posts
