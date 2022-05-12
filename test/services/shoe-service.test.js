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
})
