import { Button } from "../../components/Button/button";
import Block from "../../utils/block";
import template from "./test.hbs";
import { Box } from "../../components/Box/box";

class TestPage extends Block{
    constructor() {
        super();
    }

    // protected initChildren() {
    //     this.children.button1 = new Button({
    //         label: "text",
    //         events: {
    //             click: () => console.log('clicked')
    //         }
    //     })
    //     this.children.button2 = new Button({
    //         label: "text 2",
    //         events: {
    //             click: () => console.log('clicked')
    //         }
    //     })
    // }

    protected initChildren(): void {
        this.children.box = new Box ({
            header: "Заголовок",
            button1: new Button({
                label: "кнопка 1",
                events: {
                    click: () => console.log('clicked 1')
                }
            }),
            button2: new Button({
                label: "кнопка 2",
                events: {
                    click: () => console.log('clicked 2')
                }
            })
        })
    }

    render() {
        return this.compile(template, { });
    }
}

export default TestPage;