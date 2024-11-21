import { toSnakeCase } from 'drizzle-orm/casing';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const usuarios =  sqliteTable('usuarios', {
	id: text('id')
	.primaryKey()
	.$defaultFn(() => crypto.randomUUID()),
	username: text('username').notNull(),
	email: text('email').notNull(),
	rol: text('rol').notNull(),
	password: text('password'),
	token: text('token'),
	resetToken: text("resetToken")
});


export const citas = sqliteTable('citas', {
    id: integer('id').primaryKey(),
	usuario: text('usuario').notNull(),
	correo: text('correo').notNull(),
    fecha: text('fecha').notNull(), 
    horario: text('horario').notNull(),
    grupo: text('grupo').notNull(),
    jornada: text('jornada').notNull(),
});
