export type TabsType = {
    title: string,
    disabled: boolean,
    key: number,
}

export enum TabsNames {
    All,
    Favorites,
    Popular,
}

export type TabsProps = {
    tabsList: TabsType[],
    activeTab: number,
    onTabClick: (key: TabsNames) => () => void
}