const faker = require('faker')
const { expect, sinon, knex } = require('../test-helper')
const { ShoeService } = require('../../lib/services/shoe-service')
const { Shoe } = require('../../lib/models/shoe')

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
describe.only('calculateUserCollectionValue', () => {
  let userId
  beforeEach(() => {
    userId = 1
  })

  describe('when user has only no shoes', () => {

    beforeEach(async () => {
      shoeRepository.listForUserId.resolves([])
    })


    it('should call the repository with the user Id', async () => {


    })


    it('should return a value of 0€', async () => {
      const shoeValue = await shoeService.calculateUserCollectionValue({ userId })
      expect(shoeValue).to.be.equal(0)
    })
  })

  describe('when user has only one normal shoe', () => {
    let shoes
    beforeEach(async () => {
      // Etant donné 
      const oneShoe = new Shoe({ id: 1, model: "Normal", brand: "Niko" })
      shoes = [oneShoe]
      shoeRepository.listForUserId.resolves(shoes)

      // Quand il se passe
      shoeValue = await shoeService.calculateUserCollectionValue({ userId })
    })
    // Alors
    it('should call the repository with the user Id', () => {
      expect(shoeRepository.listForUserId).to.have.been.deep.calledOnceWith({ userId })
    })

    it('should return 100€ value for a normal shoe', () => {
      expect(shoeValue).to.be.equal(100)
    })
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