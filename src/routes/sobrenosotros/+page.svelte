<script lang="ts">
  import { onMount } from 'svelte';
  // Importaciones CSS

  import '$lib/css/style.css';
  import '$lib/css/todo.css';
  import '$lib/animate/animate.min.css';
  import '$lib/lightbox/css/lightbox.min.css';
    import about from '$lib/img/about-1.png';
    import unacitaconpsicolog from '$lib/img/-una-cita-con-psicolog-a-.png';
    import logo from '$lib/img/logomariposa.png';
  </script>

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
                <a href="/citas/" class="nav-item nav-link">CITAS</a>
                <a href="/crearcitas/" class="nav-item nav-link">Crear citas</a>
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
    </div>


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
    <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Sobre Nosotros</h3>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><a href="/index/">Inicio</a></li>
            <li class="breadcrumb-item active text-primary">Nosotros</li>
        </ol>
</div>
</div>
<!-- Header End -->


<!-- About Start -->
<div class="container-fluid overflow-hidden py-5 mt-5">
<div class="container py-5">
    <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="RotateMoveLeft">
                <img src="{about}" class="img-fluid w-100" alt="">
            </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h4 class="mb-1 text-primary">Sobre Nosotros</h4>
            <h1 class="display-5 mb-4">Comienza fácilmente con una orientación psicológica personalizada</h1>
            <p class="mb-4">Ofrecemos un espacio de apoyo psicológico especializado para estudiantes, enfocado
                en ayudarte a manejar los desafíos académicos y emocionales que puedas enfrentar durante tu
                formación. Nuestro equipo está dedicado a brindarte las herramientas necesarias para mejorar tu
                bienestar y rendimiento.</p>
        </div>
    </div>
</div>
</div>
<!-- About End -->

<!-- medios de contecto Start -->
<div class="container-fluid service py-5">
<div class="container py-5">
    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="mb-1 text-primary">Nuestros Servicios</h4>
        <h1 class="display-5 mb-4">Servicios Especializados para Estudiantes</h1>
        <p class="mb-0">Explora nuestros servicios diseñados para ayudarte a superar los retos académicos y
            emocionales. Desde técnicas para manejar el estrés hasta apoyo para mejorar tus habilidades de
            estudio, estamos aquí para ti.
        </p>
    </div>
    <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Contactos externos e Institucionales</h4>
                    <p class="mb-4">Psicologa Institucional: 3158338995</p>
                    <p class="mb-4">Linea Amiga:(604) 4444448</p>

                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fa fa-subway fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Contacta con nosotras</h4>
                    <p class="mb-4"> ig: youcantellme.smw </p>
                    <p class="mb-4"> Contacta con nosotras: 3052602017</p>
                    <p class="mb-4"> Facebook: Maria Ballesteros</p>
                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="service-item text-center rounded p-4">
                <div class="service-icon d-inline-block bg-light rounded p-4 mb-4"><i
                        class="fas fa-sitemap fa-5x text-secondary"></i></div>
                <div class="service-content">
                    <h4 class="mb-4">Agenda una cita</h4>
                    <p class="mb-4">Inicia sesión para solicitar una cita o solicitala directamente si ya
                        iniciaste sesión
                    </p>
                    <p class="mb-4"> Gracias por escogernos como tu aliado</p>
                    <a href="1" class="btn btn-light rounded-pill text-primary py-2 px-4">Aquí</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!-- medios de contacto End -->


<!-- importante Start -->
<div class="container-fluid feature overflow-hidden py-5">
<div class="container py-5">
    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="text-primary">IMPORTANTE</h4>
        <h1 class="display-5 mb-4">¿Qué es lo más importante para nosotras?</h1>
        <p class="mb-0"> La salud mental es una prioridad fundamental para nosotros. Nos comprometemos a
            proporcionar un entorno seguro y tranquilo donde puedas sentirte apoyado. Para ello, contamos con el
            respaldo de nuestra psicóloga, quien está disponible para ofrecerte el apoyo necesario. No dudes de
            contar con nosotros para cualquier necesidad relacionada con tu bienestar emocionar y agendamiento
            de cita.
        </p>
    </div>
</div>
<div class="row g-5 pt-5" style="margin-top: 6rem;">
    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <div class="feature-img RotateMoveLeft h-100" style="object-fit: cover;">
            <img src="{unacitaconpsicolog}" class="img-fluid w-100 h-100" alt="">
        </div>
    </div>
    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
        <h4 class="text-primary">¡RECUERDA!</h4>
        <h1 class="display-5 mb-4">No estás solo, estas con nosotras</h1>
        <p class="mb-4">
            Recuerda que la oscuridad es solo un estado temporal; siempre hay una luz al final del túnel. No estás solo en este camino, y cada paso hacia adelante es una victoria. Aunque los desafíos puedan parecer grandes, tienes dentro de ti la fuerza para superarlos. Permítete buscar apoyo cuando lo necesites y confía en que este momento difícil también pasará. Cada avance, por pequeño que sea, es una prueba de tu resiliencia y de tu valor.
        </p>
    </div>
</div>
</div>
<!-- importante End -->







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