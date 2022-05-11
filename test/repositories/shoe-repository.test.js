const { expect, knex } = require('../test-helper')
const { ShoeRepository } = require('../../lib/repositories/shoe-repository')
const { Shoe } = require('../../lib/models/shoe')

let shoeRepository

afterEach(async () => {
  await knex('users').del()
  await knex('shoes').del()
})

beforeEach(async () => {
  shoeRepository = new ShoeRepository({ knex })
})

// Question 1
// Récupérer toutes les chaussures d'un utilisateur
// Retour une liste de Shoes avec les bonnes données
describe('listForUserId', () => {
  let shoesPromise
  let johnSql
  let johnShoeSqlList

  // Note 1 : que ce passe t il si on rajoute un autre utilisateur avec ses propres chaussures ?
  // Il faudrait verifier que l'on ne récupère pas toutes les chaussures de la base de données mais bien
  // seulement celles de l'utilisateur.
  beforeEach(async () => {
    const createdShoes = await knex('users').insert({
      name: 'john',
    }).returning('*')
    johnSql = createdShoes[0]
    johnShoeSqlList = await knex('shoes').insert([
      {
        model: 'Vintage',
        brand: 'Bans',
        user_id: johnSqlid,
      }, {
        model: 'Sneakers',
        brand: 'Abidas',
        user_id: johnSqlid,
      }, {
        model: 'Crocodile',
        brand: 'Bacoste',
        user_id: johnSqlid,
      }, {
        model: 'Cherros',
        brand: 'Bucci',
        user_id: johnSqlid,
      },
    ]).returning('*')

    shoesPromise = shoeRepository.listForUserId({ userId })
  })

  it('the promise should succeed')

  // Note 2 : Comment valider qu'il n'y a que des instances de Shoe dans ce tableau ?
  // On peut si besoin faire un matcher custom grâce à la méthode satisfy de chai + forEach sur le tableau
  // On peut aussi split l'assertion en deux (verifier les instanceOf d'un coté et les valeurs de l'autre)
  // https://www.chaijs.com/api/bdd/#method_satisfy
  it('the promise should return a list of shoe class with correct data')
})
