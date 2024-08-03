import { PropertyType } from '@/app/store/property';
import { getAllProperties } from '@/app/core/api';
import { DetailPage } from '@/app/components/client/detail/DetailPage';

export const generateStaticParams = async () => {
  const propertiesData: PropertyType[] = await getAllProperties();
  return propertiesData.map((property: PropertyType) => ({
    uid: property.uid,
  }));
};

const Page = ({ params }: { params: { uid: string } }) => {
  return <DetailPage uid={params.uid} />
};

export default Page;
