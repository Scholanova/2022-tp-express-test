class UserRepository {
  constructor({ knex }) {
    this.knex = knex
  }

  getById({ id }) {
    return undefined
  }
}

module.exports = {
  UserRepository,
}
