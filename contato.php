
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">


      <style type="text/css">
        #text1{

          font-family: 'Advent Pro', sans-serif;
        }

        #butt{
           width: 180px;
        }

        nav{

          padding-left: 15%;
          padding-right: 15%;
        }
        .painel{
          width: 100%;
          height: 300px;
        }
        .pan1{
          border-left: 1px solid black;
          margin-bottom: 2%;
        }


      </style>

    <title>SideForm</title>


  </head>

  <body >
    <!-- Navbar do topo-->

    <nav class="blue ">
      <div class="nav-wrapper nav-fixed">
        <a href="index.php" class="brand-logo">&nbsp;SideForm</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sobre.php">Quem somos</a></li>
          <li><a href="contato.php">Contato</a></li>
          <li><a id="but">Ajuda</a></li>
        </ul>
      </div>
    </nav>


      <!--Texto de Bem vindo-->
    <div class="container"  style="margin-top:5%;width:40%;">
      <br>
      <h5 align="center" class="flow-text">Formulário de contato</h5>
      <br>
      <form method="post">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input type="text" id="nome" class="autocomplete" required>
            <label for="nome">Nome</label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input type="email" id="email" class="autocomplete" required>
            <label for="email">E-mail</label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">smartphone</i>
            <input type="tel" id="tel" class="autocomplete" required>
            <label for="tel">Telefone</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea id="textarea1" class="materialize-textarea" required maxlength="200" data-length="120"></textarea>
            <label for="textarea1">Textarea</label>
          </div>
          <br>
          <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
            <i class="material-icons right">send</i>
          </button>
      </form>
    </div>


      <script>

    //  $(document).ready(function() {
          //$('input#input_text, textarea#textarea1').characterCounter();
      //  });
      </script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
  </body>
</html>
