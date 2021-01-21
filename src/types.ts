export type Item = {
    // Location?
    _id: string,
    listId: string,
    title: string,
    description?: string,
    creationDate: string,
    dueDate: string,
    completedStatus: boolean
};

export type List = {
    title: string,
    creationDate: string,
    items: Item[],
    displayStatus: DisplayStatus
}


export enum DisplayStatus {
    All,
    Scheduled,
    Today,
    PersonalLists
}

export type Body = {
    displayStatus: DisplayStatus,
    personalListName?: string,
    lists: List[]
}

export type Filter = {
    displayStatus: DisplayStatus,
    count: number,
}