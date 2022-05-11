import Block from '../../utils/block'
import template from './home.hbs'
import { Link } from '../../components/Link/link';
import "./home.scss";

export default (indexPages : Array<Array<string>>) : Block => {
    
    let props : Record<string, Block[] | Block> = {};

    props.link = indexPages.map(item => {
        return new Link({
            link: item[0],
            text: item[1],
            className: "home__link"
        });
    });

    class HomePage extends Block{
        constructor(props: Record<string, Block[] | Block>) {
            super(props);
        }
    
        protected initChildren(): void {
            this.children.link = props.link;
        }
    
        render() {
            return this.compile(template, {...this});
        }
    }
    
    const homePage = new HomePage(props);     

    return homePage
}