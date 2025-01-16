// Function to load a GLTF model
function loadModel(containerId, modelPath, modelScale) {
    
    const container = document.getElementById(containerId);
    
    // Create the renderer 
    const modelRenderer = new THREE.WebGLRenderer({ alpha: true });
    //Set size of tenderer to container
    modelRenderer.setSize(container.clientWidth, container.clientHeight);
    //Append to the container, and thus, the dom element
    container.appendChild(modelRenderer.domElement);
    
    //Required for three.js
    const modelScene = new THREE.Scene();
    const loader = new THREE.GLTFLoader();

    //loads model, requires the path as well as the extension gltf
    loader.load(modelPath, function (gltf) {

        //create a gltf scene
        const model = gltf.scene;
        model.scale.set(modelScale, modelScale, modelScale); // Adjust model scale as needed
        //add model to scene
        modelScene.add(model);

        //sets the camera, starts with the field of view, aspect ratio, near and far planes ( distance from the camera)
        const modelCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        //sets position of camera at z axis at 2 units away 
        modelCamera.position.z = 2;

        const ambientLightModel = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light for the model
        modelScene.add(ambientLightModel);

        const directionalLightModel = new THREE.DirectionalLight(0xffffff, 1); // Directional white light for the model
        directionalLightModel.position.set(5, 10, 7.5);
        modelScene.add(directionalLightModel);

        //spins the models
        function animate() {
            //creates a loop for the javascript scene, recursively calls itself
            requestAnimationFrame(animate);
            //rotates on the y and x axis per frame
            model.rotation.y += 0.01;
            model.rotation.x += 0.02; 
            //renders the updated scene 
            modelRenderer.render(modelScene, modelCamera);
        }
        // calls animate for the first time 
        animate();

    }, undefined, function (error) {
        // incase an error occurs loading it
        console.error('An error occurred loading the model:', error); // Error handling
    });
}
// Function to create a rotating cube, copied from online as it is a placeholder 
// function createCube(containerId) {
//     const container = document.getElementById(containerId);
//     const cubeScene = new THREE.Scene();

//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
//     const cube = new THREE.Mesh(geometry, material);
//     cubeScene.add(cube);

//     const cubeCamera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
//     cubeCamera.position.z = 2;

//     const cubeRenderer = new THREE.WebGLRenderer({ alpha: true });
//     cubeRenderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(cubeRenderer.domElement);

//     function animate() {
//         requestAnimationFrame(animate);
//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         cubeRenderer.render(cubeScene, cubeCamera);
//     }
//     animate();
// }


// Load the 3D model for the projects onto the scene
loadModel('cube1', './images/motorcycle.gltf',1); 
loadModel('cube2', './images/football.gltf',0.075)
loadModel('cube3', './images/computer.gltf',0.5)
loadModel('cube4', './images/marvelscene.gltf',0.03)

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