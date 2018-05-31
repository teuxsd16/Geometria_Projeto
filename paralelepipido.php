<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


	<title>Paralelepipedo</title>
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

<body >
  <!-- Navbar do topo-->
  <nav class="navbar navbar-dark bg-dark">
       <div class="container">
            <a class="navbar-brand" href="index.php">SideForm</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="material.php">Conteúdo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="exercicio.php">Exercicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="sobre.php">Sobre</a>
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
         <h1 align="center" class="display-4">Paralelepipedo</h1>

         <div id="formulas">
            <h2 align="left" class="display-5"><span class="fa fa-pencil"></span>Fórmulas:</h2>
            <ul id="lista">

            	<li><span class="fa fa-arrow-right"></span> A<sub>F</sub> = A.L</li>
            	<li><span class="fa fa-arrow-right"></span> A<sub>L</sub> = 4.A.L</li>
            	<li><span class="fa fa-arrow-right"></span> A<sub>T</sub> = 6.A.L</li>
            	<li><span class="fa fa-arrow-right"></span> V = A.L.C</sup></li>
            </ul>

            <div id="input" class="container">
              <div  class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Altura</span>
                </div>
                <input  type="text" class="form-control" id="altura" aria-describedby="basic-addon3">
              </div>
              <div  class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Largura</span>
                </div>
                <input  type="text" class="form-control" id="largura" aria-describedby="basic-addon3">
              </div>
              <div  class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Comprimento</span>
                </div>
                <input  type="text" class="form-control" id="comprimento" aria-describedby="basic-addon3">
              </div>
            </div>

          <button style="margin-left:10%" id="bt-pronto" type="button" class="btn btn-success">Pronto</button>
          <div style="margin-left:10%; margin-top: 10px" class="alert alert-primary" role="alert">
            Valor padrão é 2, pode-se aumentar de 2-5.
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="js/paralelepipedo.js"></script>


  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
</body>
</html>
