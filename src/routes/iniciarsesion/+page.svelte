<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import '$lib/css/iniciarsesion.css';

  // Definiendo tipos
  interface HTMLElementWithStyle extends HTMLElement {
      style: CSSStyleDeclaration;
  }

  // Variables reactivas de Svelte
  let formulario_login: HTMLElementWithStyle;
  let formulario_register: HTMLElementWithStyle;
  let contenedor_login_register: HTMLElementWithStyle;
  let caja_trasera_login: HTMLElementWithStyle;
  let caja_trasera_register: HTMLElementWithStyle;
  let wrapper: HTMLElement;

  // Variables para los campos de formulario
  let loginEmail = '';
  let loginPassword = '';
  let registerName = '';
  let registerEmail = '';
  let registerUsername = '';
  let registerPassword = '';

  // Funciones de validación
  const validateEmail = (email: string): boolean => {
    return email.toLowerCase().endsWith('@gmail.com');
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validateLoginForm = async (event: Event): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const passwordInput = form.querySelector('input[type="password"]') as HTMLInputElement;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      alert('Por favor, complete todos los campos');
      return;
    }

    if (!validateEmail(email)) {
      alert('El correo debe terminar en @gmail.com');
      return;
    }

    if (!validatePassword(password)) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todas las validaciones pasan, navegamos a index
    try {
      await goto('/index');
    } catch (error) {
      console.error('Error al navegar:', error);
      alert('Error al procesar el inicio de sesión');
    }
  };

  const validateRegisterForm = async (event: Event): Promise<void> => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = form.querySelector('input[name="nombre"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const usernameInput = form.querySelector('input[name="username"]') as HTMLInputElement;
    const passwordInput = form.querySelector('input[type="password"]') as HTMLInputElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!name || !email || !username || !password) {
      alert('Por favor, complete todos los campos');
      return;
    }

    if (!validateEmail(email)) {
      alert('El correo debe terminar en @gmail.com');
      return;
    }

    if (!validatePassword(password)) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todas las validaciones pasan, navegamos a index
    try {
      await goto('/index');
    } catch (error) {
      console.error('Error al navegar:', error);
      alert('Error al procesar el registro');
    }
  };

  // Funciones de UI existentes
  const anchoPage = (): void => {
      if (window.innerWidth > 850) {
          caja_trasera_register.style.display = 'block';
          caja_trasera_login.style.display = 'block';
      } else {
          caja_trasera_register.style.display = 'block';
          caja_trasera_register.style.opacity = '1';
          caja_trasera_login.style.display = 'none';
          formulario_login.style.display = 'block';
          formulario_register.style.display = 'none';
          contenedor_login_register.style.left = '0px';
      }
  };

  const iniciarSesion = (): void => {
      if (window.innerWidth > 850) {
          formulario_login.style.display = 'block';
          contenedor_login_register.style.left = '10px';
          formulario_register.style.display = 'none';
          caja_trasera_register.style.opacity = '1';
          caja_trasera_login.style.opacity = '0';
      } else {
          formulario_login.style.display = 'block';
          contenedor_login_register.style.left = '0px';
          formulario_register.style.display = 'none';
          caja_trasera_register.style.display = 'block';
          caja_trasera_login.style.display = 'none';
      }
  };

  const register = (): void => {
      if (window.innerWidth > 850) {
          formulario_register.style.display = 'block';
          contenedor_login_register.style.left = '410px';
          formulario_login.style.display = 'none';
          caja_trasera_register.style.opacity = '0';
          caja_trasera_login.style.opacity = '1';
      } else {
          formulario_register.style.display = 'block';
          contenedor_login_register.style.left = '0px';
          formulario_login.style.display = 'none';
          caja_trasera_register.style.display = 'none';
          caja_trasera_login.style.display = 'block';
          caja_trasera_login.style.opacity = '1';
      }
  };

  // Ciclo de vida de Svelte
  onMount(() => {
      // Asignación de elementos del DOM
      formulario_login = document.querySelector('.formulario__login') as HTMLElementWithStyle;
      formulario_register = document.querySelector('.formulario__register') as HTMLElementWithStyle;
      contenedor_login_register = document.querySelector('.contenedor__login-register') as HTMLElementWithStyle;
      caja_trasera_login = document.querySelector('.caja__trasera-login') as HTMLElementWithStyle;
      caja_trasera_register = document.querySelector('.caja__trasera-register') as HTMLElementWithStyle;
      wrapper = document.querySelector('.wrapper') as HTMLElement;

      // Event listeners
      window.addEventListener('resize', anchoPage);
      document.getElementById('btn__iniciar-sesion')?.addEventListener('click', iniciarSesion);
      document.getElementById('btn__registrarse')?.addEventListener('click', register);

      // Inicialización
      anchoPage();

      // Limpieza de event listeners
      return () => {
          window.removeEventListener('resize', anchoPage);
          document.getElementById('btn__iniciar-sesion')?.removeEventListener('click', iniciarSesion);
          document.getElementById('btn__registrarse')?.removeEventListener('click', register);
      };
  });
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You can tell me</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="contenedor__todo">
  <div class="caja__trasera">
    <div class="caja__trasera-login">
      <h3>¿Ya tienes una cuenta?</h3>
      <p>Inicia sesión para entrar en la página</p>
      <button id="btn__iniciar-sesion">Iniciar Sesión</button>
    </div>
    <div class="caja__trasera-register">
      <h3>¿Aún no tienes una cuenta?</h3>
      <p>Regístrate para que puedas iniciar sesión</p>
      <button id="btn__registrarse">Regístrarse</button>
    </div>
  </div>

  <div class="contenedor__login-register">
    <form on:submit={validateLoginForm} class="formulario__login">
      <h2>Iniciar Sesión</h2>
      <input 
        type="email" 
        placeholder="Correo Electrónico" 
        bind:value={loginEmail}
        required
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        bind:value={loginPassword}
        required
      />
      <button type="submit">Entrar</button>
    </form>

    <form on:submit={validateRegisterForm} class="formulario__register">
      <h2>Regístrarse</h2>
      <input 
        type="text" 
        name="nombre"
        placeholder="Nombre completo" 
        bind:value={registerName}
        required
      />
      <input 
        type="email" 
        placeholder="Correo Electrónico" 
        bind:value={registerEmail}
        required
      />
      <input 
        type="text" 
        name="username"
        placeholder="Usuario" 
        bind:value={registerUsername}
        required
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        bind:value={registerPassword}
        required
      />
      <button type="submit">Regístrarse</button>
    </form>
  </div>
</div>
