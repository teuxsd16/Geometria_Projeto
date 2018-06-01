var bt_pronto=document.getElementById('bt-pronto');
var bt_corte=document.getElementById('bt-corte');
var lado;
var renderer;
var lado_padrao=2;
var b=7.5;
var p=null,o=null;
var qtd=1;


function Int() {
	// body...


var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 45, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 
var geometry = new THREE.BoxGeometry( lado_padrao, lado_padrao, lado_padrao); 
show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;

for ( var i = 0; i < geometry.faces.length; i += 2 ) {
		var hex = Math.random() * 0xffffff;
		geometry.faces[ i ].color.setHex( hex );
		geometry.faces[ i + 1 ].color.setHex( hex );
					}

var material = new THREE.MeshBasicMaterial( {  wireframe:false, vertexColors: THREE.FaceColors, overdraw: 0.5 } ); 
var cube = new THREE.Mesh( geometry, material );
var geometry1 = new THREE.PlaneBufferGeometry( 6.3, 6.3, 60 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );
scene.add(  p);
plane1 = new THREE.Mesh( geometry1, material1 );
scene.add(  o);
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
		
	lado=document.getElementById('lado').value;

	if (lado!=0 && lado<=3.5) {
		renderer.setSize( 0, 0); 
		lado_padrao=lado;
		Int();
		}

	var area_base=lado*lado;
	var area_lateral=4*lado*lado;
	var area_total=area_base+area_lateral;
	var volume=Math.pow(lado,3);
	var diagonal_cubo=lado*Math.sqrt(3);
	var diagonal_face=lado*Math.sqrt(2);
	document.getElementById('area_base').innerHTML=area_base.toFixed(2);
	document.getElementById('area_lateral').innerHTML=area_lateral.toFixed(2);
	document.getElementById('area_total').innerHTML=area_total.toFixed(2);
	document.getElementById('volume').innerHTML=volume.toFixed(2);
	document.getElementById('diagonal_cubo').innerHTML=diagonal_cubo.toFixed(2);
	document.getElementById('diagonal_face').innerHTML=diagonal_face.toFixed(2);
        });

bt_pronto.addEventListener('click', function () {
		
	lado=document.getElementById('lado').value;

	if (lado!=0 && lado<=3.5) {
		renderer.setSize( 0, 0); 
		lado_padrao=lado;
		Int();
		}

	var area_base=lado*lado;
	var area_lateral=4*lado*lado;
	var area_total=area_base+area_lateral;
	var volume=Math.pow(lado,3);
	var diagonal_cubo=lado*Math.sqrt(3);
	var diagonal_face=lado*Math.sqrt(2);
	document.getElementById('area_base').innerHTML=area_base.toFixed(2);
	document.getElementById('area_lateral').innerHTML=area_lateral.toFixed(2);
	document.getElementById('area_total').innerHTML=area_total.toFixed(2);
	document.getElementById('volume').innerHTML=volume.toFixed(2);
	document.getElementById('diagonal_cubo').innerHTML=diagonal_cubo.toFixed(2);
	document.getElementById('diagonal_face').innerHTML=diagonal_face.toFixed(2);
        });



function Start() {
    document.getElementById('lado').value=2.5;
    lado=document.getElementById('lado').value;
    var area_base=lado*lado;
	var area_lateral=4*lado*lado;
	var area_total=area_base+area_lateral;
	var volume=Math.pow(lado,3);
	var diagonal_cubo=lado*Math.sqrt(3);
	var diagonal_face=lado*Math.sqrt(2);
	document.getElementById('area_base').innerHTML=area_base.toFixed(2);
	document.getElementById('area_lateral').innerHTML=area_lateral.toFixed(2);
	document.getElementById('area_total').innerHTML=area_total.toFixed(2);
	document.getElementById('volume').innerHTML=volume.toFixed(2);
	document.getElementById('diagonal_cubo').innerHTML=diagonal_cubo.toFixed(2);
	document.getElementById('diagonal_face').innerHTML=diagonal_face.toFixed(2);
}


bt_corte.addEventListener('click', function () {
		
	qtd++;	
		if(qtd==1){
			p=null;
			o=null;	
			document.getElementById('corte').innerHTML = "Sem corte";
			document.getElementById('bt-pronto3').className="btn btn-success";
			an=0.003;
		}

		if(qtd==2){
			p=plane;
			o=null;
			document.getElementById('corte').innerHTML = "Longitudinal";
			document.getElementById('bt-pronto3').className="btn btn-danger";
			an=0;
			qtd=0;
		}
		renderer.setSize( 0, 0); 
			
			
		Int();
        });

