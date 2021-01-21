import { Item, List } from "../types";

export const countItems = (requiredCompletedStatus: boolean, listOfItems: Item[]):number => {
    let count: number = 0;
    for (let i = 0; i < listOfItems.length; i++){
        const currentItem = listOfItems[i]
        if (currentItem.completedStatus === requiredCompletedStatus){
            count++;
        }
    }
    return count;
}