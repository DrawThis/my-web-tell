<script lang="ts">
	import { onMount } from 'svelte';
	// Importaciones CSS

	import '$lib/css/style.css';
	import '$lib/css/todo.css';
	import '$lib/animate/animate.min.css';
	import '$lib/lightbox/css/lightbox.min.css';
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
	
  <!-- Sección de Servicios -->
<div class="container-fluid feature overflow-hidden py-5">
  <div class="container py-5">
    <div class="text-center mx-auto mb-5" style="max-width: 900px;">
      <h4 class="text-primary">Nuestros Servicios</h4>
      <h1 class="display-5 mb-4">Servicios de Psicología para Estudiantes</h1>
      <p class="mb-0">
        A continuación te presentamos los servicios que ofrecemos para facilitar la programación de citas de psicología
        y brindar información útil para estudiantes. Nuestra plataforma está diseñada para ayudarte a encontrar el apoyo
        que necesitas en tu camino académico y personal.
      </p>
    </div>

    <div class="row g-4 justify-content-center text-center mb-5">
      <!-- Servicio de Apoyo Psicológico -->
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="text-center p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-brain fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <h4>Apoyo Psicológico</h4> 
            <p class="mt-4 mb-0">Orientación y asesoramiento personalizado para estudiantes.</p>
          </div>
        </div>
      </div>

      <!-- Servicio de Estrategias de Manejo del Estrés -->
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="text-center p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-medkit fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <a href="/estrategias/" class="h4">Estrategias de Manejo del Estrés <i class="fa fa-long-arrow-alt-right"></i></a>
            <p class="mt-4 mb-0">Aprende a gestionar el estrés con técnicas eficaces y prácticas.</p>
          </div>
        </div>
      </div>

      <!-- Servicio de Técnicas de Relajación -->
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="text-center rounded p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-spa fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <a href="/Tecnicasderelajacion/" class="h4">Técnicas de Relajación <i class="fa fa-long-arrow-alt-right"></i></a>
            <p class="mt-4 mb-0">Prácticas y herramientas para calmar la mente y reducir la ansiedad.</p>
          </div>
        </div>
      </div>

      <!-- Servicio de Apoyo Académico -->
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="text-center rounded p-4">
          <div class="d-inline-block rounded bg-light p-4 mb-4">
            <i class="fas fa-graduation-cap fa-5x text-secondary"></i>
          </div>
          <div class="feature-content">
            <h4>Apoyo Académico </h4>
            <p class="mt-4 mb-0">Técnicas para mejorar la concentración y el rendimiento académico.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Más Características -->
    <div class="text-center mt-5">
      <a href="/servicios/" class="btn btn-primary rounded-pill py-3 px-5">Más Características</a>
    </div>
  </div>
</div></div>

  
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
	