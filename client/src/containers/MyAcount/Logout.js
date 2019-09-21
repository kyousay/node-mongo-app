import { connect } from 'react-redux'
import Logout from '../../components/MyAcount/Logout'
import { userReset } from '../../actions/'

const mapStateToProps = (state) => {
    return{
        state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        userReset: () => {
            dispatch(userReset())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)