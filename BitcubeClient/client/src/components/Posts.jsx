import React from 'react';
import List from './List';
import { useQuery } from 'react-query';
import {fetchPosts} from '../utils/api';

const Posts = ({firstName}) => {
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
                        <List key={post.Id} post={post.Content} />
                    // <li key={post.Id}>{post.Content}</li>
                ))
            }
        </>
    )
}

export default Posts
