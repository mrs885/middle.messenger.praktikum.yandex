import Block from "../../utils/Block";
import template from "./image.hbs"

interface ImageProps{
  src: string;
  className?: string;
  events?: {
    click?: (e?: Event) => void
  }
}

export class Image extends Block{
    constructor(props: ImageProps){
        super( props);
    }

    render() {
      return this.compile(template, {...this.props});
    }
}