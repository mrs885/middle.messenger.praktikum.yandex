import "./chatParent.scss";
import Block from "../../utils/Block";
import template from "./chatParent.hbs";
import { ChatBox } from "../ChatBox/chatBox";
import { ChatHead } from "../ChatHead/chatHead";
import { ChatFooter } from "../ChatFooter/chatFooter";

interface ChatParentProps{
  chatId: number,
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatParent extends Block{
    constructor(props: ChatParentProps){

        const chatHead = new ChatHead({
          chatId: props.chatId,
        });
        const chatBox = new ChatBox({
          chatId: props.chatId, 
        })
        const chatFooter = new ChatFooter({
        })
        
        super( {...props, chatBox, chatHead, chatFooter});
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        // вот тут надо поменять пропсы у Chat
        (this.children.chatHead as ChatHead).setProps({
            chatId: newProps.chatId,
        });
        (this.children.chatBox as ChatBox).setProps({
            chatId: newProps.chatId
        });
        return true;
    }

    render() {
        return this.compile(template, {...this.props});
    }
}