import "./signin.scss"
import Block from '../../utils/Block'
import template from './signin.hbs'
import state from "../../utils/state"

export default (props: any) : Block => {
    
    class SigninPage extends Block{
        constructor(props) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }

    const signinProps = {...props, ...state.user}

    const signinPage = new SigninPage(signinProps);   
    
    return signinPage;
}
