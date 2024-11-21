<script lang="ts">
    // Importaciones CSS

    import '$lib/css/style.css';
    import '$lib/css/todo.css';
    import '$lib/animate/animate.min.css';
    import '$lib/lightbox/css/lightbox.min.css';

    // Importaciones de imágenes
    import img7 from '$lib/img/img7.png';
    import logo from '$lib/img/logomariposa.png';
    import apoyoPsicologico from '$lib/img/apoyo-psicol-gico-adaptado-a-estudiantes.png';
    import citaPsicologa from '$lib/img/una-persona-en-una-cita-con-su-psicologa--servicio.jpg';


</script>

<style>
    /* Spinner Start */
/* Spinner */
#spinner {
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease-out, visibility 0s linear .5s;
    z-index: 99999;
}

#spinner.show {
    transition: opacity .5s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}
/* Spinner End */

.back-to-top {
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: flex;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    z-index: 99;
}

/* Button Start */
.btn {
    font-weight: 600;
    transition: .5s;
}

.btn-square {
    width: 32px;
    height: 32px;
}

.btn-sm-square {
    width: 34px;
    height: 34px;
}

.btn-md-square {
    width: 44px;
    height: 44px;
}

.btn-lg-square {
    width: 56px;
    height: 56px;
}

.btn-square,
.btn-sm-square,
.btn-md-square,
.btn-lg-square {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50%;
}

.btn.btn-primary {
    background: var(--bs-primary) !important;
    color: var(--bs-white) !important;
    font-weight: 400;
    transition: 0.10s;
}

.btn.btn-primary:hover {
    background: var(--bs-white) !important;
    color: var(--bs-primary) !important;
}

.btn.btn-light {
    background: var(--bs-light) !important;
    color: var(--bs-primary) !important;
    font-weight: 400;
    transition: 0.5s;
}

.btn.btn-light:hover {
    background: var(--bs-primary) !important;
    color: var(--bs-light) !important;
}


.RotateMoveLeft {
    position: relative;
    animation: RotateMoveLeft 10s linear infinite;
}

.RotateMoveRight {
    position: relative;
    animation: RotateMoveLeft 10s linear infinite;
}

@keyframes RotateMoveLeft {
    0%   {left: 0px;}
    50%   {left: 40px;}
    100%  {left: 0px;}
}

@keyframes RotateMoveRight {
    0%   {right: 0px;}
    50%   {right: 40px;}
    100%  {right: 0px;}
}


/* Navbar */
.navbar-light .navbar-nav .nav-link {
    margin-right: 25px;
    padding: 35px 0;
    color: var(--bs-dark) !important;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-nav .nav-link {
    padding: 20px 0;
    color: var(--dark) !important;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--bs-primary) !important;
}

