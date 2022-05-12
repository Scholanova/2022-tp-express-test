const { Shoe } = require('../models/shoe')

class ShoeRepository {
  constructor({ knex }) {
    this.knex = knex
  }

  listForUserId({ userId }) {
    return this.knex('shoes')
      .select('*')
      .where('user_id', userId)
      .then((shoeSqlList) => {
        return shoeSqlList.map((shoeSql) => {
          return new Shoe({
            id: shoeSql.id,
            model: shoeSql.model,
            brand: shoeSql.brand,
            userId: shoeSql.user_id,
          })
        })
      })
  }
}

module.exports = {
  ShoeRepository,
}
