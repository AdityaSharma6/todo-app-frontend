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
    items: Item[]
}

export type ListCollection = {
    lists: List[];
}

export enum DisplayStatus {
    All,
    Scheduled,
    Today,
    PersonalLists
}

export type Body = {
    displayStatus: DisplayStatus;
    personalListName?: string;
    lists: List[];
}