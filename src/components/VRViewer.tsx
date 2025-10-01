import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const VRViewer = () => {
  return (
    // <Box h="2xl" w="2xl" m="auto" as="div">
    <Box h="xl" w="xl" m="auto" as="div">
      <ReactPlayer
        muted
        className="mx-auto"
        width="30vw"
        height="30vh"
        autoPlay
        loop={false}
        src="/assets/RAYE_Black_Mascara.mp4"
      />
    </Box>
  );
};
