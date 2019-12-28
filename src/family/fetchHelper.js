export default async (url) => {
    const response = await fetch(url);
    const myJson = await response.json();
    return myJson;
}

