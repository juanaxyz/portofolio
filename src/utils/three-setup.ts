import * as THREE from "three";

export function setupScene(container: HTMLDivElement) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a0a);

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
  camera.position.z = 150;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  return { scene, camera, renderer, width, height };
}

export function createOrbits(scene: THREE.Scene) {
  const orbits: {
    mesh: THREE.Mesh;
    radius: number;
    speed: number;
    angle: number;
  }[] = [];

  const colors = [0x6798ff, 0x6798ff, 0x6798ff];
  const radii = [40, 70, 100];
  const speeds = [0.003, 0.002, 0.0015];
  const sphereSizes = [8, 6, 4];

  radii.forEach((radius, i) => {
    const geometry = new THREE.SphereGeometry(sphereSizes[i], 32, 32);
    const material = new THREE.MeshPhongMaterial({
      color: colors[i],
      emissive: colors[i],
      emissiveIntensity: 0.3,
      shininess: 100,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    orbits.push({
      mesh: sphere,
      radius,
      speed: speeds[i],
      angle: Math.random() * Math.PI * 2,
    });

    scene.add(sphere);
  });

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x6798ff, 1, 200);
  pointLight.position.set(100, 100, 100);
  pointLight.castShadow = true;
  scene.add(pointLight);

  return orbits;
}

export function animateOrbits(
  orbits: ReturnType<typeof createOrbits>,
  scrollY: number
) {
  orbits.forEach((orbit) => {
    orbit.angle += orbit.speed;

    const x = Math.cos(orbit.angle) * orbit.radius;
    const y = Math.sin(orbit.angle) * orbit.radius;
    const z = Math.sin(scrollY * 0.001) * 50;

    orbit.mesh.position.set(x, y, z);
    orbit.mesh.rotation.x += 0.002;
    orbit.mesh.rotation.y += 0.003;
  });
}

export function handleWindowResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
