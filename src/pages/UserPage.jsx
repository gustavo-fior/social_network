import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../api/api';
import Post from '../components/Post';

const UserPage = () => {

    const [posts, setPosts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        getPosts(username, setPosts);
    }, [username]);

    return (
        <Grid container justifyContent={"center"}>
            <Container justify="center" sx={{ margin: 3 }} maxWidth="md">
                <Typography variant="h3">@{username}´s profile</Typography>
                {posts.map((post, index) => (
                    <>
                        <Post key={index} post={post} />
                    </>
                ))}
            </Container>
        </Grid>
    );
}

export default UserPage;