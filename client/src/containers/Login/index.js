import { connect } from 'react-redux'
import index from '../../components/Login'

const mapStateToProps = ({user}) => {
    return{
        user
    }
}

export default connect(mapStateToProps,{})(index)