import Block from "./Block";

export function renderDom(rootSelector: string, component: Block) : HTMLElement{

    const root: HTMLElement | null = document.getElementById(rootSelector)

    if (!root){
        throw new Error ("нет Root!")
    }

    component.dispatchComponentDidMoun();

    root.innerHTML = '';    

    root.append(component.getContent() as Node);

    return root;
    
}


