const { User } = require('../models/user')
const { ResourceNotFoundError } = require('../errors')

class UserRepository {
  constructor({ knex }) {
    this.knex = knex
  }

  getById({ id }) {
    return this.knex('users')
      .select('*')
      .where('id', id)
      .first()
      .then((userSql) => {
        if(!userSql) {
          throw new ResourceNotFoundError()
        }
        return new User({ id: userSql.id, name: userSql.name })
      })
  }
}

module.exports = {
  UserRepository,
}