.navbar-light .navbar-brand img {
    max-height: 50px;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-brand img {
    max-height: 45px;
}

.navbar .dropdown-toggle::after {
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    vertical-align: middle;
    margin-left: 8px;
}

@media (min-width: 1200px) {
    .navbar .nav-item .dropdown-menu {
        display: block;
        visibility: hidden;
        top: 100%;
        transform: rotateX(-75deg);
        transform-origin: 0% 0%;
        border: 0;
        border-radius: 10px;
        transition: .5s;
        opacity: 0;
    }
}

.dropdown .dropdown-menu a:hover {
    background: var(--bs-primary);
    color: var(--bs-white);
}

.navbar .nav-item:hover .dropdown-menu {
    transform: rotateX(0deg);
    visibility: visible;
    background: var(--bs-light) !important;
    transition: .5s;
    opacity: 1;
}

.collapse.navbar-collapse {
    transition: 0.5s;
}

@media (max-width: 992px) {
    nav.bg-transparent {
        position: absolute;
        width: 100%;
        background: transparent !important;
    }

    .navbar.navbar-expand-lg button span {
        position: relative;
        z-index: 99;
    }

    .navbar {
        position: relative;
        background: var(--bs-light);
        z-index: 2;
    }

    .sticky-top.navbar-light {
        position: relative;
        background: var(--bs-white) !important;
        padding: 0 20px 20px 20px !important;
    }

    .sticky-top.navbar-light {
        background: transparent;
    }

    nav.navbar {
        padding: 0 30px 30px 0;
    }

    .navbar.navbar-expand-lg .navbar-toggler {
        padding: 10px 20px;
        border: 1px solid var(--bs-primary);
        color: var(--bs-primary);
    }

    .navbar-light .navbar-collapse {
        margin-top: 15px;
        border-top: 1px solid #DDDDDD;
    }

    .navbar-light .navbar-nav .nav-link,
    .sticky-top.navbar-light .navbar-nav .nav-link {
        padding: 10px 0;
        margin-left: 0;
        color: var(--bs-dark) !important;
    }


    .navbar-light .navbar-brand img {
        max-height: 45;
    }

    .hero-header {
        margin-top: -100px !important;
    }
}

@media (min-width: 992px) {
    .navbar-light {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: transparent !important;
        z-index: 999;
    }
    
    .sticky-top.navbar-light {
        position: fixed;
        background: var(--bs-light) !important;
    }
}
/* Navbar End */

/* Single Page Hero Header Start */
.bg-breadcrumb {
    position: relative;
    overflow: hidden;
    background: linear-gradient(rgba(102, 16, 242, 0.05), rgba(102, 16, 242, 0.05));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 150px 0 60px 0;
    margin-bottom: 6rem;
    transition: 0.5s;
}

.bg-breadcrumb::after {
    content: "";
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 300px;
    border: 80px solid #f747800d;
    background: transparent;
    animation: RotateMoveSingle 5s linear infinite;
    z-index: -1;
}

.bg-breadcrumb .breadcrumb {
    position: relative;
    z-index: 2;
}


@keyframes RotateMoveSingle {
    0% {
        -webkit-transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
        transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
    }
      100% {
        -webkit-transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
        transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
    }

    0% {bottom: 0px;}
    50%   {left: -10px;}
    75%   {bottom: 10%;}
    100%  {bottom: 0px;}
}

.bg-breadcrumb::before {
    content: "";
    position: absolute;
    top: -15%;
    right: -10%;
    width: 600px;
    height: 600px;
    border-radius: 300px;
    border: 80px solid rgba(247, 71, 128, 0.04);
    background: transparent;
    animation: RotateMoveSingle 5s linear infinite;
    z-index: -1;
}

@keyframes RotateMoveSingle {
    0% {
        -webkit-transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
        transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
    }
      100% {
        -webkit-transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
        transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
    }

    0% {top: 0px;}
    50%   {top: 10%;}
    100%  {top: 0px;}
}

@media (max-width: 992px) {
    .bg-breadcrumb {
        padding-top: 100px !important;
    }
}

.bg-breadcrumb .breadcrumb-item a {
    color: var(--bs-dark) !important;
}


.breadcrumb-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.breadcrumb-animation li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(102, 16, 242, 0.07);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.breadcrumb-animation li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.breadcrumb-animation li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.breadcrumb-animation li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.breadcrumb-animation li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.breadcrumb-animation li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.breadcrumb-animation li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.breadcrumb-animation li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.breadcrumb-animation li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.breadcrumb-animation li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.breadcrumb-animation li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
/* Single Page Hero Header End */


/* Hearo Header Start */
.header::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: var(--bs-light);
    border-radius: 22% 78% 33% 67% / 32% 0% 100% 68%;
    animation: bgMove 5s linear infinite;
    z-index: -1;
}

@keyframes bgMove {
    0%   {right: 0px;}
    50%   {right: 20px;}
    100%  {right: 0px;}
}

.header::before {
    content: "";
    position: absolute;
    bottom: -9%;
    left: -7%;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    border: 30px solid rgba(247, 71, 128, 0.05);
    background: transparent;
    animation: RotateMoveHeader 5s linear infinite;
    z-index: -1;

}

