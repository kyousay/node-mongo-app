import {setImage} from '../../actions/'
import ImageForm from '../../components/Form/ImageForm'
import { connect } from 'react-redux' 

const mapStateToProps = (state) => {
    return {
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setImage:(image,imageName) => {
            dispatch(setImage(image,imageName));
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ImageForm)