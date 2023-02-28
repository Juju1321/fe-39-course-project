import React, { FC } from "react";
import classNames from "classnames";
import {TabsNames, TabsProps} from "./types";

import styles from "./Tabs.module.scss";


const Tabs: FC<TabsProps> = ({ tabsList, activeTab, onClick }) => {
    const onTabClick = (key: TabsNames) => () => onClick(key);

    return (
        <div className={styles.container}>
            {tabsList.map((tab) => {
                return (
                    <div
                        key = {tab.key}
                        className={classNames(styles.tab, {
                            [styles.activeTab]: activeTab === tab.key,
                            [styles.disabled]: tab.disabled,
                        })}
                        onClick={tab.disabled ? undefined : onTabClick(tab.key)}
                    >
                        { tab.title }
                    </div>
                );
            })}
        </div>
    );
};

export default Tabs