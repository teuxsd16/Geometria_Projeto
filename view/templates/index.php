<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro" rel="stylesheet">
    <style type="text/css">
      #text1{
        font-family: 'Advent Pro', sans-serif;
      }
      body{
        background-size: cover;
        background-position: center;
      }
      nav{
        padding-left: 15%;
        padding-right: 15%;
      }
    </style>

    <title>SideForm</title>

  </head>

  <?php

    if($_SERVER['SERVER_ADDR'] == '::1'){
      $caminhoServidor = 'http://' . $_SERVER['SERVER_NAME'] . '/Geometria_Projeto';
    }else{
      $caminhoServidor = 'http://' . $_SERVER['SERVER_ADDR'] . '/Geometria_Projeto';
    }

  ?>

  <body background="<?php echo $caminhoServidor . '/view/img/cover.jpg'; ?>">

    <!-- Navbar do topo-->
    <nav class="blue nav-extended">
      <div class="nav-wrapper">
        <a href="index.php" class="brand-logo">&nbsp;SideForm</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sobre.php">Quem somos</a></li>
          <li><a href="contato.php">Contato</a></li>
          <li><a id="ajuda" onclick="$('.tap-target').tapTarget('open')">Ajuda</a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav blue" id="mobile-demo">
      <li><a href="sobre.php">Quem somos</a></li>
      <li><a href="contato.php">Contato</a></li>
      <li><a id="ajuda">Ajuda</a></li>
    </ul>

    <!--Texto de Bem vindo-->
    <div class="container"  style="margin-top:10%; margin-bottom:5%;">
      <h2 class="header center white-text" id="text1">Bem vindo</h2>
      <div class="row center">
        <h5 class="header col s12 light">Uma maneira mais prática de aprender sobre sólidos geométricos</h5>
      </div>
      <div class="row center">
        <a href="" id="download-button" class="btn-large waves-effect waves-light ">Vamos estudar</a>
      </div>
      <br>
    </div>

    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row white">

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="large material-icons">access_time</i>
              </h2>
              <h5 class="center">Aprenda mais rápido</h5>
              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="large material-icons">aspect_ratio</i>
              </h2>
              <h5 class="center">Brinque com os objetos</h5>
              <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text">
                <i class="large material-icons">settings</i>
              </h2>
              <h5 class="center">Configure a forma que desejar</h5>
              <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="fixed-action-btn">
      <a id="menu" class="waves-effect waves-light btn-large btn-floating" onclick="$('.tap-target').tapTarget('open')">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <div class="tap-target" data-target="menu">
      <div class="tap-target-content">
        <h5>Title</h5>
        <p>A bunch of text</p>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    <script type="text/javascript">

      $(document).ready(function(){
        $('.sidenav').sidenav();
        $('.tap-target').tapTarget();
      });

    </script>
  </body>
</html>
