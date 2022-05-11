import "./error.scss"
import Block from '../../utils/block'
import template from './error.hbs'
import { Link } from '../../components/Link/link';

export default (props: any) : Block => {
    
    class ErrorPage extends Block{
        constructor(props: any) {
            super(props);
        }
    
        render() {
            return this.compile(template, {...this.props});
        }
    }
    
    const errorPage = new ErrorPage(props);   
    
    return errorPage;
}
