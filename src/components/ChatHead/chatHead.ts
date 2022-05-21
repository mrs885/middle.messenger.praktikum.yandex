import "./chatHead.scss";
import Block from "../../utils/block";
import template from "./chatHead.hbs";
import state from "../../utils/state";
import {Image} from "../Image/image";

interface ChatHeadProps{
  chatId: number,
  chatAvatar?: Block,
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

    componentDidUpdate(oldProps: any, newProps: any): boolean {
      // пришел новый chatId - меняем заголовок
      if(newProps.chatId != oldProps.chatId){
        const newChat = state.findChatById(newProps.chatId);
        this.setProps({
          chatName : newChat.chatName,
        });
        this.children.chatAvatar = new Image({
          src: newChat.chatAvatar,
          className: "chat-header__avatar-image",
        });
        return true;
      }
      return true;
    }

    render() {
        return this.compile(template, {...this.props});
    }
}