export type Item = {
    // Location?
    _id: string,
    listId: string,
    title: string,
    description: string,
    creationDate: string,
    dueDate: string,
    completedStatus: Boolean
};

export type List = {
    title: string,
    creationDate: string,
    items: Item[]
}

export enum DisplayStatus {
    All,
    Scheduled,
    Today,
    PersonalLists
}

export type Body = {
    displayStatus: DisplayStatus;
    lists: List[];
}