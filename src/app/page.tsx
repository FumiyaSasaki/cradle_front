import { Box } from '@mui/material';
import { Header } from '../components/common/Header';
import { TopImageBlock } from '../components/client/home/TopImageBlock';
import { InquiryBlock } from '../components/common/InquiryBlock';
import { TopDataType } from '@/types/Common.type';
import { getAllTopData } from '@/core/api';
import { BuildingBlock } from '@/components/client/home/BuildingBlock';
import { BlogBlock } from '@/components/client/home/BlogBlock';

const Home = async () => {
  const topData: TopDataType = await getAllTopData();
  return (<>
    <Header />
    <TopImageBlock />
    <Box mt={10}>
      <BuildingBlock buildingData={topData.building} />
    </Box>
    <Box mt={10}>
      <BlogBlock blogsData={topData.blog} />
    </Box>
    <Box>
      <InquiryBlock />
    </Box>
  </>);
};

export default Home;