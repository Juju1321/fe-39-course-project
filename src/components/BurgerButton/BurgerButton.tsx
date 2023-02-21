import React, {useState} from "react";
import Button, {ButtonType} from "../Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";

import styles from "./BurgerButton.module.scss";

const BurgerButton = () => {
    const [isOpened, setOpened] = useState(false)

    const onBurgerClick = () => setOpened(!isOpened)

    return (
        <Button
            title={ !isOpened ? <OpenedMenu /> : <CloseIcon /> }
            onClick={onBurgerClick}
            type={ButtonType.Primary}
            className={styles.burgerButton}
        />
    );
}

export default BurgerButton