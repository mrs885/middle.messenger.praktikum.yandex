import Block from "../../utils/Block";
import template from "./break.hbs"

export class Break extends Block{
    constructor(props: any){
        super( props);
    }

    render() {
      return this.compile(template, {...this.props});
    }
}