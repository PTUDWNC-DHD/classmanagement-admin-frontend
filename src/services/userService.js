const fetchGetUserList = (token) => {
    return fetch(process.env.REACT_APP_API_URL + "/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    })
        .then((res) => {
            //console.log('res: ', res)
            if (res.status == 200)
                return res.json().then((result) => {
                    //console.log('result: ', result)
                    return { data: result }
                })
            else if (res.status == 400)
                return res.json().then((result) => {
                    //console.log('error: ', result)
                    return { error: result }
                })
            return { error: "Something wrong with server" }
        })
        .catch((error) => {
            //console.log('error: ', error)
            return { error: error }
        })
}

const fetchGetUser = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/user/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    })
        .then((res) => {
            //console.log('res: ', res)
            if (res.status == 200)
                return res.json().then((result) => {
                    //console.log('result: ', result)
                    return { data: result }
                })
            else if (res.status == 400)
                return res.json().then((result) => {
                    //console.log('error: ', result)
                    return { error: result }
                })
            return { error: "Something wrong with server" }
        })
        .catch((error) => {
            //console.log('error: ', error)
            return { error: error }
        })
}

const fetchPostUser = (token, {username, password, email, name, contact, studentId, avatar, isActive}) => {
    return fetch(process.env.REACT_APP_API_URL + "/user/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            username, 
            password, 
            email, 
            name, 
            contact, 
            studentId, 
            avatar, 
            isActive
        })
    })
        .then((res) => {
            //console.log('res: ', res)
            if (res.status == 200)
                return res.json().then((result) => {
                    //console.log('result: ', result)
                    return { data: result }
                })
            else if (res.status == 400)
                return res.json().then((result) => {
                    //console.log('error: ', result)
                    return { error: result }
                })
            return { error: "Something wrong with server" }
        })
        .catch((error) => {
            //console.log('error: ', error)
            return { error: error }
        })
}

const fetchPatchUser = (token, id, data) => {
    return fetch(process.env.REACT_APP_API_URL + "/user/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            //console.log('res: ', res)
            if (res.status == 200)
                return res.json().then((result) => {
                    //console.log('result: ', result)
                    return { data: result }
                })
            else if (res.status == 400)
                return res.json().then((result) => {
                    //console.log('error: ', result)
                    return { error: result }
                })
            return { error: "Something wrong with server" }
        })
        .catch((error) => {
            //console.log('error: ', error)
            return { error: error }
        })
}

const fetchDeleteUser = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/user/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    })
        .then((res) => {
            //console.log('res: ', res)
            if (res.status == 200)
                return res.json().then((result) => {
                    //console.log('result: ', result)
                    return { data: result }
                })
            else if (res.status == 400)
                return res.json().then((result) => {
                    //console.log('error: ', result)
                    return { error: result }
                })
            return { error: "Something wrong with server" }
        })
        .catch((error) => {
            //console.log('error: ', error)
            return { error: error }
        })
}

export {
    fetchGetUserList,
    fetchGetUser,
    fetchPostUser,
    fetchPatchUser,
    fetchDeleteUser,
}
