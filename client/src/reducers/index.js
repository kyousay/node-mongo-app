const initialState = {
    image: "",
    imageName:"",
    form: {
        last: "",
        first: "",
        kana_last: "",
        kana_first: "",
        mail: "",
        confirm: ""
    },
    user: {
        id: "",
        loginName:"",
        thumbnail: "",
        last: "",
        first: "",
        kana_last: "",
        kana_first: "",
        mail: "",
        login: false,
        applyHistory: ""
    },
    loading: false,
    postUpload: false,
    complete: false,
}

const AppReducer = ( state = initialState,action ) => {
    switch(action.type) {
        case 'SET_IMAGE' : 
            return{
                ...state,
                image: action.payload.image,
                imageName: action.payload.imageName,
            }
        case 'INPUT_DATA' :
            return{
                ...state,
                form: {
                    ...action.payload
                }
            }
        case 'CHANGE_LOADING' : 
            return{
                ...state,
                loading: action.payload.loading
            }
        case 'RESET_STORE' :
            return initialState
        case 'POST_UPLOAD' :
            return{
                ...state,
                postUpload: action.payload
            }
        case 'SET_LOGININFO' :
            const data = Object.assign(state.user,action.payload)
            return{
                ...state,
                user: data, 
            }
        case 'SET_THUMBNAIL' :
            const  newData = Object.assign(state.user,action.payload)
            return{
                ...state,
                user: newData,
            }
        case 'USER_LOGIN' : 
            const log = Object.assign(state.user,action.payload)
            return{
                ...state,
                user: log
            }
        case 'SET_USERDATE' :
            delete action.payload._id
            const Update = Object.assign(state.user,action.payload)
            return{
                ...state,
                user: Update
            }
        case 'CHANGE_COMPLETE' :
            return{
                ...state,
                complete: action.payload
            }
        default :
            return state
    }
}

export default AppReducer