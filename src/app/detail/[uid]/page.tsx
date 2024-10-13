import { BuildingType } from '@/store/building';
import { getAllBuilding, getBuildingByUid } from '@/core/api';
import { DetailPage } from '@/components/client/detail/DetailPage';

export const generateStaticParams = async () => {
  const propertiesData: BuildingType[] = await getAllBuilding();
  return propertiesData.map((building: BuildingType) => ({
    uid: building.uid,
  }));
};

const Detail = async ({ params }: { params: { uid: string } }) => {
  const building: BuildingType = await getBuildingByUid(params.uid);
  return <DetailPage building={building} />
};

export default Detail;
