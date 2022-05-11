class ShoeRepository {
  constructor({ knex }) {
    this.knex = knex
  }

  listForUserId({ userId }) {
    return undefined
  }
}

module.exports = {
  ShoeRepository,
}
