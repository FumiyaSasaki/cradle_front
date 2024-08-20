import { BuildingType } from '@/store/building';
import { getAllBuilding } from '@/core/api';
import { DetailPage } from '@/components/client/detail/DetailPage';

export const generateStaticParams = async () => {
  const propertiesData: BuildingType[] = await getAllBuilding();
  return propertiesData.map((building: BuildingType) => ({
    uid: building.uid,
  }));
};

const Detail = ({ params }: { params: { uid: string } }) => {
  return <DetailPage uid={params.uid} />
};

export default Detail;
