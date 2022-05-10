import { Button } from "./components/Button/button"
import { renderDom } from "./utils/renderDom"

document.addEventListener('DOMContentLoaded', () => {
    const button = new Button ({
      label: 'click me'  
    })

    renderDom('app', button);

    button.setProps({
        events: {
            click: () => {
                console.log('clicked!');
            }
        }
    })
});