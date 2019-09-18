import TextForm from '../../components/Form/TextForm'
import { connect } from 'react-redux'
import { inputData } from '../../actions'

const mapStateToProps = ({form,image}) => {
    return{
        state : {
            ...form    
        },
        image 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        inputData:(id,data) => {
            dispatch(inputData(id,data))
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(TextForm)