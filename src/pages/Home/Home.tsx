import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";

import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import CardsList from "../../components/CardsList";
import { CardType } from "../../components/Card";
import { TabsNames } from "../../components/Tabs/types";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const MOCK_ARRAY = [
    {
        id: 0,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 1,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 2,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 3,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 4,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 5,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 6,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 7,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 8,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 9,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 10,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
    {
        id: 11,
        image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        date: '12-10-2023',
        lesson_num: 12,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
        description: 'Описание поста',
        author: 10,
    },
];

const TABS_LIST = [
    {
        title: 'All',
        disabled: false,
        key: TabsNames.All,
    },
    {
        title: 'My favorites',
        disabled: false,
        key: TabsNames.Favorites,
    },
    {
        title: 'Popular',
        disabled: false,
        key: TabsNames.Popular,
    },
]

const Home = () => {
    const { theme } = useThemeContext();

    const [cardsList, setCardsList] = useState<CardType[]>([])
    useEffect(() => {
        setCardsList(MOCK_ARRAY)
    }, [MOCK_ARRAY])

    const [activeTab, setActiveTab] = useState(TabsNames.All);
    const onClick = (key: TabsNames) => setActiveTab(key);

    return (
        <div
            className={classNames(styles.container, {
                [styles.darkContainer]: theme === Theme.Dark,
            })}
        >
            <Title title={"Blog"} />
            <Tabs tabsList={TABS_LIST} activeTab={activeTab} onClick={onClick}/>
            <CardsList cardsList={MOCK_ARRAY}/>
            <ThemeSwitcher />
        </div>
    )
}

export default Home