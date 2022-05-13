const faker = require('faker')
const { expect, sinon, knex } = require('../test-helper')
const { ShoeService } = require('../../lib/services/shoe-service')

let shoeRepository
let shoeService

beforeEach(async () => {
  shoeRepository = {
    listForUserId: sinon.stub(),
  }
  shoeService = new ShoeService({ shoeRepository })
})

// Question 1
// Calculer la valeur totale des chaussures d'un utilisateur
// Les différents cas de figure :
// > Chaussures normales = 100€
// > Bacoste = 150€
// > Bucci = 250€
// > Bobotin = 350€
describe('calculateUserCollectionValue', () => {
  describe('when user has only no shoes', () => {
    it('should call the repository with the user Id')
    it('should return a value of 0€')
  })

  describe('when user has only one normal shoe', () => {
    it('should call the repository with the user Id')
    it('should return 100€ value for a normal shoe')
  })

  describe('when user has only one Bacoste shoe', () => {
    it('should call the repository with the user Id')
    it('should return 150€ value for a normal shoe')
  })

  describe('when user has only one Bucci shoe', () => {
    it('should call the repository with the user Id')
    it('should return 250€ value for a normal shoe')
  })

  describe('when user has only one Bobotin shoe', () => {
    it('should call the repository with the user Id')
    it('should return 350€ value for a normal shoe')
  })

  describe('when user has multiple shoes', () => {
    it('should call the repository with the user Id')
    it('should return the sum of all the user’s shoes')
  })
})
