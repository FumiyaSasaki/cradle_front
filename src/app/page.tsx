import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { TopImage } from "./components/TopImage";
import { PropertyListFetch } from "./components/PropertyListFetch";

const Home = () => {
  return (<>
    <Header />
    <TopImage />
    <Box mt={10}>
      <PropertyListFetch />
    </Box>
  </>);
};

export default Home;