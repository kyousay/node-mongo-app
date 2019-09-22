import loginInputPanel from '../../components/Login/LoginInputPanel'
import { connect } from 'react-redux'
import { createAcount,loginAcount } from '../../actions/'

const mapStateToProps = state => {
    return{
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createAcount: data => {
            dispatch(createAcount(data))
        },
        loginAcount: data => {
            dispatch(loginAcount(data))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(loginInputPanel)