import { Box } from "@chakra-ui/react";
import * as GaussianSplatter from "@mkkellogg/gaussian-splats-3d";

export const VRViewer = () => {
  const viewer = new GaussianSplatter.Viewer({
    cameraUp: [0, -1, -0.6],
    initialCameraPosition: [-1, -4, 6],
    initialCameraLookAt: [0, 4, 0],
  });

  viewer
    .addSplatScene("/assets/house_15_splat.ply", {
      splatAlphaRemovalThreshold: 5,
      showLoadingUI: true,
      position: [0, 1, 0],
      rotation: [0, 0, 0, 1],
      scale: [1.5, 1.5, 1.5],
    })
    .then(() => {
      viewer.start();
    });

  return (
    <Box h="2xl" w="2xl" m="auto">
      <p className="text-center">Testing 123</p>
    </Box>
  );
};
