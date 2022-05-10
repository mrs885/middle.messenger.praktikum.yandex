import { Button } from "./components/Button/button";
import { renderDom } from "./utils/renderDom";
import TestPage from './pages/test/test';

document.addEventListener('DOMContentLoaded', () => {

    // const button = new Button ({
    //   label: 'click me'  
    // })

    const testPage = new TestPage();

    renderDom('app', testPage);

    // button.setProps({
    //     events: {
    //         click: () => {
    //             console.log('clicked!');
    //         }
    //     }
    // })
});