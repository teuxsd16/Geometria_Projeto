var bt=document.getElementById('bt-pronto');
var altura;
var largura;
var comprimento;
var renderer;
var altura_padrao=2;
var largura_padrao=3;
var comprimento_padrao=4;
var b=6;


function Int() {
	// body...


var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 
var geometry = new THREE.BoxGeometry( largura_padrao, altura_padrao, comprimento_padrao); 
show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );

for ( var i = 0; i < geometry.faces.length; i += 2 ) {
		var hex = Math.random() * 0xffffff;
		geometry.faces[ i ].color.setHex( hex );
		geometry.faces[ i + 1 ].color.setHex( hex );
					}

var material = new THREE.MeshBasicMaterial( {  wireframe:false, vertexColors: THREE.FaceColors, overdraw: 0.5 } ); 
var cube = new THREE.Mesh( geometry, material );

scene.add( cube ); 
camera.position.z =b; 


var animate = function () { 
	requestAnimationFrame( animate ); 
	
	cube.rotation.z+=0.003;
	cube.rotation.x+=0.003;

	renderer.render(scene, camera); }; 
	animate(); 

}

Int();

bt.addEventListener('click', function () {
		
	altura=document.getElementById('altura').value;
	comprimento=document.getElementById('comprimento').value;
	largura=document.getElementById('largura').value;

		renderer.setSize( 0, 0); 
		altura_padrao=altura;
		largura_padrao=largura;
		comprimento_padrao=comprimento;
		
		
		Int();

          

        });