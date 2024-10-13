import { Box } from '@mui/material';
import { Header } from '../components/common/Header';
import { TopImageBlock } from '../components/client/home/TopImageBlock';
import { TopDataType } from '@/types/Common.type';
import { getAllTopData } from '@/core/api';
import { BuildingBlock } from '@/components/client/home/BuildingBlock';
import { BlogBlock } from '@/components/client/home/BlogBlock';

const Home = async () => {
  const topData: TopDataType = await getAllTopData();
  return (<>
    <Header />
    <TopImageBlock />
    <BuildingBlock buildingData={topData.building} />
    <Box mt={10}>
      <BlogBlock blogsData={topData.blog} />
    </Box>
  </>);
};

export default Home;