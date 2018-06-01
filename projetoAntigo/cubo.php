<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


	<title>Cubo</title>
  <style> 
  	body {

  		margin: 0;
  		padding: 0; 
  		
  	} 

    li{
    	list-style: none;
    }
  	

  	#lista{
  		font-size: 20pt;
      margin-bottom: 18px;
  	}

  	 #geometria{
  	 
  	 	padding:0px;
  	 	background-color:#4682B4; 
  	 	border-right: 5px solid white;

  	 }

  	 #caixa-2{
  	 
  	 	
  	 	border-left: 5px solid white;
  	 	padding-top: 30px;
  	 }

  	  #formulas{
  	 
  	 	border: 3px solid white;
  	 	padding: 10px;

  	 }

     #input{
     
      padding-right: 50%;
      padding-left: 10%;


     }

  	 .row{
  	 	margin-top: 100px;
  	 	border: 7px solid black;
  	 	border-radius: 5px;
  	 
  	 	 	font-family: Arial;
  	 	
  	 }

  




    </style> 

  	<script src="js/three.min.js"></script>
  	<script src="js/OrbitControls.js"></script>
  	<script src="js/ParametricGeometries.js"></script>

	
</head>

<body  onpageshow="Start()">
  <!-- Navbar do topo-->
  <nav class="navbar navbar-dark bg-dark">
     <div class="container">
        <a class="navbar-brand" href="#">SideForm</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ajuda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Loja</a>
            </li>

          </ul>
          <form class="form-inline my-2 my-md-0">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search">
          </form>
        </div>
      </div>
  </nav>
  <!--Caixa da geometria e das formulas-->
  <div class="container">
    <div class="row">
      <div id="geometria" class="col-sm">
        
      </div>
      <div id="caixa-2" class="col-sm">
         <h1 align="center" class="display-4">Cubo</h1>
          
         <div id="formulas">
            <h2 align="left" class="display-5"><span class="fa fa-pencil"></span>Fórmulas:</h2>
            <ul id="lista">
            	
            	<li><span class="fa fa-arrow-right"></span> A<sub>B</sub> = <span id="area_base"></span> cm<sup>2</sup></li>
            	<li><span class="fa fa-arrow-right"></span> A<sub>L</sub> = <span id="area_lateral"> </span> cm<sup>2</sup></li>
            	<li><span class="fa fa-arrow-right"></span> A<sub>T</sub> = <span id="area_total"></span> cm<sup>2</sup></li>
            	<li><span class="fa fa-arrow-right"></span> V = <span id="volume"></span> cm<sup>3</sup></li>
            	<li><span class="fa fa-arrow-right"></span> D<sub>Cubo</sub> = <span id="diagonal_cubo"></span> cm</li>
            	<li><span class="fa fa-arrow-right"></span> D<sub>Face</sub> = <span id="diagonal_face"></span> cm</li>
            </ul>
           
            <div id="input" class="container">
              <div  class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Valor do Lado</span>
                </div>
                <input  type="number" max="10" min="1" step="0.1" class="form-control" id="lado" aria-describedby="basic-addon3">
              </div>
            </div>

          <button style="margin-left:10%" id="bt-pronto" type="button" class="btn btn-success">Gerar</button>
           <button style="margin-left:3%" id="bt-corte" type="button" class="btn btn-dark">Corte</button>
          <div style="margin-left:10%; margin-top: 10px" class="alert alert-primary" role="alert">
            Valor padrão é 2, pode-se aumentar de 2-5.
          </div>
        </div>
      </div> 
    </div>  
  </div>

     <!-- Navbar do fundo-->
  <nav  class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Informações </a>
        <a class="nav-item nav-link" href="#">Contato </a>
        <a class="nav-item nav-link" href="#">Empresa </a>
        <a class="nav-item nav-link" href="#">Patrocionio </a>
         <a class="nav-item nav-link" href="#">Aplicações </a>
      </div>
    </div>
  </nav>
  <script src="js/cubo.js"></script>


  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
</body>
</html>