const fetchLogin = (usernameToFetch, passwordToFetch) => {
  return fetch(process.env.REACT_APP_API_URL+'/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: usernameToFetch,
      password: passwordToFetch
    })
  })
  .then((res) => {
    //console.log('res: ', res)
    if (res.ok)
      return res.json().then((result) => {
        //console.log('result: ', result)
        if (!result)
          return { error: "No data"}
        else if (result.errors)
          return { error: result.errors}
        else
          return { data: result }
      })
    else
      return { error: "Login failed" }
  })
  .catch((error) => {
    //console.log('error: ', error)
    return { error: error }
  })
}

export {
  fetchLogin
}

