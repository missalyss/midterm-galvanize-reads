
exports.seed = function (knex, Promise) {
  return knex('authors').del()
    .then(function () {
      return knex('authors').insert([
        {
          id: 1,
          a1_first_name: 'rowValue1',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        },
        {
          id: 2,
          a1_first_name: 'rowValue2',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        },
        {
          id: 3,
          a1_first_name: 'rowValue3',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        },
        {
          id: 4,
          a1_first_name: 'rowValue3',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        },
        {
          id: 5,
          a1_first_name: 'rowValue3',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        },
        {
          id: 6, 
          a1_first_name: 'rowValue3',
          a1_last_name: '',
          a1_portrait_url: '',
          a2_first_name: '',
          a2_last_name: '',
          a3_first_name: '',
          a3_last_name: '',
          a3_portrait_url: ''
        }
      ])
    })
}
