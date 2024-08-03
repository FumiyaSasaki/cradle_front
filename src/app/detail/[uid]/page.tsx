import { Property } from '@/app/store/property';
import { getAlProperties } from '@/app/core/api';
import { DetailPage } from '@/app/components/DetailPage';

export const generateStaticParams = async () => {
  const propertiesData: Property[] = await getAlProperties();
  return propertiesData.map((property: Property) => ({
    uid: property.uid,
  }));
};

const Page = ({ params }: { params: { uid: string } }) => {
  return <DetailPage uid={params.uid} />
};

export default Page;
