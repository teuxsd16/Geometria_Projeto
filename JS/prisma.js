var bt_gerar=document.getElementById('bt-gerar');
var bt_corte=document.getElementById('bt-corte');
//Variaveis do prisma
var base=3.4;
var n_lados=4;
var altura=4.8;
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
show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
//Estrutura do prisma
var geometry = new THREE.CylinderBufferGeometry( base, base, altura, n_lados );
var material = new THREE.MeshBasicMaterial( {wireframe:false,color:0x6495ED, overdraw: 0.5 } );
var prisma = new THREE.Mesh( geometry, material );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
//Corte da figura
var geometry1 = new THREE.PlaneBufferGeometry( 11, 11, 90 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );

//Scena
scene.add(plano);
scene.add( line );
scene.add( prisma );
//camera
camera.position.z =10;
plane.rotation.y=0.80;


var animate = function () { 
	requestAnimationFrame( animate ); 
	
	renderer.render(scene, camera); }; 
	animate(); 

}

Int();

bt_gerar.addEventListener('click', function () {

		
		base=document.getElementById('base').value-1.6;
		altura=document.getElementById('altura').value;
		n_lados=document.getElementById('nlados').value;

	if (base>2.5 && base<=8 && altura>2.5 && altura<=9 && n_lados>=3 && n_lados<=16) {
		renderer.setSize( 0, 0);
		Int(); 
		
	}
	calculos((base+1.4),n_lados,altura);

  });


window.onload = function(e){ 
	document.getElementById('base').value=4.8;
	document.getElementById('altura').value=4.8;
    document.getElementById('nlados').value=4.0;
    calculos((base+1.4),n_lados,altura);

}


function calculos(base,n_lados,altura) {
	var area_base=(n_lados*base*base)/(4*Math.tan((180/n_lados)*Math.PI/180));
	var area_lateral=base*altura*n_lados;
	var area_total=2*area_base+area_lateral;
	var volume=area_base*altura;
	var n_diagonais=n_lados*(n_lados-3)/2;
	
	document.getElementById('area_base').innerHTML=area_base.toFixed(2);
	document.getElementById('area_lateral').innerHTML=area_lateral.toFixed(2);
	document.getElementById('area_total').innerHTML=area_total.toFixed(2);
	document.getElementById('volume').innerHTML=volume.toFixed(2);
	
	
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

