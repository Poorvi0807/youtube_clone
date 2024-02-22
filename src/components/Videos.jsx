import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  //   console.log(videos);

  if (!videos?.length) return "Loading...";

