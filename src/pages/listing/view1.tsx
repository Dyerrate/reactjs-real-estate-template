import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function View1() {
  return (
    <Box h="100vh" className="overflow-clip">
      <ReactPlayer
        muted={true}
        autoPlay={true}
        onError={() => alert("Failed to render property")}
        className="mx-auto"
        width="100%"
        height="auto"
        loop
        src={`/assets/1.mp4`}
      />
    </Box>
  );
}
