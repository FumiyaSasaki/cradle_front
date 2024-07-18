"use client";
import { Box, SxProps, Theme, Typography } from "@mui/material";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePropertyStore } from "../store/property";
const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiCLzHgA2Tq6y69FOlY12A4bzdiO0rMq02g&s';
const Detail = () => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const query = useSearchParams();
  const { id, rent } = usePropertyStore();

  return (<Box>
    <img alt='' src={imgUrl} width='100%' height='auto' />
    <Typography>{id}</Typography>
    <Typography>クレイドル山梨</Typography>
    <Typography>{rent}万円</Typography>
    <Typography>山梨県甲府市</Typography>
    <Typography>駅から20分</Typography>
    <Typography>2ldk</Typography>
    <Typography>南向き</Typography>
    <Typography>60㎡</Typography>
    <Typography>3万円</Typography>
    <Typography>3万円</Typography>
    <Typography>募集中</Typography>

  </Box>

  );
};

export default Detail;

const styles: { [key: string]: SxProps<Theme> } = {

};
