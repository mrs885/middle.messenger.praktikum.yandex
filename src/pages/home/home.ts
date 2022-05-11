import Block from '../../utils/block'
import template from './home.hbs'
import { Link } from '../../components/Link/link';
import "./home.scss";

export default (props : any) : Block => {
    
    class HomePage extends Block{
        constructor() {
            super();
        }
    
        protected initChildren(): void {
            this.children.link = [ 
            new Link ({
                link: "ya.ru",
                text: "YA!!",
                className: "home__link",
                }),
            new Link ({
                link: "mail.ru",
                text: "MAIL",
                className: "home__link",
                events: {
                    focus: (event: Event) => {
                        console.log('link focused!');
                    }
                },
            }),
            ]
        }

        protected initProps(): void {
             this.props.className = 'home__body'
             this.props.enevts = {
                 focus: () => console.log('Homege triggered!')
             }
        }
    
        render() {
            return this.compile(template, { });
        }
    }
    
    const homePage = new HomePage();     

    // let page = '';

    // props.forEach((item) => {
    //     page += temp({
    //         link: item[1],
    //         text: item[0]
    //     })
    // });

    return homePage
}