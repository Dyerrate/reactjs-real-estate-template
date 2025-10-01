import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const VRViewer = () => {
  let container;
  let camera, scene, renderer, controls;

  const loader = new PLYLoader();
  loader.setCrossOrigin("*");
  //initializing the camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    2000
  );
  camera.position.z = 2;
  camera.position.set(0, 9, 1500);

  useEffect(() => {
    init(container, camera, scene, renderer, controls);
    animate(renderer, scene, camera, controls);
  }, []);

  return (
    <Box h="2xl" w="2xl" m="auto" as="div">
      <p className="text-center">Testing 123</p>
    </Box>
  );
};

function init(container, camera, scene, renderer, controls) {
  //Creating the container for the ply
  container = document.createElement("div");
  document.body.appendChild(container);

  //initializing the camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    2000
  );
  camera.position.z = 2;
  camera.position.set(0, 9, 1500);

  //initializing the scene
  scene = new THREE.Scene();
  scene.add(new THREE.AxesHelper(30));

  //initializing renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  //adding renderer to DOM
  container.appendChild(renderer.domElement);

  //initializing interactive controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  //rendering ply file
  const plyLoader = new PLYLoader();

  plyLoader.load(
    "/assets/house_15_splat.ply",
    function (geometry) {
      const mesh = new THREE.Points(geometry);
      mesh.rotateX(-Math.PI / 2);
      scene.add(mesh);
    },
    // called when loading is in progress
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened");
      console.log(error);
    }
  );
}

function animate(renderer, scene, camera, controls) {
  requestAnimationFrame(() => animate(renderer, scene, camera, controls));
  renderer.render(scene, camera);
  controls.update();
}
