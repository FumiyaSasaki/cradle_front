import { create } from "zustand";

export type PropertyType = {
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
    imageUrls: string[];
    distanceMinutes: number;
    age: number;
    occupancyArea: number;
    deposit: number;
    keyMoney: number;
    isVacancy: boolean;
};

type Actions = {
    setPropertyState: (newProperties: PropertyType[]) => void;
};

type PropertyState = { propertyState: { [key: string]: PropertyType } };

export const usePropertyStore = create<PropertyState & Actions>(set => ({
    propertyState: {},
    setPropertyState: (newProperties: PropertyType[]) => set(state => {
        newProperties.forEach((property: PropertyType) => {
            state.propertyState[property.uid] = property;
        });
        return ({ propertyState: state.propertyState })
    })
}));

