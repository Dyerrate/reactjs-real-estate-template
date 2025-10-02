import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function View() {
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
        src="/assets/2025-10-01-19-00-33.mp4"
      />
    </Box>
  );
}
