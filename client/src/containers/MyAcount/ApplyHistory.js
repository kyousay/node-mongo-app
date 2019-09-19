import { connect } from 'react-redux'
import ApplyHistory from '../../components/MyAcount/ApplyHistory'
import { getHistory } from '../../actions/'

const mapStateToProps = (state) => {
    return{
        ...state.AppReducer
    }
}

mapDispatchToProps = (dispatch) => {
    return{
        getHistory:(id) => {
            dispatch(getHistory(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplyHistory)