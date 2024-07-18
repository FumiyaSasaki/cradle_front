"use client";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { PropertyList } from "./components/PropertyList";
import { TopImage } from "./components/TopImage";
const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiCLzHgA2Tq6y69FOlY12A4bzdiO0rMq02g&s';

const Home = () => {
  return (<>
    <Header />
    <TopImage />
    <Box mt={10}>
      <PropertyList />
    </Box>
  </>);
};

export default Home;

const styles: { [key: string]: SxProps<Theme> } = {

};
