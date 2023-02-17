import React, {useState} from "react";
import Button, {ButtonType} from "../Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";

import styles from "./BurgerButton.module.scss";

enum BurgerButtonState {
    OPENED,
    CLOSED,
};

const BurgerButton = () => {
    const [activeBurgerButton, setActiveBurger] = useState(BurgerButtonState.OPENED)

    const onBurgerClick = () =>
        BurgerButtonState.OPENED === activeBurgerButton
        ? setActiveBurger(BurgerButtonState.CLOSED)
        : setActiveBurger(BurgerButtonState.OPENED)

    return (
        <Button
            title={ activeBurgerButton === BurgerButtonState.OPENED ? <OpenedMenu /> : <CloseIcon /> }
            onClick={onBurgerClick}
            type={ButtonType.Primary}
            className={styles.burgerButton}
        />
    );
}

export default BurgerButton