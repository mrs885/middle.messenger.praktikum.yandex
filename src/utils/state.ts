type Chat = typeof chats[0];
type User = typeof state.user;

const chats = [
    {
        chatId: 1,
        chatName: 'Андрей',
        from: [
            {
                time: new Date(2022, 5, 19, 9, 0),
                text: "Привет!",
                read: true,
            },
            {
                time: new Date(2022, 5, 19, 9, 10),
                text: "Как дела?",
                read: true,
            },
            {
                time: new Date(2022, 5, 19, 9, 20),
                text: "Чем занимаешься?",
                read: true,
            },
        ],
        to: [
            {
                time: new Date(2022, 5, 19, 9, 5),
                text: "Привет!",
            },
            {
                time: new Date(2022, 5, 19, 9, 15),
                text: "Все норм",
            },
            {
                time: new Date(2022, 5, 19, 9, 16),
                text: "Порядок вроде...",
            },
            {
                time: new Date(2022, 5, 19, 9, 25),
                text: "Вчера, на работе, я пытался выровнять блочный элемент по правому краю. Такая задача встречается не часто, но даже когда она встречается, я использую inline-block или float, но можно обойтись без них. Способ, о котором я расскажу, вам вероятно знаком. Одним из первых у верстальщиков встает вопрос о выравнивании элементов. Часто это центрирование блочных элементов через margin. Но я никогда не видел, чтобы кто-то использовал margin для выравнивания по правому краю.",
            },
        ]
    },
    {
        chatId: 2,
        chatName: 'Работа',
        from: [
            {
                time: new Date(2022, 5, 18, 9, 0),
                text: "Приглашаем на семинар!",
                read: true,
            },
            {
                time: new Date(2022, 5, 18, 9, 10),
                text: "Пойдете?",
                read: true,
            },
            {
                time: new Date(2022, 5, 20, 9, 11),
                text: "К большому сожалению, многосторонняя проработка вопроса продемонстрировала неготовность к принятию сегодня соглашения в рамках достигнутых ранее договорённостей.",
                read: false,
            },
        ],
        to: [
            {
                time: new Date(2022, 5, 18, 9, 15),
                text: "Ага, спасибо",
            },
            {
                time: new Date(2022, 5, 18, 9, 16),
                text: "Сегодня чет лень...",
            },
        ]
    }
];

const dummyChat: Chat = {
    chatId: 0,
    chatName: 'Нет названия',
    from: [],
    to: [],
};

chats.push(dummyChat);

const state = {
    user: {
        login: "admin",
        password: "12345",
        password2: "",
        email: "ivan@yandex.ru",
        firstName: "Ivan",
        lastName: "Ivanov",
        chatName: "Bad-Boy",
        tel: "",
    },
    chats,
    findChatById(id: number): ( Chat | undefined) {
        const result: Chat = state.chats.find(chat => chat.chatId === id);
        return (result ? result : dummyChat);
    },
    numUnreadMessagesById(id: number): number {
        const chat: Chat = state.chats.find(chat => chat.chatId === id);
        if (!chat) return 0;

        let foundUnread = 0;

        chat.from.forEach(mes => {
            if (mes.read === false) foundUnread++;
        });
        return foundUnread;
    }
}


export default state;