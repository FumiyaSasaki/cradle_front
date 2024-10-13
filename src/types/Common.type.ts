export type BuildingType = {
    uid: string;
    name: string;
    rent: number;
    prefecture: string;
    city: string;
    town: string;
    address: string;
    building: string;
    floorPlan: string;
    direction: string;
    imageContents: ImageContentType[];
    distanceMinutes: number;
    age: Date;
    occupancyArea: number;
    deposit: number;
    keyMoney: number;
    latitude: number;
    longitude: number;
    isVacancy: boolean;
};

export type BlogType = {
    uid: string;
    title: string;
    content: string;
    imageContents: ImageContentType[];
    updatedAt: Date;
};

export type ImageContentType = {
    handleUid: string;
    url: string;
    title: string;
    content: string;
};

export type TopDataType = { building: BuildingType[], blog: BlogType[] };