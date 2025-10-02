import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function View() {
  const rand = Math.random();
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
        src={`/assets/${rand > 0.5 ? "1" : "2"}.mp4`}
      />
    </Box>
  );
}
