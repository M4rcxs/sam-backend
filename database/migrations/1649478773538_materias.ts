import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Materias extends BaseSchema {
  protected tableName = 'materias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.string('codigo').notNullable()
      table.string('codigo_entrada').notNullable()
      table.string('periodo').notNullable()
      table.integer('professor_id').unsigned().references('professors.id').onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
