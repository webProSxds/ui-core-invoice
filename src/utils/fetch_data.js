export default async (url) => {

    let data = await fetch(url);
    return data;

}
