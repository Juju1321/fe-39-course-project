import React, {ChangeEvent, FC} from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

type InputProps = {
    title: string;
    placeholder: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    value: string;
    errorText?: string;
}

const Input: FC<InputProps> = ({title, placeholder, onChange, disabled, value, errorText}) => {

    const onChangeInputText = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <input
                className={classNames(styles.input, {
                    [styles.disableInput]:disabled,
                    [styles.errorInput]: errorText
                })}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChangeInputText}
            />
            {errorText && <div className={styles.errorText}>{ errorText }</div>}
        </div>
    )
};

export default Input