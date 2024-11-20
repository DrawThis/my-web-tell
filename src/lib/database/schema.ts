import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuarios = sqliteTable("usuarios", {
	id: integer("id").primaryKey(),
	nombre: text("nombre"),
	"contraseña": text("contraseña").notNull(),
	correo: text("correo").notNull(),
	telefono: numeric("telefono"),
	fechaRegistro: numeric("fecha_registro").default(sql`(datetime('now', '-5 hours'))`),
	nDocumento: text("n documento"),
});