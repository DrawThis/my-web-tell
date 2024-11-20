<script lang="ts">
  import { onMount } from 'svelte';


  import '$lib/css/style.css';
  import '$lib/css/todo.css';
  import '$lib/animate/animate.min.css';
  import '$lib/animate/animate.css'
  import '$lib/lightbox/css/lightbox.min.css';

  import Meditacion from '$lib/img/meditacion guiada.png';
  import logo from '$lib/img/logomariposa.png';
   </script>

<svelte:head>
  <meta charset="utf-8" />
  <title>You can tell me</title>
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



<!-- Navbar & Hero Start -->
<div class="container-fluid p-0">
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
    <a href="/index/" class="navbar-brand p-0">
      <h1 class="display-6 text-primary m-0">
        <img
        src={logo}
        alt="sapas"
        style="width: 80px; height: auto;"
    /> You can tell me
      </h1>
    </a>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="fa fa-bars"></span>
    </button>
    <div class="navbar-nav ms-auto py-0">
      <a href="/index/" class="nav-item nav-link active">Inicio</a>
      <a href="/citas/" class="nav-item nav-link">CITAS</a>
      <a href="/crearcitas/" class="nav-item nav-link">Crear citas</a>
      <div class="nav-item dropdown">
        <a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Paginas</a>
        <div class="dropdown-menu m-0">
          <a href="/sobrenosotros/" class="dropdown-item active">Sobre Nosotros</a>
          <a href="/estrategias/" class="dropdown-item">Estrategias de Manejo del Estrés</a>
          <a href="/Tecnicasderelajacion/" class="dropdown-item">Técnicas de Relajación </a>
        </div>
      </div>
      <a href="/contacto/" class="nav-item nav-link">Contáctanos</a>
    </div>
  </nav>
</div>
<!-- Navbar & Hero End -->

<!-- Header Start -->
<div class="container-fluid bg-breadcrumb">
  <ul class="breadcrumb-animation">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="container text-center py-5" style="max-width: 900px;">
    <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
      Estrategias de manejo del estrés
    </h3>
    <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
      <li class="breadcrumb-item"><a href="7index/">Inicio</a></li>
      <li class="breadcrumb-item"><a href="#paginas ">Paginas</a></li>
      <li class="breadcrumb-item"><a href="/estrategias/">Estrategias de manejo del estrés</a></li>
    </ol>
  </div>
</div>
<!-- Header End -->

<!-- Feature Start -->
<div class="container-fluid feature overflow-hidden py-5">
  <div class="container py-5">
    <div
      class="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style="max-width: 900px;"
    >
      <h4 class="text-primary">Manejo del Estrés</h4>
      <h1 class="display-5 mb-4">¿QUÉ ES EL ESTRÉS?</h1>
      <p class="mb-0">
        El estrés es la reacción natural del cuerpo ante situaciones desafiantes o demandantes.
        Puede afectar tanto a jóvenes como a adultos en diferentes aspectos de la vida, como los
        estudios, el trabajo o la vida personal. Aprender a manejar el estrés es esencial para
        mantener un equilibrio saludable.
      </p>
    </div>
    <div class="row g-4 justify-content-center text-center mb-5">
      <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
        <div class="text-center p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-brain fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <p class="h4">Técnicas de Relajación</p>
            <p class="mt-4 mb-0">
              Practicar técnicas como la meditación, respiración profunda o el mindfulness puede
              ayudarte a calmar la mente y reducir la tensión acumulada.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
        <div class="text-center p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-calendar-alt fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <p class="h4">Organización y Planificación</p>
            <p class="mt-4 mb-0">
              Planificar tus tareas diarias y dividir grandes proyectos en partes más manejables
              puede disminuir la sensación de estar abrumado.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
        <div class="text-center rounded p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-running fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <p class="h4">Ejercicio Físico</p>
            <p class="mt-4 mb-0">
              Hacer ejercicio regularmente no solo mejora tu salud física, sino que también libera
              endorfinas, reduciendo el estrés y mejorando tu estado de ánimo.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
        <div class="text-center rounded p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-users fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <p class="h4"><i>Red de Apoyo</i></p>
            <p class="mt-4 mb-0">
              Hablar con amigos, familiares o un consejero puede ayudarte a procesar tus emociones y
              recibir apoyo en momentos de estrés.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-5 pt-5" style="margin-top: 6rem;">
      <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <div class="feature-img RotateMoveLeft h-100" style="object-fit: cover;">
          <img
            src={Meditacion}
            class="img-fluid w-100 h-100"
            alt="Estrés"
          />
        </div>
      </div>
      <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
        <h4 class="text-primary">Consejos Adicionales</h4>
        <h1 class="display-5 mb-4">Encuentra el Balance en tu Vida</h1>
        <p class="mb-4">
          El estrés puede surgir por muchas razones, ya sea académicas, laborales o personales.
          Dedica tiempo para ti mismo, establece prioridades claras, y recuerda que pedir ayuda
          siempre es una opción válida.
        </p>
        <div class="row g-4">
          <div class="col-6">
            <div class="d-flex">
              <i class="fas fa-heartbeat fa-4x text-secondary"></i>
              <div class="d-flex flex-column ms-3">
                <h2 class="mb-0 fw-bold">Salud</h2>
                <small class="text-dark">Cuida tu bienestar físico y mental.</small>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex">
              <i class="fas fa-smile-beam fa-4x text-secondary"></i>
              <div class="d-flex flex-column ms-3">
                <h2 class="mb-0 fw-bold">Felicidad</h2>
                <small class="text-dark">Encuentra momentos de alegría y relajación.</small>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <a href="/Tecnicasderelajacion/" class="btn btn-primary rounded-pill py-3 px-5"
            >Leer Más</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Feature End -->

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
          <a href=""><i class="fas fa-envelope me-2"></i>  psicologíaonce@gmail.com</a>
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
  