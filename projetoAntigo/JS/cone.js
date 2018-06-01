var bt_gerar=document.getElementById('bt-gerar');
var bt_corte=document.getElementById('bt-corte');
var altura=5.5;//8
var raio=3;//5
var renderer;
var scene;
var plane,qtd=1,plano;


function Int() {
	// body...

scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 50, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );


show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
var geometry = new THREE.ConeGeometry( raio, altura,26 ); 
var geometry1 = new THREE.PlaneBufferGeometry( 7.7, 7.7, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );

var light = new THREE.AmbientLight( 0x20B2AA,1); // soft white light
scene.add( light );
var light1 = new THREE.PointLight( 0xffffff, 8, 87,1 );
light1.position.set( 50, 50, 50 );
scene.add( light1 );


//var material = new THREE.MeshBasicMaterial( {  wireframe:false, vertexColors: THREE.FaceColors, overdraw: 0.5 } ); 
var material = new THREE.MeshPhongMaterial( {  color:0xffffff} ); 
var cone = new THREE.Mesh( geometry, material );

scene.add( cone ); 
camera.position.z =14; 
plane.rotation.x=1.55;

var animate = function () { 
	requestAnimationFrame( animate ); 
	
	renderer.render(scene, camera); 
}; 
	animate(); 
}
Int(); 

	bt_gerar.addEventListener('click', function () {
			altura=document.getElementById('altura').value;
			raio=document.getElementById('raio').value;
			if (altura>=5.5 && altura<=8 && raio>=3 && raio<=5.5) {
				renderer.setSize( 0, 0);
				Int();
			}
			calculos(raio,altura);
		});



	window.onload = function(){
		document.getElementById('raio').value=raio;
		document.getElementById('altura').value=altura;	
		calculos(raio,altura);	
}

function calculos(raio,altura) {
	var area_base=Math.PI*raio*raio;
	var geratriz=Math.sqrt(Math.pow(altura,2)+Math.pow(raio,2));
	var area_lateral=Math.PI*raio*geratriz;
	var volume=(altura*raio*raio*Math.PI)/3;
	var area_total=area_base+area_lateral;
	document.getElementById("area_base").innerHTML = area_base.toFixed(2);
	document.getElementById("area_lateral").innerHTML = area_lateral.toFixed(2) ;
	document.getElementById("volume").innerHTML = volume.toFixed(2);
	document.getElementById("geratriz").innerHTML = geratriz.toFixed(2);
	document.getElementById("area_total").innerHTML =area_total.toFixed(2);
}

bt_corte.addEventListener('click', function () {
qtd++;	

		if(qtd==1){
			plano=scene.remove(plane);  
			document.getElementById('bt-corte').className="btn btn-dark";
		}


		if(qtd==2){
			plano=scene.add(plane);
			document.getElementById('bt-corte').className="btn btn-danger";
			qtd=0;

		}

		

		renderer.setSize( 0, 0); 
			
			
			Int();
		

	        });		