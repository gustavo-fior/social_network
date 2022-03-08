import React, { useEffect, useState } from 'react';
import { getHome, getUsername } from '../api/api';
import Typography from '@mui/material/Typography';
import { Container, Grid, Paper, Avatar, Stack } from '@mui/material';
import Post from '../components/Post';

const UserHome = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getHome(setPosts);
    }, [])

    return (
        <>
            <Grid container justifyContent={"center"}>
                <Container justify="center" sx={{ margin: 3 }} maxWidth="md">
                    <Typography variant="h3">Welcome, @{getUsername()}!</Typography>
                    <Grid spacing={3} container>
                        <Grid item md={10}>
                            {posts.map((post, index) => (
                                <>
                                    <Post key={index} post={post} />
                                </>
                            ))}
                        </Grid>
                        <Grid sx={{ marginTop: 2 }} item md={2}>
                            <Paper sx={{ padding: 2, position: "fixed",}} elevation={12}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar>J</Avatar>
                                    <Typography sx={{ paddingTop: 1}}>{getUsername()}</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    );
}

export default UserHome;