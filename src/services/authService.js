const getAuth = () => {
    return localStorage.getItem('acessToken')
}

const removeAuth = () => {
    localStorage.removeItem('acessToken')
}

const setAuth = (response) => {
    console.log(response)
    localStorage.setItem('acessToken', JSON.stringify(response))
}
export { getAuth, setAuth, removeAuth };