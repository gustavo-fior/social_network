import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Stack,
  Link,
  Fab,
} from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { formatDate } from "../../util/format";
import {
  deletePost,
  getLikesFromPost,
  likePost,
  unlikePost,
} from "../../api/api";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(post.alreadyLiked);
  const [likes, setLikes] = useState(post.likes);

  useEffect(() => {
    getLikesFromPost(post.id, setLikes);
  }, [liked]);

  return (
    <>
      <Paper elevation={12} sx={{ marginTop: 2 }}>
        <Grid sx={{ padding: 2 }} container>
          <Grid spacing={2} container>
            <Grid item md={9.5}>
              <Stack direction="row" spacing={2}>
                <Avatar>{post.username.charAt(0).toUpperCase()}</Avatar>
                <Link
                  color="black"
                  sx={{ paddingTop: 0.8 }}
                  href={`/user/${post.username}`}
                  underline="hover"
                >
                  {post.username}
                </Link>
              </Stack>
            </Grid>
            <Grid item md={2.5}>
              <Stack direction="row" spacing={2}>
                <Typography sx={{ mt: 1.2 }}>
                  {formatDate(post.creationDate)}
                </Typography>
                {post.isFromUser ? (
                  <Fab size="small">
                    <ClearIcon
                      onClick={() => {
                        deletePost(post.id).then(() => {
                            window.location.reload();
                        });
                      }}
                    />
                  </Fab>
                ) : null}
              </Stack>
            </Grid>
          </Grid>
          <Grid sx={{ marginTop: 3 }} item md={12}>
            <TextField disabled value={post.content} />
          </Grid>
          <Stack sx={{ marginTop: 2 }} direction="row" spacing={2}>
            {liked ? (
              <ThumbUpRoundedIcon
                onClick={() => {
                  unlikePost(post.id, setLiked);
                }}
                color="disabled"
              />
            ) : (
              <ThumbUpOutlinedIcon
                onClick={() => {
                  likePost(post.id, setLiked);
                }}
                color="disabled"
              />
            )}

            <Typography sx={{ paddingTop: 0.3 }}>{likes}</Typography>
          </Stack>
        </Grid>
      </Paper>
    </>
  );
};

export default Post;
