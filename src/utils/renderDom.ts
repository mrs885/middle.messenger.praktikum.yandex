import Block from "./block";

export function renderDom(rootSelector: string, component: Block){

    const root: HTMLElement = document.getElementById('app')

    if (!root){
        throw new Error ("нет Root!")
    }

    root.innerHTML = '';

    root.append(component.getContent());
}
