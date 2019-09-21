import { connect } from 'react-redux'
import index from '../../components/MyAcount/'

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps,{})(index)