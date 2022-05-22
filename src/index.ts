import {Home, Login, Signin, ErrorPage, Profile, Main} from "./pages/index"
import Block from "./utils/block";
import { Link } from "./components/Link/link";
import { Input } from "./components/Input/input";
import { Label } from "./components/Label/label";
import { Button } from "./components/Button/button";
import { Image } from "./components/Image/image";
import { renderDom } from "./utils/renderDom";
import state from "./utils/state";
import {formData} from "./utils/state";

import logoImg from "../static/blank-img.png"
import backImg from "../static/back.png"
import findImg from "../static/find.png"
import greyImg from "../static/grey.png"
import { Break } from "./components/Break/break";
import { MessageBox } from "./components/MessageBox/messageBox";
import { DivLink } from "./components/Link/divlink";
import { ChatParent } from "./components/ChatParent/chatParent";

const pageCreator = {
    indexPages: [
        ['404', '404'],
        ['500', '500'],
        ['Login', 'login'],
        ['Signin', 'signin'],
        ['Profile', 'profile'],
        ['Main', 'main'],
    ],
    error404: {
        title: "404",
        message: "Не туда попали",
        link: new Link({
            link: "home",
            text: "Назад к чатам",
        }),
    },
    error500: {
        title: "500",
        message: "Мы уже фиксим",
        link: new Link({
            link: "home",
            text: "Назад к чатам",
        }),
    },
    login: {
        "input-login": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Логин",
            value: state.user.login,
            events: {
                input: (e) => {
                    state.user.login = (e.target as HTMLInputElement).value;
                    const checkResult = checkLogin(state.user.login);
                    if (checkResult != 'ok') {
                        pageCreator.login["login-helper"].setProps({
                            value: checkResult,
                        });
                    } else {
                        pageCreator.login["login-helper"].setProps({
                            value: `&nbsp;`,
                        });
                    }
                },
            }
        }),
        "label-login": new Label({
            className: "text-field__label",
            value: "Логин",
        }),
        "login-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-password": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password,
            events: {
                input: (e) => {
                    state.user.password = (e.target as HTMLInputElement).value;
                    const checkResult = checkPassword(state.user.password);
                    if (checkResult != 'ok') {
                        pageCreator.login["password-helper"].setProps({
                            value: checkResult,
                        });
                    } else {
                        pageCreator.login["password-helper"].setProps({
                            value: `&nbsp;`,
                        });
                    }
                },
            }
        }),
        "label-password": new Label({
            className: "text-field__label",
            value: "Пароль",
        }),
        "password-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "login-button": new Button ({
            label: "Авторизоваться",
            events: {
                click: (e) => {
                    e.stopPropagation();
                    console.log(formData.loginData);
                    console.log(`проверка логина '${formData.loginData.login}' - `, 
                        checkLogin(formData.loginData.login) != 'ok' ? 'not ok' : 'ok');
                    console.log('проверка пароля: ', 
                        checkPassword(formData.loginData.password) != 'ok' ? 'not ok' : 'ok');
                }
            }
        }),
        "link-no-account": new Link({
            link: "home",
            text: "Нет аккаунта?",
        }),
    },
    signin: {
        "input-email": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Почта",
            value: state.user.email,
            events: {
                input: (e) => {
                    state.user.email = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-email": new Label({
            className: "text-field__label",
            value: "Почта",
        }),
        "email-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-login": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Логин",
            value: state.user.login,
            events: {
                input: (e) => {
                    state.user.login = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-login": new Label({
            className: "text-field__label",
            value: "Логин",
        }),
        "login-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-name": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Имя",
            value: state.user.firstName,
            events: {
                input: (e) => {
                    state.user.firstName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-name": new Label({
            className: "text-field__label",
            value: "Имя",
        }),
        "name-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-lastname": new Input({
            className: "text-field__input",
            inputType: "text",
            inputPlaceholder: "Фамилия",
            value: state.user.lastName,
            events: {
                input: (e) => {
                    state.user.lastName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-lastname": new Label({
            className: "text-field__label",
            value: "Фамилия",
        }),
        "lastname-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-tel": new Input({
            className: "text-field__input",
            inputType: "tel",
            inputPlaceholder: "Телефон",
            value: state.user.tel,
            events: {
                input: (e) => {
                    state.user.tel = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-tel": new Label({
            className: "text-field__label",
            value: "Телефон",
        }),
        "tel-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-pass": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password,
            events: {
                input: (e) => {
                    state.user.password = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-pass": new Label({
            className: "text-field__label",
            value: "Пароль",
        }),
        "pass-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "input-pass2": new Input({
            className: "text-field__input",
            inputType: "password",
            inputPlaceholder: "Пароль",
            value: state.user.password2,
            events: {
                input: (e) => {
                    state.user.password2 = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-pass2": new Label({
            className: "text-field__label",
            value: "Пароль еще раз  ",
        }),
        "pass2-helper": new Label({
            className: "text-field__helper",
            value: `&nbsp;`,
        }),
        "signin-button": new Button ({
            label: "Зарегистрироваться",
            events: {
                click: (e) => {
                    e.stopPropagation();
                    console.log('Register clicked');
                }
            }
        }),
        "link-no-account": new Link({
            link: "home",
            text: "Войти",
        }),
    },
    profile: {
        "image-back": new Image({
            "src": backImg,
            className: "butt-round",
        }),
        "image-logo": new Image({
            "src": logoImg,
            className: "header-logo__img",
        }),
        "label-firstname": new Label({
            className: "header-logo__txt",
            value: state.user.firstName,
        }),
        "input-email": new Input({
            className: "text-field-wide__input",
            inputType: "email",
            inputPlaceholder: "email",
            value: state.user.email,
            events: {
                input: (e) => {
                    state.user.email = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-email": new Label({
            className: "text-field-wide__label",
            value: "Почта",
        }),
        "input-login": new Input({
            className: "text-field-wide__input",
            inputType: "text",
            inputPlaceholder: "login",
            value: state.user.login,
            events: {
                input: (e) => {
                    state.user.login = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-login": new Label({
            className: "text-field-wide__label",
            value: "Логин",
        }),
        "input-firstname": new Input({
            className: "text-field-wide__input",
            inputType: "text",
            inputPlaceholder: "Имя",
            value: state.user.firstName,
            events: {
                input: (e) => {
                    state.user.firstName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label2-firstname": new Label({
            className: "text-field-wide__label",
            value: "Имя",
        }),
        "input-lastname": new Input({
            className: "text-field-wide__input",
            inputType: "text",
            inputPlaceholder: "Фамилия",
            value: state.user.lastName,
            events: {
                input: (e) => {
                    state.user.lastName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-lastname": new Label({
            className: "text-field-wide__label",
            value: "Фамилия",
        }),
        "input-chatname": new Input({
            className: "text-field-wide__input",
            inputType: "text",
            inputPlaceholder: "Имя в чате",
            value: state.user.chatName,
            events: {
                input: (e) => {
                    state.user.chatName = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-chatname": new Label({
            className: "text-field-wide__label",
            value: "Имя в чате",
        }),
        "input-tel": new Input({
            className: "text-field-wide__input",
            inputType: "tel",
            pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
            inputPlaceholder: "Телефон",
            value: state.user.tel,
            events: {
                input: (e) => {
                    state.user.tel = (e.target as HTMLInputElement).value;
                }
            }
        }),
        "label-tel": new Label({
            className: "text-field-wide__label",
            value: "Телефон",
        }),
        "link-changedata": new Link({
            link: "home",
            text: "Изменить данные",
            className: "text-field-wide__link_normal",
        }),
        "break1": new Break({}),
        "link-changepassword": new Link({
            link: "home",
            text: "Изменить пароль",
            className: "text-field-wide__link_normal",
        }),
        "break2": new Break({}),
        "link-exit": new Link({
            link: "home",
            text: "Выйти",
            className: "text-field-wide__link_red",
        }),
    },
    main: {
        "link-profile": new DivLink({
            link: "home",
            text: "Профиль >",
            className: "link-profile",
        }),
        "input-find": new Input({
            className: "text-field-input__find",
            inputType: "text",
            inputPlaceholder: "Поиск",
            value: "",
            events: {
                input: (e) => {
                    console.log((e.target as HTMLInputElement).value);
                }
            }
        }),
        "image-find": new Image({
            "src": findImg,
            className: "text-field-image__find",
        }),
        messageBoxes: [],
        chatParent: new ChatParent({
            className: "main__right-area",
        }),
    },
}

let mBoxes: Array<Block> = [];

for (let i = 1; i < 7; i++){
    
    const newMessageBox = new MessageBox({
        chatId: i,
        "is-active": "active-false",
        break: new Break({}),
        className: "messagebox",
        userName: state.findChatById(i).chatName,
        numUnreadMessages: state.numUnreadMessagesById(i),
        userImage: new Image({  
            src: greyImg,
            className: "image-user",    
        }),
        events: {
            click: () => {
                pageCreator.main.chatParent.setProps({
                    "chatId": i
                })
                mBoxes.forEach( item => item.setProps({
                    "is-active": "active-false"
                }));
                newMessageBox.setProps({
                    "is-active": "active-true"
               });
            }
        },
    });
    
    mBoxes.push(newMessageBox);
}

pageCreator.main.messageBoxes = mBoxes;

const router : Record<string, Block> = {
    home: Home(pageCreator.indexPages),
    404: ErrorPage(pageCreator.error404),
    500: ErrorPage(pageCreator.error500),
    login: Login(pageCreator.login),
    signin: Signin(pageCreator.signin),
    profile: Profile(pageCreator.profile),
    main: Main(pageCreator.main),
}

const newWindow = window as any;
newWindow.user = state.user;

const root = renderDom('app', router['home']);

root.addEventListener('click', handler);

function handler(event){
    event.preventDefault();
    const route = event.target.attributes[0]['nodeValue'];
    Object.keys(router).forEach(r => {
        if (r == route){
            renderDom('app', router[route]);
            return;
        }
    })
    
}

function checkLogin(login: string): string{
    if (login.length < 3)
        return "введите не менее 3х символов";
    else if (login.length > 20)
        return "логин не может превышать 20 символов";
    else if (/^[0-9]+$/i.test(login))
        return "логин не может состоять только из цифр"
    else if(!/^[0-9A-Z-_]+$/i.test(login))
        return "введите логин на латинице без спецсимволов";
    else
        return 'ok';
}

function checkPassword(password: string): string{
    if (password.length < 8)
        return "введите не менее 8 символов";
    else if (password.length > 40)
        return "пароль не может превышать 40 символов";
    else if (!/\d{1}/.test(password))
        return "должна быть хотя бы одна цифра";
    else if(!/[A-ZА-Я]/.test(password))
        return "должна быть хотябы одна заглавная буква";
    else
        return 'ok';
}