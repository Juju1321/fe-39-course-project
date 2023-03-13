import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./PagesContainer.module.scss"
import {Theme, useThemeContext} from "../../context/Theme/Context";
import classNames from "classnames";
import Header from "./Header";

const PagesContainer = () => {
    const { theme } = useThemeContext();
    const isDark = theme === Theme.Dark;

    return (
        <div className={classNames(styles.container, {
            [styles.darkContainer]: isDark
        })}>
            <Header/>
            <div className={styles.mainInfo}>
                <Outlet/>
                <div className={classNames(styles.footer, {
                    [styles.darkFooter]: isDark,
                })}>
                    <div>©2023 Blogfolio</div>
                    <div>All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default PagesContainer