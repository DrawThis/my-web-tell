<script lang="ts">
    import { onMount } from 'svelte';
    // Importaciones CSS

    import '$lib/css/style.css';
    import '$lib/css/todo.css';
    import '$lib/animate/animate.min.css';
    import '$lib/animate/animate.css';
    import '$lib/lightbox/css/lightbox.min.css';
    import mindfulness from '$lib/img/mindfuldness.png';
    import relajacionprogresiva from '$lib/img/relajacion progresiva.png';
    import respiraciondiafragmatica from '$lib/img/segun-esta-informacion-haz-una-imagen-con-tonos-mo.png';
    import Meditacion from '$lib/img/meditacion guiada.png';
    import logo from '$lib/img/logomariposa.png';

    
    </script>

<!-- Spinner Start -->

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
    <h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Técnicas de relajación</h3>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><a href="/index/">Inicio</a></li>
            <li class="breadcrumb-item"><a href="1" aria-label="button">Paginas</a></li>
            <li class="breadcrumb-item active text-primary">Técnicas de relajación</li>
        </ol>
</div>
</div>
<!-- Header End -->


<!-- Blog Start -->
<div class="container-fluid blog py-5">
<div class="container py-5">
    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 900px;">
        <h4 class="text-primary">Técnicas de Relajación</h4>
        <h1 class="display-5 mb-4">Principales Métodos para Relajarte</h1>
        <p class="mb-0">Descubre algunas de las técnicas de relajación más eficaces para reducir el estrés,
            mejorar tu bienestar mental y físico. ¡Empieza a relajarte con estos métodos y siente la diferencia!
        </p>
    </div>
    <div class="row g-4 justify-content-center">
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="blog-item">
                <div class="blog-img">
                    <img src={respiraciondiafragmatica}
                        class="img-fluid w-100" alt="Imagen respiración diafragmática">
                    <div class="blog-info">
                        <div class="d-flex">
                            <span class="me-3"><i class=""></i></span>
                            <a href="1" aria-label="button" class="text-white"> <i class=""></i></a>
                        </div>
                    </div>
                </div>
                <div class="blog-content text-dark border p-4">
                    <h5 class="mb-4">Respiración Diafragmática</h5>
                    <p class="mb-4">Controla tu respiración, relaja tu mente y cuerpo con la respiración
                        profunda. Esta técnica te ayuda a reducir el estrés rápidamente.</p>
                    <div style="display: flex; justify-content: center;">
                        <a class="btn btn-light rounded-pill py-2 px-4"
                            href="https://youtu.be/-sQN0nEvJEw?si=vEKSKp4XhBMTbdGL" target="_blank">Ver
                            Video</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="blog-item">
                <div class="blog-img">
                    <img src={relajacionprogresiva} class="img-fluid w-100"
                        alt="Imagen relajación progresiva Jacobson">
                    <div class="blog-info">
                        <div class="d-flex">
                            <span class="me-3"><i class=""></i></span>
                            <a href="1" aria-label="button" class="text-white"> <i class=""></i></a>
                        </div>
                    </div>
                </div>
                <div class="blog-content text-dark border p-4">
                    <h5 class="mb-4">Relajación Progresiva de Jacobson</h5>
                    <p class="mb-4">Relaja cada grupo muscular en secuencia para liberar la tensión física y
                        mental. Ideal para reducir el insomnio y la ansiedad.</p>
                    <div style="display: flex; justify-content: center;">
                        <a class="btn btn-light rounded-pill py-2 px-4"
                            href="https://youtu.be/ThvYLXeXdf8?si=x-h8SPyqUaYaHXir" target="_blank">Ver
                            Video</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="blog-item">
                <div class="blog-img">
                    <img src={mindfulness} class="img-fluid w-100" alt="Imagen mindfulness">
                    <div class="blog-info">
                        <div class="d-flex">
                            <span class="me-3"><i class=""></i></span>
                            <a href="1" aria-label="button" class="text-white"><i class=""></i></a>
                        </div>
                    </div>
                </div>
                <div class="blog-content text-dark border p-4">
                    <h5 class="mb-4">Mindfulness</h5>
                    <p class="mb-4">El mindfulness consiste en enfocar tu atención en el presente, ayudando a
                        reducir la ansiedad y mejorar la concentración.</p>
                    <div style="display: flex; justify-content: center;">
                        <a class="btn btn-light rounded-pill py-2 px-4"
                            href="https://youtu.be/XXXaoKi7IY0?si=SKbSdPWari2Yhl8L" target="_blank">Ver
                            Video</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
            <div class="blog-item">
                <div class="blog-img">
                    <img src={Meditacion} class="img-fluid w-100" alt="Imagen meditación guiada">
                    <div class="blog-info">
                        <div class="d-flex">
                            <span class="me-3"><i class=""></i></span>
                            <a href="1" aria-label="button" class="text-white"><i class=""></i></a>
                        </div>
                    </div>
                </div>
                <div class="blog-content text-dark border p-4">
                    <h5 class="mb-4">Meditación Guiada</h5>
                    <p class="mb-4">Sigue las indicaciones de una voz calmante que te guiará en un proceso de
                        relajación profunda y desconexión mental.</p>
                    <div style="display: flex; justify-content: center;">
                        <a class="btn btn-light rounded-pill py-2 px-4"
                            href="https://youtu.be/IShkpOm63gg?si=OFbFGy4QFbOV4vao" target="_blank">Ver
                            Video</a>
                    </div>
                </div>
            </div>
        </div>
        <center>
            <div class="my-4">
                <a href="/Tecnicasderelajacion/" class="btn btn-primary rounded-pill py-3 px-5">Explora más
                    recursos</a>
            </div>
        </center>
    </div>
</div>
</div>
<!-- Blog End -->


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
ss  