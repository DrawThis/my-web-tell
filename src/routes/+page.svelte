<script>
	// @ts-nocheck
	import '$lib/css/inico.css';
	import img1 from '$lib/img/img1.jpg';
	import img2 from '$lib/img/img2.jpg';
	import img3 from '$lib/img/img3.jpg';
	import img4 from '$lib/img/img4.jpg';
	import img5 from '$lib/img/img5.jpg';
	import img6 from '$lib/img/img6.jpg';

	import { onMount } from 'svelte';

	// JavaScript para manejar la funcionalidad del slider
	let next;
	let prev;

	onMount(() => {
		next = document.querySelector('.next');
		prev = document.querySelector('.prev');

		// Verificamos que `next` y `prev` no sean `null`
		if (next) {
			next.addEventListener('click', function () {
				const items = document.querySelectorAll('.item');
				const slide = document.querySelector('.slide');
				if (slide && items.length > 0) {
					slide.appendChild(items[0]);
				}
			});
		}

		if (prev) {
			prev.addEventListener('click', function () {
				const items = document.querySelectorAll('.item');
				const slide = document.querySelector('.slide');
				if (slide && items.length > 0) {
					slide.prepend(items[items.length - 1]);
				}
			});
		}
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>You Can Tell Me - Apoyo Psicológico</title>
	<!-- Font Awesome CDN -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
	<!-- Custom CSS -->
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	<div class="slide">
		<div class="item" style="background-image: url({img1});">
			<div class="content">
				<div class="name">Empieza Tu Viaje hacia el Bienestar</div>
				<div class="des">
					"No estás solo en este camino. Juntos podemos encontrar la luz en la oscuridad." – Anónimo
				</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
                
			</div>
		</div>
		<div class="item">
			<div class="item" style="background-image: url({img2});"> </div>
			<div class="content">
				<div class="name">Bienvenido a You Can Tell Me</div>
				<div class="des">
					Aquí encontrarás un espacio de apoyo y comprensión, donde tu bienestar emocional es la
					prioridad.
				</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
			</div>
		</div>
		<div class="item" style="background-image: url({img3});">
			<div class="content">
				<div class="name">Encuentra el Apoyo que Necesitas</div>
				<div class="des">
					"El primer paso hacia el cambio es la conciencia. El segundo es la aceptación." –
					Nathaniel Branden
				</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
			</div>
		</div>
		<div class="item" style="background-image: url({img4});">
			<div class="content">
				<div class="name">Siempre a tu Lado</div>
				<div class="des">
					"En medio de cada dificultad se encuentra una oportunidad." – Albert Einstein
				</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
			</div>
		</div>
		<div class="item" style="background-image: url({img5});">
			<div class="content">
				<div class="name">Crea Conexiones Significativas</div>
				<div class="des">
					"No tienes que ser fuerte todo el tiempo. Está bien pedir ayuda." – Anónimo
				</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
			</div>
		</div>
		<div class="item" style="background-image: url({img6});">
			<div class="content">
				<div class="name">Tu Bienestar es una Prioridad</div>
				<div class="des">"Cuidar de ti mismo es parte de cuidar de los demás." – Anónimo</div>
				<a href="/iniciarsesion/" data-sveltekit-reload><button>Iniciar Sesión</button></a>
			</div>
		</div>
	</div>

	<div class="button">
		<button aria-label="button" class="prev"><i class="fa-solid fa-arrow-left"></i></button>
		<button aria-label="button" class="next"><i class="fa-solid fa-arrow-right"></i></button>
	</div>
</div>
