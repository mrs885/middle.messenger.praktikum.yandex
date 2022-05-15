import "./messagebox.scss";
import Block from "../../utils/block";
import { Break } from "../Break/break";
import template from "./messagebox.hbs";

interface MessageBoxProps{
  header: string,
  "is-active": string,
  break?: Block,
  className?: string,
  "image-user"?: Block,
  events?:{
    click?: () => void;
  }
}

export class MessageBox extends Block{
    constructor(props: MessageBoxProps){
        super( props);
    }

    render() {
      return this.compile(template, {...this.props});
    }
}