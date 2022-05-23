import "./chatBox.scss";
import Block from "../../utils/Block";
import state from "../../utils/state";
import { ChatItem } from "../ChatItem/chatItem";
import template from "./chatBox.hbs";

interface ChatBoxProps{
  chatId?: number,
  className?: string,
  events?:{
    click?: () => void;
  }
}

export class ChatBox extends Block{
    constructor(props: ChatBoxProps){
        super( props);
    }

    protected hasChatItems: boolean;

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        // здесь надо перегенерить элементы чата
        this.children = {
            chatItems: []
        };
        const chatItems = [];
        const templateBlocks = [];
        let chat = state.chats.find(chat => (chat.chatId === this.props.chatId));
        if(chat){
            // формируем сообщения
            let i = 0, j = 0;
            while (i < chat.from.length || j < chat.to.length){
                let curdate: Date;
                let curText: string;
                let curPosition: string;
                if (i == chat.from.length){
                    curdate = chat.to[j].time;
                    curText = chat.to[j].text;
                    curPosition = 'message-right';
                    j++;
                } else if (j == chat.to.length){
                    curdate = chat.from[i].time;
                    curText = chat.from[i].text;
                    curPosition = 'message-left';
                    i++;
                } else if (chat.from[i].time > chat.to[j].time) {
                    curdate = chat.to[j].time;
                    curText = chat.to[j].text;
                    curPosition = 'message-right';
                    j++;
                } else {
                    curdate = chat.from[i].time;
                    curText = chat.from[i].text;
                    curPosition = 'message-left';
                    i++;
                }
            
                chatItems.push(
                    new ChatItem({
                        message: curText,
                        year: curdate.getFullYear().toString(),
                        month: curdate.getMonth().toString(),
                        date: curdate.getDate().toString(),
                        hour: curdate.getHours().toString(),
                        minute: curdate.getMinutes().toString(),
                        className: curPosition,
                    })
                )
            }
            this.children.chatItems = chatItems;
            this.hasChatItems = true;

        } else {
            this.hasChatItems = false;
        }

        return true;
    }

    render() {
        return this.compile(template, {...this.props, hasChatItems: this.hasChatItems});
    }
}