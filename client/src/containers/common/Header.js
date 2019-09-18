import { connect } from 'react-redux'
import Header from '../../components/common/Header'

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps,{})(Header)