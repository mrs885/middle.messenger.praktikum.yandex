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
    chats: [
        {
            chatId: 1,
            from: [
                {
                    time: new Date(2022, 5, 19, 9, 0),
                    text: "Привет!"
                },
                {
                    time: new Date(2022, 5, 19, 9, 10),
                    text: "Как дела?"
                },
                {
                    time: new Date(2022, 5, 19, 9, 20),
                    text: "Чем занимаешься?"
                },
            ],
            to: [
                {
                    time: new Date(2022, 5, 19, 9, 5),
                    text: "Привет!"
                },
                {
                    time: new Date(2022, 5, 19, 9, 15),
                    text: "Все норм"
                },
                {
                    time: new Date(2022, 5, 19, 9, 16),
                    text: "Порядок вроде..."
                },
                {
                    time: new Date(2022, 5, 19, 9, 25),
                    text: "Туплю как обычно"
                },
            ]
        },
        {
            chatId: 2,
            from: [
                {
                    time: new Date(2022, 5, 18, 9, 0),
                    text: "Приглашаем на семинар!"
                },
                {
                    time: new Date(2022, 5, 18, 9, 10),
                    text: "Пойдете?"
                },
            ],
            to: [
                {
                    time: new Date(2022, 5, 18, 9, 15),
                    text: "Ага, спасибо"
                },
                {
                    time: new Date(2022, 5, 18, 9, 16),
                    text: "Сегодня чет лень..."
                },
            ]
        },
    ]
}

export default state;