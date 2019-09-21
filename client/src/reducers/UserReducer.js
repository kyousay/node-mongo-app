const initialState= {
    id: "",
    loginName:"",
    thumbnail: "",
    last: "",
    first: "",
    kana_last: "",
    kana_first: "",
    mail: "",
    login: false,
    applyHistory: []
}

const UserReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_LOGININFO' :
            const data = Object.assign(state,action.payload)
            return{
                ...data, 
            }
        case 'SET_THUMBNAIL' :
            const  newData = Object.assign(state,action.payload)
            return{
                ...newData,
            }
        case 'USER_LOGIN' : 
            const log = Object.assign(state,action.payload)
            return{
                ...log
            }
        case 'SET_USERDATE' :
            delete action.payload._id
            const Update = Object.assign(state,action.payload)
            return{
                ...Update
            }
        case 'SET_HISTORY' :
            const object = Object.assign(state,{applyHistory: action.payload})
            return{
                ...object
            }
        default :
            return state
    }
}

export default UserReducer