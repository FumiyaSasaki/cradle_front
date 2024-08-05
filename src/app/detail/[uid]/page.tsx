import { PropertyType } from '@/store/property';
import { getAllProperties } from '@/core/api';
import { DetailPage } from '@/components/client/detail/DetailPage';

export const generateStaticParams = async () => {
  const propertiesData: PropertyType[] = await getAllProperties();
  return propertiesData.map((property: PropertyType) => ({
    uid: property.uid,
  }));
};

const Detail = ({ params }: { params: { uid: string } }) => {
  return <DetailPage uid={params.uid} />
};

export default Detail;
