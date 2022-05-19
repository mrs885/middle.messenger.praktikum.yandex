import "./chatHead.scss";
import Block from "../../utils/block";
import template from "./chatHead.hbs";
import { ChatBox } from "../ChatBox/chatBox";

interface ChatHeadProps{
  chatId?: number,
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatHead extends Block{
    constructor(props: ChatHeadProps){

        const chatBox = new ChatBox({
          chatId: props.chatId  
        })
        
        super( {...props, chatBox});
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        // вот тут надо поменять пропсы у ChatBox
        (this.children.chatBox as ChatBox).setProps({
            chatId: newProps.chatId
        });
        return true;
    }

    render() {
        return this.compile(template, {...this.props});
    }
}