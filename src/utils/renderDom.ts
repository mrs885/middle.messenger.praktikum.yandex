import Block from "./block";

export function renderDom(rootSelector: string, component: Block) : HTMLElement{

    const root: HTMLElement = document.getElementById(rootSelector)

    if (!root){
        throw new Error ("нет Root!")
    }

    component.dispatchComponentDidMoun();

    root.innerHTML = '';    

    root.append(component.getContent());

    return root;
    
}


