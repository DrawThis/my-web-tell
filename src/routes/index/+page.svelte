<script lang="ts">
    import { onMount } from 'svelte';
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