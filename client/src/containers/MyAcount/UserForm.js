import { connect } from 'react-redux'
import { updateDB } from '../../actions/'
import UserForm from '../../components/MyAcount/UserForm'

const mapStateToProps = state => {
    return{
        state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateDB:(data) => {
            dispatch(updateDB(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserForm)