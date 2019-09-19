import { connect } from 'react-redux'
import { upLoadThumbnail} from '../../actions'
import ImageForm from '../../components/MyAcount/ImageForm'

const mapStateToProps = (state) => {
    return(
        state
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        upLoadThumbnail: (img) => {
            dispatch(upLoadThumbnail(img))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageForm)