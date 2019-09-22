import styled,{css} from 'styled-components'
import mediaQuery from 'styled-media-query'

//Mixin
export const calculate = (num,width) => {
    return num / width * 100
} 

export const mediaMobile = mediaQuery.lessThan("medium") 

//ここまで

export const hiddenText = css`
    white-space: nowrap;
    text-indent: 100%;
    overflow: hidden;
`

export const Section = styled.section`
    padding: 50px 0 0;
    ${mediaMobile`
        padding-top: ${calculate(40,320)}vw;
    `}
`

export const FormWrapper = styled.div`
    padding: ${props => props.padding}px 0;
    text-align:center;
    color: #9370db;
    ${mediaMobile`
        padding: ${calculate(40,320)}vw 0;
    `}
`



