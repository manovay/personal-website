// Basic setup for Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha to support transparency
renderer.setSize(window.innerWidth, window.innerHeight);

// Function to load a GLTF model
function loadModel(containerId, modelPath) {
    const container = document.getElementById(containerId);
    
    // Create the renderer and attach it immediately to the container
    const modelRenderer = new THREE.WebGLRenderer({ alpha: true });
    modelRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(modelRenderer.domElement);
    
    const modelScene = new THREE.Scene();
    const loader = new THREE.GLTFLoader();

    loader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Adjust model scale as needed
        modelScene.add(model);

        const modelCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        modelCamera.position.z = 2;

        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01; // Rotate the model
            modelRenderer.render(modelScene, modelCamera);
        }
        animate();
    }, undefined, function (error) {
        console.error('An error occurred loading the model:', error); // Error handling
    });
}
// Function to create a rotating cube
function createCube(containerId) {
    const container = document.getElementById(containerId);
    const cubeScene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cubeScene.add(cube);

    const cubeCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    cubeCamera.position.z = 2;

    const cubeRenderer = new THREE.WebGLRenderer({ alpha: true });
    cubeRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(cubeRenderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cubeRenderer.render(cubeScene, cubeCamera);
    }
    animate();
}

// Load the 3D model for the first project
loadModel('cube1', '../images/ImageToStl.com_yamaha m1.gltf'); // Replace with the path to your 3D model

// Create cubes for the other projects
createCube('cube2');
createCube('cube3');

// Handle click events for the project containers
document.querySelectorAll('.project-container').forEach(container => {
    container.addEventListener('click', () => {
        const url = container.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

// Adjust sizes on window resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.threejs-cube').forEach(container => {
        const renderer = container.querySelector('canvas');
        renderer.style.width = container.clientWidth + 'px';
        renderer.style.height = container.clientHeight + 'px';
    });
});
