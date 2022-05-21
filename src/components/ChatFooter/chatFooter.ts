import "./chatFooter.scss";
import Block from "../../utils/block";
import template from "./chatFooter.hbs";
import {Image} from "../Image/image";
import attachImg from "../../../static/attach.png"
import sendImg from "../../../static/back.png"
import { Input } from "../Input/input";

interface ChatFooterProps{
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatFooter extends Block{
    constructor(props: ChatFooterProps){

        const chatAttach = new Image({
          src: attachImg,
          className: "chat-footer__attach",
        });
        
        const chatSend = new Image({
          src: sendImg,
          className: "chat-footer__send butt-round",
        });

        const chatNewMessage = new Input({
          inputPlaceholder: "Сообщение",
          className: "message-input",
        });

        super( {...props, chatAttach, chatNewMessage, chatSend});
    }
    
    render() {
        return this.compile(template, {...this.props});
    }
}