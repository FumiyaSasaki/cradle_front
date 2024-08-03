const fetchApi = async (path: string, body?: string) => {
    try {
        const url: string = process.env.NEXT_PUBLIC_API_BASE_URL + path;
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
        throw new Error('failed.');
    }
};

const propertyUrl = 'property';

export const getPropertyByUid = async (uid: string) => {
    const body: string = JSON.stringify({ uid });
    return await fetchApi(propertyUrl + '/getpropertybyuid', body);
};

export const getAllProperties = async () => await fetchApi(propertyUrl + '/getallproperties');