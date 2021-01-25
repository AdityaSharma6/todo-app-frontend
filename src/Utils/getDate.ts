export const getDate = () => {
    const dateObj = new Date();
    return (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());
}