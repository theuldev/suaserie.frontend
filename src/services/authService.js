
const removeAuth = () => {
    localStorage.removeItem('acessToken')
}

const setAuth = async (response) => {
    console.log(response)
    await localStorage.setItem('acessToken', JSON.stringify(response))
}
export { setAuth, removeAuth };