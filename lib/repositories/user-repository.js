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
        if (!userSql) {
          throw new ResourceNotFoundError()
        }
        return new User({ id: userSql.id, name: userSql.name })
      })
  }

  save({ user }) {
    return this.knex('users')
      .insert({id: user.id, name: user.name})
      .returning('*')
      .onConflict('id')
      .merge()
      .then((insertedUsers) => {
        const insertedUser = insertedUsers[0]
        return new User({ id: insertedUser.id, name: insertedUser.name })
      })
  }
}

module.exports = {
  UserRepository,
}
