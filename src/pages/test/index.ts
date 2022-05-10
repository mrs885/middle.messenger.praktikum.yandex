import { Button } from "../../components/Button/button";
import Block from "../../utils/block";

interface testPageProps{
    name: string
}

class TestPage extends Block{
    constructor(props: testPageProps){
        super('div', props);
    }

    render(): string {
        return this.props.name;
    }
}

const testPageprops : testPageProps = {
    name: "Test Page!"
}

const testPage = new TestPage(testPageprops);

export default testPage;