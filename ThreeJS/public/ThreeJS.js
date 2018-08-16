(function() {
  'use strict';
  var camera;
  var scene;
  var renderer;
  var mesh;

  init();
  animate();

  function init() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

    var light = new THREE.DirectionalLight(0xffffff);
    var AmbientLight = new THREE.AmbientLight(0xffffbb, 2);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);
    scene.add(AmbientLight);

    

    //var geometry = new THREE.CubeGeometry(10, 20, 10);
    //// var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff,     specular: 0x555555, shininess: 30 } );
    //var material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('box.jpg') });
    //mesh = new THREE.Mesh(geometry, material);
    //mesh.position.z = -50;
    //scene.add(mesh);

    //var JSONLoader = new THREE.JSONLoader();

    //var geoJsonUrl = "http://192.168.77.49:8080/geoserver/ppt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ppt:ppt_zone&outputFormat=application%2Fjson";

    //JSONLoader.load('ppt.json', function (geometry) {
    //  var material = new THREE.MeshFaceMaterial;
    //  var object = new THREE.Mesh(geometry, material);
    //  scene.add(object);
    //},
    //  function (xhr) {
    //    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    //  },
    //  // onError callback
    //  function (err) {
    //    console.log('An error happened');
    //  }
    //); 

    var loader = new THREE.BufferGeometryLoader();

    // load a resource
    loader.load(
      // resource URL
      'ppt.json',

      // onLoad callback
      function (geometry) {
        var material = new THREE.MeshLambertMaterial({ color: 0xF5F5F5 });
        var object = new THREE.Mesh(geometry, material);
        scene.add(object);
      },

      // onProgress callback
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },

      // onError callback
      function (err) {
        console.log('An error happened');
      }
    );
    // Alternatively, to parse a previously loaded JSON structure
    //var object = loader.parse(a_json_object);

    //scene.add(object);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x999999);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    render();
  }


  function animate() {
    //mesh.rotation.x += .03;
    //mesh.rotation.y += .03;

    render();
    requestAnimationFrame(animate);
  }


  function render() {
    renderer.render(scene, camera);
  }


  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  }
}());