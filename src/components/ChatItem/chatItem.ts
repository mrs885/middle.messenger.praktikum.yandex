import "./chatItem.scss";
import Block from "../../utils/block";
import template from "./chatItem.hbs";

interface ChatItemProps{
  message: string,
  year?: string,
  month?: string,
  date?: string,
  hour?: string,
  minute?: string,
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatItem extends Block{
    constructor(props: ChatItemProps){
        super( {...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}