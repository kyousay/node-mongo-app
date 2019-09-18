import axios from 'axios'

export const postDataFactory = (connectConfig = {}) => {
    const config = {
        ...connectConfig
    }
    const instance = axios.create(config)

    const postData = async (data) => {
        try{
            const response = await instance.post('/upload',{
                data:data
            })

            if(response.status !== 200) {
                throw new Error ('Server Error')
            }
            const result = response

            return result
        }catch(err) {
            throw err
        }
    }
    return postData
} 