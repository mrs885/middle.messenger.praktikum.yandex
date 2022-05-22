import "./main.scss"
import Block from '../../utils/Block'
import template from './main.hbs'
import state from "../../utils/state"

export default (props: any) : Block => {
    
    class MainPage extends Block{
        constructor(props) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }

    const mainProps = {...props, ...state.user}
    
    const mainPage = new MainPage(mainProps);   
    
    return mainPage;
}
