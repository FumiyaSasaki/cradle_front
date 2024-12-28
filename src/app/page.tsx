import { Box } from '@mui/material';
import { Header } from '../components/common/Header';
import { TopImageBlock } from '../components/client/home/TopImageBlock';
import { TopDataType } from '@/types/Common.type';
import { getAllTopData } from '@/core/api';
import { BuildingBlock } from '@/components/client/home/BuildingBlock';
import { BlogBlock } from '@/components/client/home/BlogBlock';
import { ParkingBlock } from '@/components/client/home/ParkingBlock';

const Home = async () => {
  const topData: TopDataType = await getAllTopData();
  return (<>
    <Header />
    <TopImageBlock images={topData.homeImages}/>
    <BuildingBlock buildingData={topData.building} />
    <ParkingBlock parkingData={topData.parkingData} />
    <Box mt={10}>
      <BlogBlock blogsData={topData.blog} />
    </Box>
  </>);
};

export default Home;