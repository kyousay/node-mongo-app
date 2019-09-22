import { connect } from 'react-redux'
import ApplyHistory from '../../components/MyAcount/ApplyHistory'
import { getHistory,deleteHistory} from '../../actions/'

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getHistory: id => {
            dispatch(getHistory(id))
        },
        deleteHistory: _id => {
            dispatch(deleteHistory(_id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplyHistory)