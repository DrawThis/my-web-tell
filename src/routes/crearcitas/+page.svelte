<script>
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
<!-- Navbar -->

<nav class="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0">
	<a href="/" class="navbar-brand p-0">
		<h1 class="display-6 text-primary m-0">
			<img src={logo} alt="sapas" style="width: 80px; height: auto;" /> You can tell me
		</h1>
	</a>
	<button
		class="navbar-toggler"
		aria-label="button"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarCollapse"
	>
		<span class="fa fa-bars"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarCollapse">
		<div class="navbar-nav ms-auto py-0">
			<a href="/index/" class="nav-item nav-link active">Inicio</a>
			<a href="/sobrenosotros/" class="nav-item nav-link">Sobre Nosotros</a>
			<div class="nav-item dropdown">
				<a href="1" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Páginas</a>
				<div class="dropdown-menu m-0">
					<a href="/citas/" class="dropdown-item active">Apoyo Psicológico</a>
					<a href="/estrategias/" class="dropdown-item">Estrategias de Manejo del Estrés</a>
					<a href="/Tecnicasderelajacion/" class="dropdown-item">Técnicas de Relajación</a>
				</div>
			</div>
			<a href="/contacto/" class="nav-item nav-link active">¡Contáctanos!</a>
		</div>
	</div>
</nav>
<!-- Header -->
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
		<h3 class="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">AGENDA TU CITA</h3>
		<ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
			<li class="breadcrumb-item"><a href="/index/">Inicio</a></li>
			<li class="breadcrumb-item"><a href="#paginas">Páginas</a></li>
			<li class="breadcrumb-item active text-primary">Contactos</li>
		</ol>
	</div>
