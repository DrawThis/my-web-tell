import { fail, type Actions } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';
import { citas } from '$lib/server/database/data';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail', // o tu servicio de correo
    auth: {
      user: 'youcantellme481@gmail.com',
      pass: 'rgyl nmya hwvv clpw', // Contraseña de aplicación
    },
    tls: {
      rejectUnauthorized: false, // En algunos casos esto es necesario para evitar problemas de autenticación
    },
  });

export const actions: Actions = {
	crear: async ({ request }) => {
		const formData = await request.formData();
        const usuario = formData.get('usuario') as string;
        const correo = formData.get('correo') as string;
		const fecha = formData.get('fecha') as string;
		const horario = formData.get('horario') as string;
		const grupo = formData.get('grupo') as string;
		const jornada = formData.get('jornada') as string;

		// Validación de datos
		if (!usuario || !correo || !fecha || !horario || !grupo || !jornada) {
			return fail(400, { error: 'Todos los campos son obligatorios' });
		}

		try {
			// Inserción en la base de datos
			await db.insert(citas).values({
				id: undefined,
                usuario,
                correo,
				fecha: new Date(fecha).toISOString().split('T')[0], // Convierte a YYYY-MM-DD
				horario,
				grupo,
				jornada
			});

			// Enviar correo electrónico
			await transporter.sendMail({
				from: '"Gestión de Citas" youcantellme481@gmail.com', // Cambia por tu correo
				to: 'youcantellme481@gmail.com',
				subject: 'Nueva Cita Creada',
				text: `Se ha creado una nueva cita con los siguientes datos:
                Usuario: ${usuario}
                Correo: ${correo}
                Fecha: ${fecha}
                Horario: ${horario}
                Grupo: ${grupo}
                Jornada: ${jornada}`,
			});

			return { success: true };
		} catch (error) {
			console.error('Error al procesar la solicitud:', error);
			return fail(500, { error: 'Error al procesar la solicitud' });
		}
	}
};
