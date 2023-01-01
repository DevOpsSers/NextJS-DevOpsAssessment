import Head from "next/head"
import LoginForm from "../components/LoginForm";
import SinginForm from "../components/SinginForm";

export default function Login() {

    return (
        <div>
            <Head>
            <title>Log in </title>
            <meta name="description" content="Generated by create next app" />
            </Head>
            <div className='flex'>
            
                <LoginForm/>
                <SinginForm/>

            </div>
        </div>
    )
}