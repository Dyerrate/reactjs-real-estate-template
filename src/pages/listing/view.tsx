import ReactPlayer from "react-player";

export default function View() {
  return (
    <ReactPlayer
      muted={true}
      autoPlay={true}
      onError={() => alert("Failed to render property")}
      className="mx-auto"
      width="100vw"
      height="100vh"
      loop={false}
      src="/assets/2025-10-01-19-00-33.mp4"
    />
  );
}
