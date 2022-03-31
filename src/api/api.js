import axios from "axios";

const setUsername = (username) => {
    sessionStorage.setItem("username", username);
}

export const getUsername = () => {
    return sessionStorage.getItem("username");
}

const setToken = (token) => {
    sessionStorage.setItem("token", token);
}

const getToken = () => {
    return sessionStorage.getItem("token");
}

export const api = axios.create({
    baseURL: "http://localhost:8080"
});

export const auth = async (email, password) => {
    const body = {
        email: email,
        password: password
    }

    await api.post("/auth", body)
        .then(res => {
            setToken(res.data.token);
            setUsername(res.data.username);
        }).catch(err => {
            console.error(err);
        });
}

export const signUp = async (email, username, password) => {
    const body = {
        email: email,
        username: username,
        password: password
    }

    await api.post("/signup", body)
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        });
}

export const makePost = async (content) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    const body = {
        content: content,
        token: getToken()
    }

    await api.post("/post", body, header);

}

export const getHome = async (setDado) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.get(`/home`, header).then(res => {
        console.log(res.data);
        setDado(res.data);
    }).catch(err => {
        console.error(err);
    })

}

export const getPosts = async (username, setDado) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.get(`/post/${username}`, header).then(res => {
        setDado(res.data);
    }).catch(err => {
        console.error(err);
    })

}

export const likePost = async (id, setLiked) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.post(`/post/like/${id}`, {}, header).then(res => {
        if (res.status === 200) {
            setLiked(true);
        }
    }).catch(err => {
        console.error(err);
    })

}

export const unlikePost = async (id, setLiked) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.post(`/post/unlike/${id}`, {}, header).then(res => {
        if (res.status === 200) {
            setLiked(false);
        }
    }).catch(err => {
        console.error(err);
    })

}

export const getLikesFromPost = async (postId, setLikes) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.get(`/post/likes/${postId}`, header).then(res => {
        setLikes(res.data.totalLikes);
    }).catch(err => {
        console.error(err);
    });
}

export const deletePost = async (postId) => {

    const header = {
        headers: {
            "Authorization": "Bearer " + getToken()
        }
    }

    await api.post(`/post/delete`, { id: postId }, header);

}