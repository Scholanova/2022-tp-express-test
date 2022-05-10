const faker = require('faker')
const { expect, knex } = require('../test-helper')
const { UserRepository } = require('../../lib/repositories/user-repository')
const { User } = require('../../lib/models/user')
const { ResourceNotFoundError } = require('../../lib/errors')

let userRepository

afterEach(async () => {
  await knex('shoes').del()
  await knex('users').del()
})

beforeEach(async () => {
  userRepository = new UserRepository({ knex })
})

// Question 1
// Récupérer un utilisateur existant en base de données en utilisant son id
// Retour un User avec les bonnes données
describe('getById', () => {
  let userPromise
  let johnSql
  let userId

  beforeEach(async () => {
    const createdUsers = await knex('users').insert({
      name: 'john',
    }).returning('*')
    johnSql = createdUsers[0]
  })

  describe('user exists', () => {
    beforeEach(() => {
      userId = johnSql.id
      userPromise = userRepository.getById({ id: userId })
    })

    it('the promise should succeed', () => {
      return expect(userPromise).to.be.fulfilled
    })

    it('the promise should return a user class with correct data', () => {
      const expectedUserData = { id: johnSql.id, name: johnSql.name }
      return expect(userPromise).to.eventually.be.an.instanceof(User).and.to.deep.equal(expectedUserData)
    })
  })

  describe('user does not exist', () => {
    beforeEach(async () => {
      userId = faker.datatype.uuid()
      userPromise = userRepository.getById({ id: userId })
    })

    it('the promise should be rejected', () => {
      return expect(userPromise).to.be.rejectedWith(ResourceNotFoundError)
    })
  })
})

// Question 2
// Sauver un utilisateur
// Si l'utilisateur n'existe pas, le créer
// Si l'utilisateur existe déjà, le mettre à jour
describe.skip('save', () => {
  let userPromise
  let john
  let johnSql

  beforeEach(async () => {
    const createdUsers = await knex('users').insert({
      name: 'john',
    }).returning('*')
    johnSql = createdUsers[0]
    john = new User({ id: johnSql.id, name: johnSql.name })
  })

  describe('user already exists', () => {
    let updatedUser

    beforeEach(async () => {
      updatedUser = new User({ id: john.id, name: 'John 2 le retour' })
      userPromise = userRepository.save({ user: updatedUser })
    })

    it('the promise should be fulfilled', () => {
      return expect(userPromise).to.be.fulfilled
    })

    it('the promise should return the user with the updated name', () => {
      let expectedUser = undefined
      return expect(userPromise).to.eventually.to.deep.equal(undefined)
    })

    it('the user should be updated in database', () => {
      return knex
    })
  })

  describe('user does not exist', () => {
    let newUser
    beforeEach(async () => {
      newUser = new User({ name: 'Jérôme' })
      userPromise = userRepository.save({ user: newUser })
    })

    it('the promise should be fulfilled', () => {
      return expect(userPromise).to.be.fulfilled
    })

    it('the promise should return the user with an id', () => {
      return expect(userPromise).to.eventually.to.deep.equal(undefined)
    })

    it('the user should exist in database', () => {
      return knex
    })
  })
})
