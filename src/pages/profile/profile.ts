import "./profile.scss"
import Block from '../../utils/block'
import template from './profile.hbs'
import state from "../../utils/state"

export default (props: any) : Block => {
    
    class ProfilePage extends Block{
        constructor(props) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }

    const profileProps = {...props, ...state.user}
    
    const profilePage = new ProfilePage(profileProps);   
    
    return profilePage;
}
