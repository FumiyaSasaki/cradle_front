export const fetchApi = async () => {
    try {
        const url: string = 'http://localhost:3001/property/getmenubyuid';
        const response = await fetch(url, {
            method: 'POST',
            // cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid: '123456789' }),
        });
        return response.json();
    } catch (error) {
        console.log(error);
        throw new Error('FoodAPI failed.');
    }
};