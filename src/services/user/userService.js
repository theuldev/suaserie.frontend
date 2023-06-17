import api from '../api'
import { setAuth } from '../authService'

const createUser = async (data) => {
    const urld = '/user/create'
    const res = await api.post(urld, data).then((response) => {
        setAuth(response.data.user.acessToken);
        
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