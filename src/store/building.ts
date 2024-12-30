import { ImageContentType } from '@/types/Common.type';
import { create } from 'zustand';

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
    remarks: string;
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

type Actions = {
    setBuildingState: (newProperties: BuildingType[]) => void;
};

type BuildingState = { buildingState: { [key: string]: BuildingType } };

export const useBuildingStore = create<BuildingState & Actions>(set => ({
    buildingState: {},
    setBuildingState: (newProperties: BuildingType[]) => set(state => {
        newProperties.forEach((building: BuildingType) => {
            state.buildingState[building.uid] = building;
        });
        return ({ buildingState: state.buildingState })
    })
}));

