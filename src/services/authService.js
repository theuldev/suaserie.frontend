const getAuth =() => {
    return JSON.parse(localStorage.getItem('authToken'))
}

export default getAuth;