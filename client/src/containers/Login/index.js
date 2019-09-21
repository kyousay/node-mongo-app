import { connect } from 'react-redux'
import index from '../../components/Login'
import { changeLoading } from '../../actions/'

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeLoading: (boolean) => {
            dispatch(changeLoading(boolean))
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(index)