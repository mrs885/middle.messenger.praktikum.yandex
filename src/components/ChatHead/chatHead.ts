import "./chatHead.scss";
import Block from "../../utils/block";
import template from "./chatHead.hbs";
import { ChatBox } from "../ChatBox/chatBox";

interface ChatHeadProps{
  chatId: number,
  avatarImage?: string,
  chatName?: string,
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatHead extends Block{
    constructor(props: ChatHeadProps){
        super( {...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}