import {ComponentMeta, ComponentStory} from "@storybook/react";
import LoginForm from "../components/LoginForm";
import { text, boolean } from "@storybook/addon-knobs";


const Template: React.FC<{ email: string; password: string; rememberMe: boolean }> = ({ email, password, rememberMe }) => {
    return <LoginForm email={email} password={password} rememberMe={rememberMe} />;
}

export default {
    title: "LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
}

export const Default = Template.bind({});
Default.args = {
    email: text("Email", "test@mail.com"),
    password: text("Password", "1234"),
    Accept_Terms: boolean("Remember me", false)
};