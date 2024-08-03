import { Box } from '@mui/material';
import { Header } from '../components/common/Header';
import { TopImageBlock } from '../components/client/home/TopImageBlock';
import { BlogFetch } from '../components/server/BlogBlockFetch';
import { InquiryBlock } from '../components/client/home/InquiryBlock';
import { Footer } from '../components/common/Footer';
import { PropertyBlockFetch } from '../components/server/PropertyBlockFetch';

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
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
    <Box mt={10}>
      <Footer />
    </Box>
  </>);
};

export default Home;