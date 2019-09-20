export const setImage = (image,imageName) => ({
    type: 'SET_IMAGE',
    payload: {
        image,
        imageName
    }
})

export const inputData = (state) => ({
    type: 'INPUT_DATA',
    payload: {
        ...state
    }
})

export const changeLoading = (loading) => ({
    type: 'CHANGE_LOADING',
    payload: {
        loading: loading
    }
})

export const resetStore = () => ({
    type: 'RESET_STORE',
})

export const postData = (data) => ({
    type: 'POST_DATA',
    payload: {
        data
    }
})

export const postUpload = (boolean) => ({
    type: 'POST_UPLOAD',
    payload: boolean
}) 

export const loginAcount = (data) => ({
    type: 'LOGIN_ACOUNT',
    payload: {
        ...data
    }
})

export const createAcount = (data) => ({
    type: 'CREATE_ACOUNT',
    payload: {
        ...data
    }
})

export const setLoginInfo = (data) => ({
    type: 'SET_LOGININFO',
    payload: {
        ...data
    }
})

export const upLoadThumbnail = (data) => ({
    type: 'UPLOAD_THUMBNAIL',
    payload: {
        ...data
    }
})

export const setThumbnail = (thumbnail) => ({
    type: 'SET_THUMBNAIL',
    payload: {
        thumbnail
    }
})

export const userLogin = (data) => ({
    type: 'USER_LOGIN',
    payload:{
        login:data
    }
})

export const updateDB = (data) => ({
    type: 'UPDATE_DB',
    payload:{
        ...data
    }
})

export const setUserDate = (data) => ({
    type: 'SET_USERDATE',
    payload: {
        ...data,
    }
})

export const changeComplete = (boolean) => ({
    type: 'CHANGE_COMPLETE',
    payload: boolean
})

export const getHistory = (id) => ({
    type: 'GET_HISTORY',
    payload: id
})

export const setHistory = (data) => ({
    type: 'SET_HISTORY',
    payload: data
})

export const deleteHistory = (_id) => ({
    type: 'DELETE_HISTORY',
    payload: _id
})