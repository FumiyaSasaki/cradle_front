import { create } from "zustand";

export type Property = {
    id: number;
    uid: string;
    name: string;
    rent: number;
    prefecture: string;
    city: string;
    town: string;
    address: string;
    building: string;
    distanceMinutes: number;
    floorPlan: string;
    age: number;
    direction: string;
    occupancyArea: number;
    deposit: number;
    keyMoney: number;
    isVacancy: boolean;
};

type Actions = {
    setProperties: (newProperties: Property[]) => void;
};

type Properties = { propertiesState: { [key: string]: Property } };

export const usePropertyStore = create<Properties & Actions>((set) => ({
    propertiesState: {},
    setProperties: (newProperties: Property[]) => set(state => {
        newProperties.forEach((property: Property) => {
            state.propertiesState[property.uid] = property;
        });
        return ({ propertiesState: state.propertiesState })
    })
}));

