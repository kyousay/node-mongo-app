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
    loading: false
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
        default :
            return state
    }
}

export default AppReducer