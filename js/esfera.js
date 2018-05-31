var bt_gerar=document.getElementById('bt-gerar');
var bt_corte=document.getElementById('bt-corte');
var raio=2.5;
var renderer;
var plano=null;
var qtd=1;



function Int() {
	// body...


var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 
var geometry = new THREE.IcosahedronBufferGeometry(raio, 4); 
show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;


var material = new THREE.MeshLambertMaterial( {  wireframe:false, color:0xffffff } ); 
var esfera = new THREE.Mesh( geometry, material );
var light = new THREE.AmbientLight( 0xff0000,0.7); // soft white light
scene.add( light );
var light1 = new THREE.PointLight( 0x404040, 10, 93,1 );
light1.position.set( 50, 50, 50 );

var light2 = new THREE.PointLight( 0x404040, 10, 93,1 );
light2.position.set( -50, 50, 50 );

scene.add( light1 );
scene.add( light2 );

var geometry1 = new THREE.PlaneBufferGeometry(8.3, 8.3, 60 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );
scene.add( plano);
scene.add( esfera ); 
plane.rotation.x=1.55;
camera.position.z =8.4; 

var animate = function () { 
	requestAnimationFrame( animate ); 
	
	

	renderer.render(scene, camera); }; 
	animate(); 

}

Int();

bt_gerar.addEventListener('click', function () {
	raio=document.getElementById("raio").value;
	if (raio>=2 && raio<=5) {
			renderer.setSize( 0, 0); 
			Int();
	}
	calculos(raio);	
        });

window.onload = function(){

	document.getElementById("raio").value=raio;
	calculos(raio);		
}


function calculos(raio) {
	
		var area=4*raio*raio*Math.PI;
		var volume=(4*raio*raio*raio*Math.PI)/3;
		document.getElementById("area").innerHTML = area.toFixed(2);
		document.getElementById("volume").innerHTML = volume.toFixed(2);
}


bt_corte.addEventListener('click', function () {
qtd++;	

		if(qtd==1){
			plano=null;
			document.getElementById('bt-corte').className="btn btn-dark";
		}


		if(qtd==2){
			plano=plane;
			document.getElementById('bt-corte').className="btn btn-danger";
			qtd=0;

		}

		

		renderer.setSize( 0, 0); 
			
			
			Int();
		

	        });		