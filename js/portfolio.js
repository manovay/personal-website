// Basic setup for Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha to support transparency
renderer.setSize(window.innerWidth, window.innerHeight);

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

    const cubeRenderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
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

// Create cubes for each project
createCube('cube1');
createCube('cube2');
createCube('cube3');

// Handle click events for the project containers
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
