import {ComponentMeta, ComponentStory} from "@storybook/react";
import SinginForm from "../components/SinginForm";
import { text, boolean } from "@storybook/addon-knobs";


const Template: React.FC<{ email: string; firstName: string; last_name: string; password: string; Accept_terms: boolean }> = ({ email, password, Accept_terms }) => {
    return <SinginForm email={email} password={password} rememberMe={Accept_terms} />;
}

export default {
    title: "SignInform",
    component: SinginForm,
    parameters: {
        layout: "fullscreen",
    },
}

export const Default = Template.bind({});
Default.args = {
    email: text("Email", "test@mail.com"),
    firstName: text("First Name", "solent"),
    last_name: text("Last name", "University"),
    password: text("Password", "1234"),
    Accept_Terms: boolean("Accept terms", false)
};