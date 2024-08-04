import { Box } from '@mui/material';
import { Header } from '../components/common/Header';
import { TopImageBlock } from '../components/client/home/TopImageBlock';
import { BlogFetch } from '../components/server/BlogBlockFetch';
import { InquiryBlock } from '../components/common/InquiryBlock';
import { Footer } from '../components/common/Footer';
import { PropertyBlockFetch } from '../components/server/PropertyBlockFetch';

const Home = () => {
  return (<>
    <Header />
    <TopImageBlock />
    <Box mt={10}>
      <PropertyBlockFetch />
    </Box>
    <Box mt={10}>
      <BlogFetch />
    </Box>
    <Box>
      <InquiryBlock />
    </Box>
  </>);
};

export default Home;