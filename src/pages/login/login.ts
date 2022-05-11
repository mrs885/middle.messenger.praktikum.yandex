import "./login.scss"
import Block from '../../utils/block'
import template from './login.hbs'

export default (props: any) : Block => {
    
    class LoginPage extends Block{
        constructor(props) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }
    
    const loginPage = new LoginPage(props);   
    
    return loginPage;
}
