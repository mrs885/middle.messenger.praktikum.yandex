import temp from './error.hbs'
import "./error.scss"

export default (props) => {
    console.log('!!!')
    return temp({...props})
}