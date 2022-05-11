import Block from "./block";

export function renderDom(rootSelector: string, component: Block, router){

    const root: HTMLElement = document.getElementById(rootSelector)

    if (!root){
        throw new Error ("нет Root!")
    }

    component.dispatchComponentDidMoun();

    root.innerHTML = '';

    root.append(component.getContent());

    root.addEventListener('click', handler);

    function handler(event){
        event.preventDefault();
        const route = event.target.attributes[0]['nodeValue'];
        renderDom('app', router[route], router);
    }
}


