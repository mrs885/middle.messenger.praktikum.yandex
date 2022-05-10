import { Button } from "../Button/button";
import Block from "../../utils/block";
import template from "./box.hbs"
import "./box.scss"

interface BoxProps{
  header: string,
  button1: Button,
  button2: Button,
}

export class Box extends Block{
    constructor(props: BoxProps){
        super( props);
    }

    render() {
      return this.compile(template, {...this.props});
    }
}