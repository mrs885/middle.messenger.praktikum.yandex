import "./chatBox.scss";
import Block from "../../utils/block";
import state from "../../utils/state";
//import template from "./chatBox.hbs";



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

    protected template(context?: Record<string, any>): string {
        return `
        <div class="chat-box">
            Наш чатик!
            ${context.chatId}
        </div>
        `; 
    };

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        // здесь надо перегенерить шаблон
        const templateBlocks = [];
        let chat = state.chats.find(chat => (chat.chatId === this.props.chatId));
        if(chat){
            // формируем сообщения
            let i = 0, j = 0;
            let startDate = new Date(2000, 1, 1);
            while (i < chat.from.length || j < chat.to.length){
                let curdate: Date;
                let curText: string;
                let curPosition: string;
                if (i == chat.from.length || (chat.from[i].time > chat.to[j].time)){
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
                templateBlocks.push(`<div class=${curPosition}>${curdate.getFullYear()}.${curdate.getMonth()}.${curdate.getDate()} ${curdate.getHours()}:${curdate.getMinutes()} - ${curText}</div>`)
            }
            this.template = () => templateBlocks.join();
        } else {
            this.template = () => (`
                <div class="main__right-area-empty">
                    В выбранном чате еще нет сообщений
                </div>
                `);
        }

        return true;
    }

    render() {
        return this.compile(this.template, {...this.props});
    }
}