import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { TopImage } from "./components/TopImage";
import { PropertyListFetch } from "./components/PropertyListFetch";
import { NewsFetch } from "./components/NewsFetch";
import { Inquiry } from "./components/Inquiry";
import { Footer } from "./components/Footer";

const Home = () => {
  return (<>
    <Header />
    <TopImage />
    <Box mt={10}>
      <PropertyListFetch />
    </Box>
    <Box mt={10}>
      <NewsFetch />
    </Box>
    <Box>
      <Inquiry />
    </Box>
    <Box mt={10}>
      <Footer />
    </Box>
  </>);
};

export default Home;