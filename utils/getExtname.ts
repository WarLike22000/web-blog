export const getExtname = (filename: string) => {
    const splitByDot = filename.split(".");
    const ext = splitByDot[splitByDot.length - 1];
    return ext
}