import temp from './profile.hbs'
import logo from "../../../static/blank-img.png"
import "./profile.scss"

export default (props) => {

    return temp({...props, logo})
}