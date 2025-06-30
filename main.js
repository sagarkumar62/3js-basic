import * as THREE from 'three';

//1.Create a scene
const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue background

//2.Add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Position the camera away from the origin

//3.Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x468585, emissive: 0x468585}); // Green color

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//4.Add a light source
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

//5.Render the scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//6.Add an animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotate the cube on the x-axis
    cube.rotation.y += 0.01; // Rotate the cube on the y-axis
    renderer.render(scene, camera);
}

animate();