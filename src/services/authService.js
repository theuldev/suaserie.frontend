const getAuth = () => {
    return JSON.parse(localStorage.getItem('authToken'))
}

const removeAuth = () => {
    localStorage.removeItem('authToken')
}

const setAuth = (response) => {
    console.log(response)
    localStorage.setItem('authToken', JSON.stringify(response))
}
export { getAuth, setAuth, removeAuth };