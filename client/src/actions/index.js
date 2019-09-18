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

export const postData = (props) => ({
    type: 'POST_DATA',
    payload: props
})

export const postUpload = (boolean) => ({
    type: 'POST_UPLOAD',
    payload: boolean
}) 