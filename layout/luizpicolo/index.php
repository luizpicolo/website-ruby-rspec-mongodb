<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Luiz Picolo - Desenvolvimento Web</title>

        <meta property="og:title" content="TITULO POSTAGEM FACE"/>
        <meta property="og:image" content="http://luizpicolo.com.br/fb_logo.jpg" />
        <meta property="og:site_name" content="Luiz Picolo - Desenvolvimento Web"/>
        <meta property="og:description" content="DESCRICAO POSTAGEM FACE"/>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="assets/css/normalize.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <!--<script src="assets/js/vendor/modernizr-2.6.2.min.js"></script>-->
        <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="centro">
            <!-- CABEÇALHO -->
            <header id="topo">
                <hgroup id="logomarca">
					<a href="/index.php">
                    	<h1>Luiz Picolo</h1>
						<!--<h1><img src="assets/img/logoPicolo.png"></h1>-->
                    	<h2>Desenvolvimento Web</h2>
					</a>
                </hgroup> 
                <nav id="nav-principal">
                    <h1>Menu Principal</h1>
                    <ul>
                        <li><a href="?pag=inicio">Início</a></li>
                        <li><a href="?pag=quem-sou">Quem Sou</a></li>
                        <li><a href="?pag=portfolio">PortFolio</a></li>
                        <li><a href="https://vimeo.com/user6220071/videos" target="blank"><b>Video Aulas</b></a></li>
                        <li><a href="?pag=publicacoes">Publicações</a></li>
                        <li><a href="?pag=contato">Contato</a></li>
                    </ul>
                </nav>
                <!--
				<div id="banner-forum">
                    <a href="http://www.phpconference.com.br/" target="blank"><img src="assets/img/banner.jpg" width="100%"></a> 
                </div>
				-->
            </header>

            <!-- CONTEÚDO PRINCIPAL -->
            <main>
                <?php
                    !isset($_GET["pag"]) ? include("inc/inicio.php") : include("inc/" . $_GET["pag"] . ".php");
                ?>
            </main>

            <!-- RODAPÉ -->
            <footer>
                <p>
					©2014 Luiz Picolo - luizpicolo@luizpicolo.com.br<br>
					<a href="http://www.fb.com/luizpicolo"><img src="assets/img/fb.png"></a>
					<a href="http://www.twitter.com/luizpicolo_"><img src="assets/img/twitter.png"></a>
					<a href="http://vimeo.com/user6220071/videos"><img src="assets/img/vimeo.png"></a>
				</p>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq = [['_setAccount', 'UA-21765459-1'], ['_trackPageview']];
            (function(d, t) {
                var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
                g.src = '//www.google-analytics.com/ga.js';
                s.parentNode.insertBefore(g, s)
            }(document, 'script'));
        </script>
    </body>
</html>
