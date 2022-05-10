import EventBus from "./EventBus";
import { nanoid } from 'nanoid';

export default class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    public id = nanoid;

    private _element : HTMLElement | null = null;
    private _meta : { tagName: string, props: any } = null;

    protected props: any;
    protected children: any;
    protected eventBus: () => EventBus;
  
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */

    constructor(tagName : string = "div", propsAndChildren: any = {}) {
      const eventBus = new EventBus();
      const { children, props } = this._getChildren(propsAndChildren);
      this.children = children;

      this._meta = {
        tagName,
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

    // protected compile(template, props) {
    //   const propsAndStubs = { ...props };

    //   Object.entries(this.children).forEach(([key, child]) => {
    //       propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    //   });

    //   return Templator.compile(template, propsAndStubs);        
    // }
  
    _registerEvents(eventBus) {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
  
    _createResources() {
      const { tagName } = this._meta;
      this._element = this._createDocumentElement(tagName);
    }
  
    init() {
      this._createResources();
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
      const block = this.render();

      this._removeEvents();
      // Этот небезопасный метод для упрощения логики
      // Используйте шаблонизатор из npm или напишите свой безопасный
      // Нужно не в строку компилировать (или делать это правильно),
      // либо сразу в DOM-элементы возвращать из compile DOM-ноду
      this._element!.innerHTML = block;
      
      this._addEvents();  
    }
  
      // Может переопределять пользователь, необязательно трогать
    render() : string {
        return '';
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