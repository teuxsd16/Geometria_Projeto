var bt_gerar=document.getElementById('bt-gerar');
var bt_corte=document.getElementById('bt-corte');
var altura=6;
var raio=3;
var renderer;
var plano=null;
var qtd=1;

function Int() {
	// body...


var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 60, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 

show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
var geometry = new THREE.CylinderGeometry( raio, raio, altura, 30 ); 
var light = new THREE.AmbientLight( 0x404040,5 ); // soft white light
scene.add( light );
var light1 = new THREE.PointLight( 0x404040, 10, 100,1 );
light1.position.set( 50, 50, 50 );
scene.add( light1 );
controls.enableZoom = false;

var geometry1 = new THREE.PlaneBufferGeometry(12, 12, 60 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );

var material = new THREE.MeshLambertMaterial( { color:0x6495ED	} );
var cilindro = new THREE.Mesh( geometry, material );
scene.add( plano);
scene.add( cilindro);
plane.rotation.x=1.55;

camera.position.z =14; 



var animate = function () { 
	requestAnimationFrame( animate ); 
	
	renderer.render(scene, camera); }; 
	animate(); 



}
Int();

	bt_gerar.addEventListener('click', function () {
		altura=document.getElementById('altura').value;
		raio=document.getElementById('raio').value;
		if (raio>=2.5 && raio<=4.5 && altura>=2.5 && altura<=9 ) {
			renderer.setSize( 0, 0);
			Int(); 
		}
		calculos(raio,altura);
      });

	window.onload = function(e){ 
	document.getElementById('raio').value=raio;
	document.getElementById('altura').value=altura;
    calculos(raio,altura);

}

	function calculos(raio,altura) {
		var altura=document.getElementById('altura').value;
		var raio=document.getElementById('raio').value;
		var area_lateral=Math.PI*raio*altura*2;
		var area_base=Math.PI*raio*raio;
		var volume=(altura*raio*raio*Math.PI);
		var area_total=2*area_base+area_lateral;
		document.getElementById("area_base").innerHTML = area_base.toFixed(2);
		document.getElementById("area_lateral").innerHTML = area_lateral.toFixed(2) ;
		document.getElementById("volume").innerHTML = volume.toFixed(2);
		document.getElementById("area_total").innerHTML =area_total.toFixed(2);
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