import React from 'react';
import {useForm} from 'react-hook-form';
import {useMutation, useQueryClient} from 'react-query';
import {createPost} from '../utils/api';
import { Box, Button, Stack, Textarea } from '@chakra-ui/core';

const AddPost = ({firstName}) => {
    const {register, handleSubmit, formState, reset} = useForm();
    const mutation = useMutation(createPost);
    const queryClient = useQueryClient();

    let placeholder = `What's on your mind, ${firstName}?`

    const onSubmit = async (data) => {
        const {content} = data;
        mutation.mutate({
            Content: content
        }, {
            onSuccess: () => {
                reset();
                queryClient.invalidateQueries('posts');
            }, 
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Stack spacing={3}>
                        <Textarea
                        name="content"
                        id="content" 
                        placeholder={placeholder}
                        size='sm'
                        borderRadius='10px'
                        ref={register}
                        >
                        </Textarea>
                        <Button
                        isLoading={formState.isSubmitting}
                        loadingText="posting..."
                        type='submit'
                        variantColor='blue'
                        bg='#6b63ff'
                        color='white'
                        >
                            post
                        </Button>
                    </Stack>
                </Box>
            </form>
        </>
    )
}

export default AddPost
