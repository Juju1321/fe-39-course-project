import React, {useState} from "react";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button, {ButtonType} from "../../components/Button";
import styles from "./SignIn.module.scss"
import classNames from "classnames";
import {Theme, useThemeContext} from "../../context/Theme/Context";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (value: string) => setEmail(value);
    const onChangePassword = (value: string) => setPassword(value);

    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;

    return (
        <div className={classNames(styles.container, {
            [styles.darkContainer]: isDark,
        })}>
            <div className={styles.titleContainer}>
            <div className={classNames(styles.breadCrumbs, {
                [styles.darkBreadCrumbs]: isDark,
            })}>
                Back to home</div>
            <Title title={"Sign In"}/>
            </div>
            <div className={styles.infoContainer}>
            <div className={classNames(styles.mainBlockContainer , {
                [styles.darkMainBlockContainer]: isDark,
            })}>
            <div className={styles.inputContainer}>
                <Input title={"Email"} placeholder={"Your email"} onChange={onChangeEmail} value={email} type={"text"}/>
                <Input title={"Password"} placeholder={"Your password"} onChange={onChangePassword} value={password} type={"password"}/>
            </div>
                <div className={classNames(styles.forgotPass, {
                    [styles.darkForgotPass]: isDark,
                })}>
                    Forgot password?
                </div>
                <div>
                <Button title={"Sign In"} onClick={()=> {}} type={ButtonType.Primary}/>
                <div className={classNames(styles.signUp, {
                    [styles.darkSignUp]: isDark,
                })}>
                    Don’t have an account?
                    <a>Sign Up</a>
                </div>
                </div>
            </div>
            </div>
            <ThemeSwitcher/>
        </div>
    )
}

export default SignIn