@keyframes RotateMoveHeader {
    0% {
        -webkit-transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
        transform: rotateZ(0deg) rotate(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
    }
      100% {
        -webkit-transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
        transform: rotateZ(360deg) rotate(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
    }


    0% {bottom: 0px;}
    50%   {left: -10px;}
    75%   {bottom: 9%;}
    100%  {bottom: 0px;}
}

.hero-header {
    padding-top: 160px;
    padding-bottom: 100px;
    position: relative;
}

.hero-header::after {
    content: "";
    position: absolute;
    left: 100px;
    bottom: 100px;
    width: 58px;
    height: 50px;
    background: url(../img/crea-una-imagen-de-una-chica-sentada-reflexionando\ \(1\)) center center no-repeat;
    animation: RotateMoveSty-3 45s linear infinite;
    transition: 0.5s;
    z-index: -1;
    
}

@keyframes RotateMoveSty-3 {
    0%   {left: 100px;}
    40%   {bottom: -0px;}
    50%   {left: 700px;}
    70%   {bottom: 500px;}
    80%   {left: 400px;}
    95%   {bottom: -0px;}
    100%  {left: 100px;}
}

.hero-header::before {
    content: "";
    position: absolute;
    left: 100px;
    bottom: 100px;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: 30px solid rgba(102, 16, 242, 0.05);
    background: transparent;
    animation: RotateMoveSty-4 45s linear infinite;
    transition: 0.5s;
    z-index: -1;
    
}

@keyframes RotateMoveSty-4 {
    0%   {left: 100px;}
    40%   {bottom: -0px;}
    50%   {left: 700px;}
    70%   {bottom: 500px;}
    80%   {left: 400px;}
    95%   {bottom: -0px;}
    100%  {left: 100px;}
}


.hero-header .rotate-img {
    position: absolute;
    top: 70px;
    left: 20px;
}

.hero-header .rotate-img .rotate-sty-2 {
    position: absolute;
    top: 100px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border: 5px solid rgba(247, 71, 128, 0.1);
    background: transparent;
    animation: RotateMoveSty-2 45s linear infinite;
    transition: 0.5s;

}

@keyframes RotateMoveSty-2 {
    0%   {left: 0px;}
    40%   {top: -30px;}
    50%   {left: 500px;}
    70%   {top: 200px;}
    80%   {left: 100px;}
    95%   {top: -30px;}
    100%  {left: 0px;}
}

.hero-header .rotate-img img {
    position: relative;
    animation: RotateMove 30s linear infinite;
    z-index: -1;
}

@keyframes RotateMove {
    0%   {left: 0px;}
    50%   {left: 200px;}
    100%  {left: 0px;}
}


@media (max-width: 992px) {
    .hero-header {
        padding-top: 280px;
        
    }

    .hero-header .rotate-img img {
        margin-top: 100px;
    }
   
}
/* Hero Header End */


/* Service Start */
.service .service-item {
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.1);
}

.service .service-item,
.service .service-item .service-icon,
.service .service-item a {
    transition: 0.5s;
}

.service .service-item:hover {
    background: rgba(102, 16, 242, 0.09);
    border: 1px ;
}


.service .service-item:hover .service-icon,
.service .service-item:hover a {
    background: var(--bs-white) !important;
}

.service .service-item:hover a:hover {
    background: var(--bs-primary) !important;
    color: var(--bs-white);
}

/* Service End */


/* Features Start */
.feature .feature-img {
    background: var(--bs-light);
    border-radius: 58% 42% 21% 79% / 30% 29% 71% 70%;
}
/* Features End */


/* Pricing Start */
.price .price-item {
    position: relative;
    overflow: hidden;
    transition: 0.5s;
}

.price .price-item:hover {
    background: var(--bs-white) !important;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
}

.price .price-item .pice-item-offer {
    position: absolute;
    width: 200px;
    height: 110px;
    top: -45px;
    right: -80px;
    background: var(--bs-primary) !important;
    color: var(--bs-white);
    transform: rotate(42deg);
    display: flex;
    align-items: end;
    justify-content: center;
    padding-bottom: 10px;
}
/* Pricing End */


/* Blog Start */
.blog .blog-item {
    border-radius: 10px;
}

.blog .blog-item .blog-img {
    position: relative;
    overflow: hidden;
    background: rgba(102, 16, 242, 0.2);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.blog .blog-item .blog-img .blog-info {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: rgba(102, 16, 242, 0.2);
    color: var(--bs-white) !important;
    display: flex;
    align-items: end;
    justify-content: space-between;
    transition: 0.5s;
}

.blog .blog-item .blog-img:hover .blog-info {
    background: rgba(0, 0, 0, .4);
}


.blog .blog-item .blog-content {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.blog .blog-item .blog-img img {
    transition: 0.5s;
}

.blog .blog-item .blog-img:hover img {
    transform: scale(1.3);
}
/* Blog End */


/* Contact Start */
.contact {
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
}

.contact::after {
    content: "";
    position: absolute;
    top: 10%;
    left: -1%;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    border: 60px solid rgba(102, 16, 242, 0.05);
    background: transparent;
    animation: ContactMoveLeft 50s linear infinite;
    z-index: 1;
}

@keyframes ContactMoveLeft {
    0%   {left: 0px;}
    25%   {top: 100px;}
    50%   {left: 90%;}
    75%   {top: 80%;}
    100%  {left: 0px;}
}

.contact::before {
    content: "";
    position: absolute;
    top: 10%;
    right: -1%;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    border: 60px solid rgba(102, 16, 242, 0.05);
    background: transparent;
    animation: ContactMoveRight 50s linear infinite;
    z-index: 1;
}

@keyframes ContactMoveRight {
    0%   {right: 0px;}
    25%   {top: 100px;}
    50%   {right: 90%;}
    75%   {top: 80%;}
    100%  {right: 0px;}
}
/* Contact End */


/* Footer Start */
.footer {
    background: linear-gradient(rgba(102, 16, 242, 0.05), rgba(102, 16, 242, 0.05));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.footer .footer-item a {
    line-height: 35px;
    color: var(--bs-dark);
    transition: 0.5s;
}

.footer .footer-item p {
    line-height: 35px;
}

.footer .footer-item a:hover {
    letter-spacing: 2px;
    color: var(--bs-primary);
}

/* Footer End */

/* copyright Start */
.copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: var(--bs-dark) !important;
}
/* copyright end */



</style>

<svelte:head>
    <meta charset="utf-8" />
    <title>You Can Tell Me</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
        rel="stylesheet"
    />

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
    />
</svelte:head>

<!-- Spinner Start -->

<!-- Spinner End -->

<!-- Navbar & Hero Start -->
<div class="container-fluid header position-relative overflow-hidden p-0">
    <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="/index/" class="navbar-brand p-0">
            <h1 class="display-6 text-primary m-0">
                <img
                src={logo}
                alt="sapas"
                style="width: 80px; height: auto;"
            /> You can tell me
            </h1>
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-label="Toggle navigation"
        >
            <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="/index/" class="nav-item nav-link active">Inicio</a>
                <a href="/citas" class="nav-item nav-link">CITAS</a>
                <a href="/crearcitas" class="nav-item nav-link">Crear citas</a>
                <div class="nav-item dropdown">
                    <a href="#paginas" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</a>
                    <div class="dropdown-menu m-0">
                        <a href="/sobrenosotros/" class="dropdown-item active">Sobre Nosotros</a>
                        <a href="/estrategias/" class="dropdown-item">Estrategias de Manejo del Estrés</a
                        >
                        <a href="/Tecnicasderelajacion/" class="dropdown-item">Técnicas de Relajación </a>
                    </div>
                </div>
                <a href="/contacto/" class="nav-item nav-link">Contáctanos</a>
            </div>
        </div>
    </nav>

    <!-- Hero Header Start -->
    <div class="hero-header overflow-hidden px-5">
        <div class="rotate-img">
            <img src="img/sty-1.png" class="img-fluid w-100" alt="" />
            <div class="rotate-sty-2"></div>
        </div>
        <div class="row gy-5 align-items-center">
            <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                <h1 class="display-4 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">
                    Enfrenta los Retos Estudiantiles con Confianza
                </h1>
                <p class="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
                    Aprende a gestionar la ansiedad y el estrés académico con técnicas basadas en psicología.
                    Con nuestro apoyo, podrás enfrentar los desafíos estudiantiles con confianza y mejorar tu
                    rendimiento.
                </p>
                <a
                    href="/estrategias/"
                    class="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.7s">Explora Recursos</a
                >
            </div>
            <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <img src={img7} class="img-fluid w-100 h-100" alt="" />
            </div>
        </div>
    </div>
    <!-- Hero Header End -->
</div>
<!-- Navbar & Hero End -->

<!-- About Start -->
<div class="container-fluid overflow-hidden py-5" style="margin-top: 6rem;">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="RotateMoveLeft">
                    <img src={apoyoPsicologico} class="img-fluid w-100" alt="" />
                </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h4 class="mb-1 text-primary">Sobre Nosotros</h4>
                <h1 class="display-5 mb-4">Apoyo Psicológico Adaptado a Estudiantes</h1>
                <p class="mb-4">
                    Ofrecemos herramientas y apoyo psicológico especializado para estudiantes. Nuestro
                    objetivo es ayudarte a manejar el estrés, mejorar tu bienestar emocional y potenciar tu
                    rendimiento académico.
                </p>
                <a href="/sobrenosotros/" class="btn btn-primary rounded-pill py-3 px-5">Saber Más</a>
                <div id="spinner" class="spinner" style="display:none;"></div>
            </div>
        </div>
    </div>
</div>
<!-- About End -->

<!-- servicios inicio -->
<div class="container-fluid feature overflow-hidden py-5">
    <div class="container py-5">
        <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style="max-width: 900px;"
        >
            <h4 class="text-primary">Nuestras Características</h4>
            <h1 class="display-5 mb-4">
                Características Importantes para el Apoyo Psicológico Estudiantil
            </h1>
            <p class="mb-0">
                Descubre cómo nuestras herramientas y recursos especializados pueden ayudarte a manejar el
                estrés académico, mejorar tu bienestar emocional y lograr un equilibrio durante tus
                estudios. Nuestro enfoque está diseñado para brindarte el apoyo que necesitas en cada paso
                de tu formación.
            </p>
        </div>
        <div class="row g-4 justify-content-center text-center mb-5">
            <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div class="text-center p-4">
                    <div class="d-inline-block rounded bg-light p-4 mb-4">
                        <i class="fas fa-brain fa-5x text-secondary"></i>
                    </div>
                    <div class="feature-content">
                        <!-- svelte-ignore a11y_invalid_attribute -->
                        <a href="#apoyopsicologico" class="h4">Apoyo Psicológico <i class="fa fa-long-arrow-alt-right"></i></a>
                        <p class="mt-4 mb-0">Orientación y asesoramiento personalizado para estudiantes.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div class="text-center p-4">
                    <div class="d-inline-block rounded bg-light p-4 mb-4">
                        <i class="fas fa-medkit fa-5x text-secondary"></i>
                    </div>
                    <div class="feature-content">
                        <a href="/estrategias/" class="h4"
                            >Estrategias de Manejo del Estrés <i class="fa fa-long-arrow-alt-right"></i></a
                        >
                        <p class="mt-4 mb-0">
                            Aprende a gestionar el estrés con técnicas eficaces y prácticas.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div class="text-center rounded p-4">
                    <div class="d-inline-block rounded bg-light p-4 mb-4">
                        <i class="fas fa-spa fa-5x text-secondary"></i>
                    </div>
                    <div class="feature-content">
                        <a href="/Tecnicasderelajacion/" class="h4"
                            >Técnicas de Relajación <i class="fa fa-long-arrow-alt-right"></i></a
                        >
                        <p class="mt-4 mb-0">
                            Prácticas y herramientas para calmar la mente y reducir la ansiedad.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- servicios fin -->

    <!-- FAQ Start -->
    <div class="container-fluid FAQ bg-light overflow-hidden py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item border-0 mb-4">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button rounded-top"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseTOne"
                                >
                                    ¿Por que elejir nuestros servicios?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                class="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body my-2">
                                    <h5>¿Por que elejirnos?</h5>
                                    <p>
                                        podemos ofrecer varios beneficios significativos, especialmente si estás
                                        buscando apoyo, información o recursos para manejar desafíos, esta pagina esta
                                        dedicada a la salud mental proporcionan información basada en evidencia sobre la
                                        depresión y la ansiedad, lo que te ayuda a entender mejor estas condiciones,
                                        además ofrecemos herramientas y recursos de autoayuda, como guías, ejercicios y
                                        técnicas de manejo del estrés que puedes aplicar en tu vida diaria.
                                    </p>
                                    <p>
                                        acilitamos el acceso a profesionales de la salud mental, permitiéndote buscar
                                        terapia o asesoramiento en línea.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 mb-4">
                            <h2 class="accordion-header" id="headingTwo">
                                <button
                                    class="accordion-button collapsed rounded-top"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Conexion con profesionales
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body my-2">
                                    <h5>Servicio de Psicología Escolar</h5>
                                    <p>
                                        En la I.E,Carlos Vieco Ortiz , nos comprometemos a apoyar el bienestar emocional
                                        y académico de nuestros estudiantes a través de nuestro dedicado Servicio de
                                        Psicología Escolar. Este servicio está diseñado para ayudar a los estudiantes a
                                        enfrentar los desafíos personales y académicos, promoviendo un ambiente escolar
                                        saludable y positivo.
                                    </p>
                                    <p>
                                        Nuestro servicio de psicología contribuye significativamente al desarrollo
                                        personal y académico de los estudiantes. Ofrecemos apoyo para manejar el estrés,
                                        mejorar las habilidades sociales y fomentar la resiliencia emocional, asegurando
                                        que cada estudiante tenga las herramientas necesarias para alcanzar su máximo
                                        potencial
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0">
                            <h2 class="accordion-header" id="headingThree">
                                <button
                                    class="accordion-button collapsed rounded-top"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    ¿Que pasa con su información?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body my-2">
                                    <h5>Protección de Datos</h5>
                                    <p>
                                        limitaremos el acceso a la información de las citas solo a las personas que
                                        realmente lo necesiten, como el psicólogo y el personal administrativo
                                        autorizado, además de tener el consentimiento explícito de los usuarios para
                                        recopilar y utilizar su información personal. Proporcionar una información clara
                                        sobre cómo se manejarán sus datos.
                                    </p>
                                    <p>
                                        Capacitar a nuestro personal sobre la importancia de la privacidad y la
                                        seguridad de los datos, y sobre cómo manejar la información de manera segura y
                                        confidencial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                    <div class="FAQ-img RotateMoveRight rounded">
                        <img src={citaPsicologa} class="img-fluid w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- FAQ End -->

    <!-- aca va lo que les mande el 9/10/2024 alas9:26-->

    <!-- Footer Inicio -->
<div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div class="container py-5">
      <div class="row g-5 justify-content-center text-center">
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="text-dark mb-4">Proyecto</h4>
            <a href="/servicios/">Nuestros Servicios</a>
            <a href="/sobrenosotros/">Sobre Nosotros</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Enlaces Rápidos</h4>
            <a href="/contacto/">Contáctanos</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Servicios</h4>
            <a href="/estrategias/">Estrategias de Manejo del Estrés</a>
            <a href="/Tecnicasderelajacion/">Técnicas de Relajación</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3">
          <div class="footer-item d-flex flex-column">
            <h4 class="mb-4 text-dark">Información de Contacto</h4>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <a href="/contacto/"><i class="fas fa-envelope me-2"></i>  psicologíaonce@gmail.com</a>
            <div class="d-flex justify-content-center align-items-center">
              <i class="fas fa-share fa-2x text-secondary me-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer Fin -->
  
  <!-- Copyright Start -->
  <div class="container-fluid copyright py-4">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-md-6 text-center text-md-start mb-md-0">
          <span class="text-white"
            ><a href="1"><i class="fas fa-copyright text-light me-2"></i>You Can Tell Me</a>, All
            rights reserved.</span
          >
        </div>
        <div class="col-md-6 text-center text-md-end text-white">
          <!--/*** This website was lovingly designed and crafted for sharing insights. ***/-->
          <!--/*** If you want to collaborate or customize this site, feel free to get in touch. ***/-->
          Designed by <a class="border-bottom" href="1">You Can Tell Me Team</a> | Distributed with care.
        </div>
      </div>
    </div>
  </div>
  <!-- Copyright End -->
  
  <!-- Back to Top -->
  
  <!-- svelte-ignore a11y_invalid_attribute -->
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
    <style>
      :global(body) {
        font-family: 'Rubik', sans-serif;
      }
    
      .bg-breadcrumb {
        background-color: #f8f9fa;
      }
    
      .breadcrumb-animation {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
      }
    
      .breadcrumb-animation li {
        width: 10px;
        height: 10px;
        background-color: #007bff;
        margin: 0 5px;
        border-radius: 50%;
        animation: pulse 1.5s infinite;
      }
    
      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
        }
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
        }
      }
    
      .footer {
        background-color: #f8f9fa;
      }
    
      .copyright {
        background-color: black;
      }
    
      .back-to-top {
        position: fixed;
        bottom: 25px;
        right: 25px;
        display: none;
      }
    
      .back-to-top:active {
    display: block !important;
  }
  
  
    </style>
</div>  