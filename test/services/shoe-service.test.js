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
    let shoesValue
    //Etant donné
    beforeEach(async () => {
      const userShoe = new Shoe({
        model: 'Crocodile',
        brand: 'Bacoste',
        userId: userId,
        id: 1,
      })
      shoeRepository.listForUserId.resolves([userShoe])
      //Quand
      shoesValue = await shoeService.calculateUserCollectionValue({ userId })
    })
    //Alors
    it('should call the repository with the user Id', () => {
      expect(shoeRepository.listForUserId).to.have.been.deep.calledOnceWith({ userId })
    })
    it('should return 150€ value for a Bacoste shoe', () => {
      expect(shoesValue).to.be.equal(150)
    })
  })

  describe('when user has only one Bucci shoe', () => {
    let shoesValue
    //Etant donné
    beforeEach(async () => {
      const userShoe = new Shoe({
        model: 'Rhaiton',
        brand: 'Bucci',
        userId: userId,
        id: 2,
      })
      shoeRepository.listForUserId.resolves([userShoe])
      //Quand
      shoesValue = await shoeService.calculateUserCollectionValue({ userId })
    })
    //Alors
    it('should call the repository with the user Id', () => {
      expect(shoeRepository.listForUserId).to.have.been.deep.calledOnceWith({ userId })
    })
    it('should return 250€ value for a Bucci shoe', () => {
      expect(shoesValue).to.be.equal(250)
    })
  })

  describe('when user has only one Bobotin shoe', () => {
    let shoesValue
    //Etant donné
    beforeEach(async () => {
      const userShoe = new Shoe({
        model: 'Mocassin a glands',
        brand: 'Bobotin',
        userId: userId,
        id: 3,
      })
      shoeRepository.listForUserId.resolves([userShoe])
      //Quand
      shoesValue = await shoeService.calculateUserCollectionValue({ userId })
    })
    //Alors
    it('should call the repository with the user Id', () => {
      expect(shoeRepository.listForUserId).to.have.been.deep.calledOnceWith({ userId })
    })
    it('should return 350€ value for a Bobotin shoe', () => {
      expect(shoesValue).to.be.equal(350)
    })
  })

  describe('when user has multiple shoes', () => {
    let shoesValue
    //Etant donné
    beforeEach(async () => {
      const userShoes = [
        new Shoe({ id: 1, model: "Normal", brand: "Niko", userId}),
        new Shoe({
          id: 3,
          model: 'Mocassin a glands',
          brand: 'Bobotin',
          userId
        }),
        new Shoe({
          id: 2,
          model: 'Rhaiton',
          brand: 'Bucci',
          userId
        })
      ]
      shoeRepository.listForUserId.resolves(userShoes)
      //Quand
      shoesValue = await shoeService.calculateUserCollectionValue({ userId })
    })

    it('should call the repository with the user Id', () => {
      expect(shoeRepository.listForUserId).to.have.been.deep.calledOnceWith({ userId })
    })

    it('should return the sum of all the user’s shoes', () => {
      expect(shoesValue).to.be.equal(700)
    })
  })
})