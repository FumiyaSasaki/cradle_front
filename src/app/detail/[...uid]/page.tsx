import { BuildingType } from '@/store/building';
import { getAllBuilding, getAllParking, getBuildingByUid, getParkingByUid } from '@/core/api';
import { DetailPage } from '@/components/client/detail/DetailPage';
import { ParkingType } from '@/store/parking';

export const generateStaticParams = async () => {
  const buildingData: BuildingType[] = await getAllBuilding()
  const parkingData: ParkingType[] = await getAllParking();
  const buildingUidList = buildingData.map((propertyData: BuildingType) => ({
    uid: ['building', propertyData.uid],
  }));
  const parkingUidList = parkingData.map((propertyData: ParkingType) => ({
    uid: ['parking', propertyData.uid],
  }));
  return [...buildingUidList, ...parkingUidList];
};

const Detail = async ({ params }: { params: { uid: string } }) => {
  const building: BuildingType | ParkingType = params.uid[0] === 'building' ?
    await getBuildingByUid(params.uid[1]) : await getParkingByUid(params.uid[1]);
  return <DetailPage building={building} />
};

export default Detail;
