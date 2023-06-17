const getAuth = () => {
    return JSON.parse(localStorage.getItem('authToken'))
}

const removeAuth = () => {
    localStorage.removeItem('authToken')
}

const setAuth = (response) => {
    localStorage.setItem('authToken', JSON.stringify(response.data))
}
export { getAuth, setAuth, removeAuth };