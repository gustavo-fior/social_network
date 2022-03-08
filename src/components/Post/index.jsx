import React from 'react';
import Typography from '@mui/material/Typography'
import { Avatar, Grid, Paper, TextField, Stack, Link } from '@mui/material';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { formatDate } from '../../util/format';
import { likePost } from '../../api/api';

const Post = ({ post }) => {

    return (
        <>
            <Paper elevation={12} sx={{ marginTop: 2 }}>
                <Grid sx={{ padding: 2 }} container>
                    <Grid spacing={2} container>
                        <Grid item md={10}>
                            <Stack direction="row" spacing={2}>
                                <Avatar>{post.username.charAt(0).toUpperCase()}</Avatar>
                                <Link color="black" sx={{ paddingTop: 0.8 }} href={`/user/${post.username}`} underline="hover">
                                    {post.username}
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>{formatDate(post.creationDate)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: 3 }} item md={12}>
                        <TextField disabled value={post.content} />
                    </Grid>
                    <Stack sx={{ marginTop: 2 }} direction='row' spacing={2}>
                        <ThumbUpRoundedIcon onClick={() => {
                            likePost(post.id);
                        }} color="disabled" />
                        <Typography sx={{ paddingTop: 0.3 }}>{post.likes}</Typography>
                    </Stack>
                </Grid>
            </Paper>
        </>
    );
}

export default Post;