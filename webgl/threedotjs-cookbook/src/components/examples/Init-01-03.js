import * as THREE from 'three';
import 'three/examples/js/renderers/CSS3DRenderer';


let renderer;
let scene;
let camera;

export const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.CSS3DRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.x = 500;
    camera.position.y = 500;
    camera.position.z = 500;
    camera.lookAt(scene.position);

    document.querySelector('#app').appendChild(renderer.domElement);
    const cssElement = createCSS3DObject(string);
    cssElement.position.set(100, 100, 100);
    scene.add(cssElement);

    render();
}

function createCSS3DObject(s) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = s;
    const div = wrapper.firstChild;

    div.style.width = '370px';
    div.style.height = '370px';
    div.style.opacity = 0.7;
    div.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();

    const object = new THREE.CSS3DObject(div)
    return object
}

function render() {
    renderer.render(scene, camera)
}