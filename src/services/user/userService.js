import api from '../api'

const createUser = (data) => {
    const urld = '/user/create'
    api.post(urld, data).then((response) => {
        localStorage.setItem('authToken', JSON.stringify(response.data))
        console.log(response.data)
        return response;
    }).catch((error) => {
        if (error) {
            console.log('Não autorizado', error)
        }
    })
}

const updateUser = (data) => {
    const urld = '/user/update-me'

    api.put(urld, data).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => {
        if (error) {
            console.log('Erro: ' + error)
        }
    })
}
const deleteUser = (data) => {
    const urld = '/user/delete-me'
    api.delete(urld,data).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => {
        if (error) {
            console.log('Erro: ' + error)
        }
    })
}

export{createUser,deleteUser,updateUser}