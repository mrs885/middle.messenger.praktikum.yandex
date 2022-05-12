import Block from "../../utils/block";
import template from "./button.hbs"

interface ButtonProps{
  label: string;
  events?: {
    click?: (e?: Event) => void
  }
}

export class Button extends Block{
    constructor(props: ButtonProps){
        super( props);
    }

    render() {
      return this.compile(template, {...this.props});
    }
}