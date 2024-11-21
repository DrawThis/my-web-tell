import type { Cookies } from '@sveltejs/kit';  
import { fail, redirect } from '@sveltejs/kit'; 
import crypto from 'crypto';  
import type { Actions } from './$types';
import { db } from '$lib/server/database/client';  
import { usuarios } from '$lib/server/database/data';  
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';  
import type { RequestEvent } from '@sveltejs/kit'; 

export const actions: Actions = {
  login: async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
    const data = Object.fromEntries(await request.formData());
    const password = String(data.password);

    if (
      typeof data.email !== 'string' ||
      typeof data.password !== 'string' ||
      !data.email ||
      !data.password
    ) {
      return fail(400, { invalid: true });
    }

    const user = await db.select().from(usuarios).where(eq(usuarios.email, data.email));

    if (!user || user.length === 0 || !user[0].password) {
      return fail(400, { credentials: true });
    }

    if (user.length > 1) {
      return fail(400, { duplicate: true });
    }

    const findpass = await bcrypt.compare(password, user[0].password);

    if (!findpass) {
      return { credentials: true };
    }

    const authenticatedUser = crypto.randomUUID();

    await db
      .update(usuarios)
      .set({ token: authenticatedUser })
      .where(eq(usuarios.email, data.email));

      // Configuración de la cookie para mantener la sesión activa
      cookies.set('session', authenticatedUser, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 días
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
      });
      
    // redirigir al usuario
    throw redirect(302, `/index`);
  },

  register: async ({ request }: RequestEvent) => {
    const data = Object.fromEntries(await request.formData());

    if (
      typeof data.email !== 'string' ||
      typeof data.password !== 'string' ||
      typeof data.username !== 'string' ||
      !data.email ||
      !data.password ||
      !data.username
    ) {
      return fail(400, { invalid: true });
    }

    const user = await db.select().from(usuarios).where(eq(usuarios.email, data.email));
    
    if (user.length > 0) {
      return fail(400, { user: true });
    }
    
    await db.insert(usuarios).values({ 
      id: crypto.randomUUID(),
      username: data.username,
      email: data.email, 
      rol: 'user',
      password: await bcrypt.hash(data.password, 10),
      token: crypto.randomUUID(),
    });
    
    throw redirect(303, `/iniciarsesion`);
  },
};
