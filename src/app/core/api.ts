export const fetchApi = async (path: string, body?: string) => {
    try {
        const url: string = `http://localhost:3001/property/${path}`;
        const response: Response = await fetch(url, {
            method: 'POST',
            // cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('FoodAPI failed.');
    }
};

export const getPropertyByUid = async (uid: string) => {
    const body: string = JSON.stringify({ uid });
    return await fetchApi('getpropertybyuid', body);
};

export const getAlProperties = async () => await fetchApi('getallproperties');