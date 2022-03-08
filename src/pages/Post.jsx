import { Button, Container, Grid, Typography, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsername, makePost } from '../api/api';

const Post = () => {

    const [content, setContent] = useState("");

    let navigate = useNavigate();

    return (
        <Grid container justifyContent={"center"}>
            <Container justify="center" sx={{ margin: 3 }} maxWidth="md">
                <Typography variant="h3">Novo post</Typography>
                <Paper sx={{ padding: 3, marginTop: 3 }} elevation={12}>
                    <form onSubmit={
                        (event) => {
                            event.preventDefault();
                            makePost(content).then(() => {
                                navigate(`/user/${getUsername()}`)
                            });
                        }
                    }>
                        <TextField onChange={(event) => {
                            setContent(event.target.value);
                        }} fullWidth multiline rows={5} placeholder="O que passa pela sua cabeça?" />
                        <Button type="submit" sx={{ marginTop: 2 }} variant="contained">Postar</Button>
                    </form>
                </Paper>
            </Container>
        </Grid>
    );
}

export default Post;