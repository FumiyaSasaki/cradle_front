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
        throw new Error('failed Api.');
    }
};

const BUILDING = 'building';
const COMPOSITE = 'composite';
const BLOG = 'blog';

export const getBuildingByUid = async (uid: string) => {
    const body: string = JSON.stringify({ uid });
    return await fetchApi(BUILDING + '/getbuildingbyuid', body);
};

export const getAllBuilding = async () => await fetchApi(BUILDING + '/getallbuilding');
export const getAllTopData = async () => await fetchApi(COMPOSITE + '/getalltopdata');
export const getAllBlog = async () => await fetchApi(BLOG + '/getallblog');
export const getBlogByUid = async (uid: string) => {
    const body: string = JSON.stringify({ uid });
    return await fetchApi(BLOG + '/getblogbyuid', body);
};