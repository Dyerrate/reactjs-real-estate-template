import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export const VRViewer = () => {
  return (
    // <Box h="2xl" w="2xl" m="auto" as="div">
    <Box h="xl" w="xl" m="auto" as="div">
      <ReactPlayer
        muted
        onError={() => alert("Failed to render property")}
        className="mx-auto"
        width="100vw"
        height="100vh"
        autoPlay
        loop={false}
        src="/assets/RAYE_Black_Mascara.mp4"
      />
    </Box>
  );
};
