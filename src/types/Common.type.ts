import { BlogType } from "@/store/blog";
import { BuildingType } from "@/store/building";
import { ParkingType } from "@/store/parking";

export type ImageContentType = {
    handleUid: string;
    url: string;
    title: string;
    content: string;
};

export type TopDataType = { building: BuildingType[], parkingData: ParkingType[], blog: BlogType[], homeImages: ImageContentType[] };