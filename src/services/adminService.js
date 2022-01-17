const fetchGetAdminList = (token) => {
    return fetch(process.env.REACT_APP_API_URL + "/admin", {
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

const fetchGetAdmin = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/admin/" + id, {
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

const fetchPostAdmin = (token, {username, password, name, role, email}) => {
    return fetch(process.env.REACT_APP_API_URL + "/admin/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            username, 
            password, 
            name, 
            role, 
            email,
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

const fetchPatchAdmin = (token, data) => {
    return fetch(process.env.REACT_APP_API_URL + "/admin/", {
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

const fetchDeleteAdmin = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/admin/" + id, {
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
    fetchGetAdminList,
    fetchGetAdmin,
    fetchPostAdmin,
    fetchPatchAdmin,
    fetchDeleteAdmin,
}
