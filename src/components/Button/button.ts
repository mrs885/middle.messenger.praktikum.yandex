import Block from "../../utils/block";

interface ButtonProps{
  label: string;
  events?: {
    click?: () => void
  }
}

export class Button extends Block{
    constructor(props: ButtonProps){
        super('button', props);
    }

    render(): string {
      return this.props.label;
    }
}