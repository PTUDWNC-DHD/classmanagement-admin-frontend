const fetchGetClassList = (token) => {
    return fetch(process.env.REACT_APP_API_URL + "/class", {
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

const fetchGetClass = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/class/" + id, {
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

const fetchPostClass = (token, {name, ownerId}) => {
    return fetch(process.env.REACT_APP_API_URL + "/class/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
            name, ownerId
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

const fetchPatchClass = (token, data) => {
    return fetch(process.env.REACT_APP_API_URL + "/class/", {
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

const fetchDeleteClass = (token, id) => {
    return fetch(process.env.REACT_APP_API_URL + "/class/" + id, {
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
    fetchGetClassList,
    fetchGetClass,
    fetchPostClass,
    fetchPatchClass,
    fetchDeleteClass,
}
