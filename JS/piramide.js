
var bt_gerar=document.getElementById('bt-gerar');
var bt_corte=document.getElementById('bt-corte');
var altura=5;
var nlados=4;
var renderer;
var valorlado=2.5;
var plano=null;
var qtd=1;

function Int() {
	// body...

var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 43, 1,1, 1000 ); 
renderer = new THREE.WebGLRenderer({antilias:true}); 
var show=document.getElementById('geometria');
renderer.setSize( 576, 576); 
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );
show.appendChild( renderer.domElement ); 
renderer.setClearColor(0x4682B4);
controls = new THREE.OrbitControls( camera, renderer.domElement );
var geometry = new THREE.ConeBufferGeometry( valorlado,altura, nlados );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
controls.enableZoom = false;
//corte da figura
var geometry1 = new THREE.PlaneBufferGeometry( 7.5, 7.5, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0xfffff0, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry1, material1 );
scene.add( plano);

var material = new THREE.MeshBasicMaterial( {  color:0x6495ED} ); 
var piramide = new THREE.Mesh( geometry, material );

scene.add( piramide ); 
camera.position.z =14; 
plane.rotation.x=1.55;

animate = function () { 
	requestAnimationFrame( animate ); 
	renderer.render(scene, camera); }; 
	animate(); 
}

Int(); 

	bt_gerar.addEventListener('click', function () {

		altura=document.getElementById('altura').value;
		valorlado=document.getElementById('valorlado').value;
		nlados=document.getElementById('nlados').value;

		if (altura>2 && altura<=7.5 && valorlado>2 && valorlado<=5 && nlados>=3 && nlados<=11) {
			renderer.setSize( 0, 0); 
			Int();	
		}	
		
		calculos(nlados,valorlado,altura);

			
	        });



	window.onload = function(){
		document.getElementById("nlados").value=nlados;
		document.getElementById("altura").value=altura;
		document.getElementById("valorlado").value=valorlado;
		calculos(nlados,valorlado,altura);

		}

	function calculos(nlados,valorlado,altura) {
		var apotema_base=valorlado/(2*Math.tan((180/nlados)*Math.PI/180));
		var apotema_lateral=Math.sqrt(Math.pow(apotema_base,2)+Math.pow(altura,2));
		var area_base=(nlados*valorlado*valorlado)/(4*Math.tan((180/nlados)*Math.PI/180));
		var area_lateral=((valorlado*apotema_lateral*nlados)/2);
		var volume=(area_base*altura)/3;
		var area_total=area_base+area_lateral;
	    document.getElementById("apotema").innerHTML=apotema_lateral.toFixed(2);
	    document.getElementById("area_base").innerHTML=area_base.toFixed(2);
	    document.getElementById("area_lateral").innerHTML=area_lateral.toFixed(2);
	    document.getElementById("area_total").innerHTML=area_total.toFixed(2);
	    document.getElementById("volume").innerHTML=volume.toFixed(2);
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