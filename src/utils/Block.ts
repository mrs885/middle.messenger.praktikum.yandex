import EventBus from "./EventBus";
import { nanoid } from 'nanoid';
import { isJSDocThisTag } from "typescript";

export default class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    public id = nanoid;

    private _element : HTMLElement | null = null;
    private _meta : { props: any } = null;

    protected props: any;
    protected children: any;
    protected eventBus: () => EventBus;
  
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */

    constructor(propsAndChildren: any = {}) {
      const eventBus = new EventBus();
      const { children, props } = this._getChildren(propsAndChildren);
      this.children = children;

      this._meta = {
        props
      };
  
      this.props = this._makePropsProxy(props);
      this.eventBus = () => eventBus;
  
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildren(propsAndChildren: any) {
      const children = {};
      const props = {};

      Object.entries(propsAndChildren).forEach(([key, value]) => {
        if (value instanceof Block) {
          children[key] = value;
        } else {
          props[key] = value;
        }
      });

      return { children, props };
    }

    protected compile(template: (context: any) => string, context: any) : DocumentFragment {
      const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
      const htmlString = template(context);
      fragment.innerHTML = htmlString;
      return fragment.content;
    }
  
    _registerEvents(eventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
  
    init() {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
    _componentDidMount() {
      this.componentDidMount();
    }
  
      // Может переопределять пользователь, необязательно трогать
    componentDidMount() {
    }
  
    dispatchComponentDidMoun() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM)
    }
  
    _componentDidUpdate(oldProps: any, newProps: any) {
      if (this.componentDidUpdate(oldProps, newProps)){
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
      };
    }
  
      // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps: any, newProps: any) {
      return true;
    }
  
    setProps = (nextProps : any) => {
      if (!nextProps) {
        return;
      }
      Object.assign(this.props, nextProps);
    };
  
    get element() {
      return this._element;
    }
  
    _render() {
      const fragment = this.render();

      const newElement = fragment.firstElementChild as HTMLElement;

      if(this._element){
        this._removeEvents();
        this._element.replaceWith(newElement)
      }

      this._element = newElement; 

      this._addEvents();  
    }
  
      // Может переопределять пользователь, необязательно трогать
    protected render() : DocumentFragment {
        return new DocumentFragment();
    }
  
    getContent() : HTMLElement | null {
      return this.element;
    }
  
    _makePropsProxy(props: any) {
      // Можно и так передать this
      // Такой способ больше не применяется с приходом ES6+
      const self = this;
  
      return new Proxy(props as unknown as object, {
        get(target: Record<string, unknown>, prop: string){
          const value = target[prop]
          return typeof value === 'function' ? value.bind(target) : value
        },
        set(target: Record<string, unknown>, prop: string, value: unknown){
          target[prop] = value
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target)
          return true;
        },
        deleteProperty(){
          throw new Error('Нет доступа');
        },
      });
    }
  
    _createDocumentElement(tagName) {
      // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
      return document.createElement(tagName);
    }

    protected _removeEvents(){

        const events: Record<string, () => void> = (this.props as any).events;

        if(!events){
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        })    
    }
    
    protected _addEvents(){

        const events: Record<string, () => void> = (this.props as any).events;

        if(!events){
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        })    
    }
  
    show() {
      this.getContent().style.display = "block";
    }
  
    hide() {
      this.getContent().style.display = "none";
    }
  }