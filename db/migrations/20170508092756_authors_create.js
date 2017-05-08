
exports.up = function (knex, Promise) {
  return knex.schema.createTable('authors', (t) => {
    t.increments()
    t.string('1_first_name').notNullable()
    t.string('1_last_name').notNullable()
    t.text('1_portrait_url')
    t.string('2_first_name')
    t.string('2_last_name')
    t.text('2_portrait_url')
    t.string('3_first_name')
    t.string('3_last_name')
    t.text('3_portrait_url')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('authors')
}
