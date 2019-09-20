import axios from 'axios'
//timeoutをつけたい
export const postDataFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const postData = async (data) => {
        console.log(data)
        try{
            const response = await instance.post('/upload',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return postData
}

export const createAcountFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const createAcount = async (data) => {
        try{
            const response = await instance.post('/createAcount',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return createAcount
}

export const loginAcountFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const loginAcount = async (data) => {
        try{
            const response = await instance.post('/login',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return loginAcount
}

export const upLoadThumbnailFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const upLoadThumbnail = async (data) => {
        try{
            const response = await instance.post('/mypage',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return upLoadThumbnail
}

export const updateDBFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const updateDB = async (data) => {
        try{
            const response = await instance.post('/mypage/change',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return updateDB
}

export const getHistoryFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const getHistory = async (data) => {
        try{
            const response = await instance.post('/mypage/history',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return getHistory
}

export const deleteHistoryFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig,
    }
    const instance = axios.create(config)

    const deleteHistory = async (data) => {
        try{
            const response = await instance.post('/mypage/history/delete',data)

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return deleteHistory
} 