</div>
<div class="container mt-5">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header bg-primary text-white">
					<h4>Solicitar Cita Psicológica</h4>
				</div>
				<div class="card-body">
					<form action="?/crear" method="POST">
						<div class="mb-3">
							<label for="username" class="form-label">Nombre del Usuario</label>
							<input type="text" name="usuario" class="form-control" required />
						</div>

						<div class="mb-3">
							<label for="username" class="form-label">Correo Electrónico</label>
							<input type="email" name="correo" class="form-control" required />
						</div>

						<div class="mb-3">
							<label for="fecha" class="form-label">Fecha de la Cita</label>
							<input type="date" name="fecha" class="form-control" required />
						</div>
						<div class="mb-3">
							<label for="horario" class="form-label">Horario Preferido</label>
							<select name="horario" class="form-select" required>
								<option value="">Selecciona un horario</option>
								<option value="8:00 am - 9:00 am">Mañana (8:00 am - 9:00 am)</option>
								<option value="9:00 am - 10:00 am">Mañana (9:00 am - 10:00 am)</option>
								<option value="10:00 am - 11:00 am">Mañana (10:00 am - 11:00 am)</option>
								<option value="11:00 am - 12:00 pm">Mañana (11:00 am - 12:00 pm)</option>
								<option value="2:00 pm - 3:00 pm">Tarde (2:00 pm - 3:00 pm)</option>
								<option value="3:00 pm - 4:00 pm">Tarde (3:00 pm - 4:00 pm)</option>
								<option value="4:00 pm - 5:00 pm">Tarde (4:00 pm - 5:00 pm)</option>
							</select>
						</div>
						<div class="mb-3">
							<label for="grupo" class="form-label">Grupo de Atención</label>
							<select name="grupo" class="form-select" required>
								<option value="">Selecciona un Grado</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
							</select>
						</div>
						<div class="mb-3">
							<label for="" class="form-label">Jornada de estudio</label>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="jornada"
									value="mañana"
									required
								/>
								<label for="" class="form-check-label">Mañana</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="jornada"
									value="tarde"
									required
								/>
								<label for="" class="form-check-label">Tarde</label>
							</div>
						</div>
						<button type="submit" class="btn btn-primary w-100">Solicitar Cita</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

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
					<a href="/contacto/"><i class="fas fa-envelope me-2"></i> psicologíaonce@gmail.com</a>
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
	/* Spinner Start */
	/* Spinner */
	#spinner {
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.5s ease-out,
			visibility 0s linear 0.5s;
		z-index: 99999;
	}

	#spinner.show {
		transition:
			opacity 0.5s ease-out,
			visibility 0s linear 0s;
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
		transition: 0.5s;
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
		transition: 0.1s;
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
		0% {
			left: 0px;
		}
		50% {
			left: 40px;
		}
		100% {
			left: 0px;
		}
	}

	@keyframes RotateMoveRight {
		0% {
			right: 0px;
		}
		50% {
			right: 40px;
		}
		100% {
			right: 0px;
		}
	}

	/* Navbar */
	.navbar-light .navbar-nav .nav-link {
		margin-right: 25px;
		padding: 35px 0;
		color: var(--bs-dark) !important;
		font-size: 16px;
		font-weight: 400;
		outline: none;
		transition: 0.5s;
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
		transition: 0.5s;
	}

	.sticky-top.navbar-light .navbar-brand img {
		max-height: 45px;
	}

	.navbar .dropdown-toggle::after {
		border: none;
		content: '\f107';
		font-family: 'Font Awesome 5 Free';
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
			transition: 0.5s;
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
		transition: 0.5s;
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
			border-top: 1px solid #dddddd;
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
		content: '';
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

		0% {
			bottom: 0px;
		}
		50% {
			left: -10px;
		}
		75% {
			bottom: 10%;
		}
		100% {
			bottom: 0px;
		}
	}

	.bg-breadcrumb::before {
		content: '';
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

		0% {
			top: 0px;
		}
		50% {
			top: 10%;
		}
		100% {
			top: 0px;
		}
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
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
	/* Single Page Hero Header End */

	/* Hearo Header Start */
	.header::after {
		position: absolute;
		content: '';
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
		0% {
			right: 0px;
		}
		50% {
			right: 20px;
		}
		100% {
			right: 0px;
		}
	}

	.header::before {
		content: '';
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

		0% {
			bottom: 0px;
		}
		50% {
			left: -10px;
		}
		75% {
			bottom: 9%;
		}
		100% {
			bottom: 0px;
		}
	}

	.hero-header {
		padding-top: 160px;
		padding-bottom: 100px;
		position: relative;
	}

	.hero-header::after {
		content: '';
		position: absolute;
		left: 100px;
		bottom: 100px;
		width: 58px;
		height: 50px;
		background: url(../img/crea-una-imagen-de-una-chica-sentada-reflexionando\ \(1\)) center center
			no-repeat;
		animation: RotateMoveSty-3 45s linear infinite;
		transition: 0.5s;
		z-index: -1;
	}

	@keyframes RotateMoveSty-3 {
		0% {
			left: 100px;
		}
		40% {
			bottom: -0px;
		}
		50% {
			left: 700px;
		}
		70% {
			bottom: 500px;
		}
		80% {
			left: 400px;
		}
		95% {
			bottom: -0px;
		}
		100% {
			left: 100px;
		}
	}

	.hero-header::before {
		content: '';
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
		0% {
			left: 100px;
		}
		40% {
			bottom: -0px;
		}
		50% {
			left: 700px;
		}
		70% {
			bottom: 500px;
		}
		80% {
			left: 400px;
		}
		95% {
			bottom: -0px;
		}
		100% {
			left: 100px;
		}
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
		0% {
			left: 0px;
		}
		40% {
			top: -30px;
		}
		50% {
			left: 500px;
		}
		70% {
			top: 200px;
		}
		80% {
			left: 100px;
		}
		95% {
			top: -30px;
		}
		100% {
			left: 0px;
		}
	}

	.hero-header .rotate-img img {
		position: relative;
		animation: RotateMove 30s linear infinite;
		z-index: -1;
	}

	@keyframes RotateMove {
		0% {
			left: 0px;
		}
		50% {
			left: 200px;
		}
		100% {
			left: 0px;
		}
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
		border: 1px;
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
		background: rgba(0, 0, 0, 0.4);
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
		content: '';
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
		0% {
			left: 0px;
		}
		25% {
			top: 100px;
		}
		50% {
			left: 90%;
		}
		75% {
			top: 80%;
		}
		100% {
			left: 0px;
		}
	}

	.contact::before {
		content: '';
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
		0% {
			right: 0px;
		}
		25% {
			top: 100px;
		}
		50% {
			right: 90%;
		}
		75% {
			top: 80%;
		}
		100% {
			right: 0px;
		}
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
