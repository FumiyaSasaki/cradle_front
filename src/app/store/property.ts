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
    setProperty: (newProperty: Property) => void;
};

export const usePropertyStore = create<Property & Actions>((set) => ({
    id: 0,
    uid: '',
    name: '',
    rent: 0,
    prefecture: '',
    city: '',
    town: '',
    address: '',
    building: '',
    distanceMinutes: 0,
    floorPlan: '',
    age: 0,
    direction: '',
    occupancyArea: 0,
    deposit: 0,
    keyMoney: 0,
    isVacancy: false,
    setProperty: (newProperty: Property) => set(state => ({
        ...state, ...newProperty,
        // id: newProperty.id,
        // rent: newProperty.rent,
        // prefecture: newProperty.prefecture,
        // municipalities: newProperty.municipalities,
        // houseNumber: newProperty.houseNumber,
        // building: newProperty.building,
        // distanceMinutes: newProperty.distanceMinutes,
        // floorPlan: newProperty.floorPlan,
        // age: newProperty.age,
        // direction: newProperty.direction,
        // occupancyArea: newProperty.occupancyArea,
        // deposit: newProperty.deposit,
        // keyMoney: newProperty.keyMoney,
        // isVacancy: newProperty.isVacancy
    })),
}));

