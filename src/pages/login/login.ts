import "./login.scss"
import Block from '../../utils/Block'
import template from './login.hbs'
import state from "../../utils/state"

export default (props: any) : Block => {
    
    class LoginPage extends Block{
        constructor(props) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }

    const loginProps = {...props, ...state.user}
    
    const loginPage = new LoginPage(loginProps);   
    
    return loginPage;
}
