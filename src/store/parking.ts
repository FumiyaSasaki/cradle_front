import { ImageContentType } from '@/types/Common.type';
import { create } from 'zustand';

export type ParkingType = {
    uid: string;
    name: string;
    rent: number;
    prefecture: string;
    city: string;
    town: string;
    address: string;
    vacancyPlaces: string;
    remarks: string;
    imageContents: ImageContentType[];
    age: Date;
    deposit: number;
    keyMoney: number;
    latitude: number;
    longitude: number;
};

type Actions = {
    setParkingState: (newProperties: ParkingType[]) => void;
};

type ParkingState = { parkingState: { [key: string]: ParkingType } };

export const useParkingStore = create<ParkingState & Actions>(set => ({
    parkingState: {},
    setParkingState: (newProperties: ParkingType[]) => set(state => {
        newProperties.forEach((parking: ParkingType) => {
            state.parkingState[parking.uid] = parking;
        });
        return ({ parkingState: state.parkingState })
    })
}));

