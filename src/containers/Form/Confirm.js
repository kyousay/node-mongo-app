import { connect } from 'react-redux'
import { changeLoading,resetStore,postData } from '../../actions'
import Confirm from '../../components/Form/Confirm'

const mapStateToProps = (state) => {
    return{
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeLoading: (loading) => {
            dispatch(changeLoading(loading))
        },
        resetStore: () => {
            dispatch(resetStore())
        },
        postData: (e) => {
            dispatch(postData(e))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Confirm)