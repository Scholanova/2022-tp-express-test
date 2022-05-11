const faker = require('faker')
const { expect, sinon, knex } = require('../test-helper')
const { UserService } = require('../../lib/services/user-service')

let userRepository
let userService

beforeEach(async () => {
  userRepository = {
    getById: sinon.stub(),
    save: sinon.stub(),
  }
  userService = new UserService({ userRepository })
})

// Question 1
// Créer un utilisateur avec son nom
// Il faut que le nom soit valide.
// Pour que le nom soit valide il faut qu'il fasse au moins 4 char de long
// Et il ne doit contenir que des caractères de l'alphabet. Pas de caractères spéciaux, ni de chiffres.
// Si il est valide on créé l'utilisateur sur le UserRepository et on retourne le User créé
// Si il est invalide on renvoie une erreur métier
describe('createNewUser', () => {
  describe('new user name is valid', () => {

    beforeEach(() => {
      // La syntaxe pour configurer un stub est
      // > stub.returns(variable) pour retourner une variable
      // > stub.resolves(variable) pour retourner une Promesse de status fulfilled avec comme valeur associée la variable
      // > stub.rejects(error) pour retourner une Promesse de status rejected avec comme erreur associée la variable error
      // https://sinonjs.org/releases/v14/stubs/
      // le stub est ici présent sur le chemin userRepository.getById (on l'a créé ligne 10)
      // donc par exemple userRepository.getById.returns(3)
    })

    // La syntaxe pour vérifier qu'un mock a bien été appelé est
    // expect(mock).to.have.been.calledWith("foo")
    // https://www.chaijs.com/plugins/sinon-chai/
    // le mock est ici présent sur le chemin userRepository.getById
    // donc par exemple expect(userRepository.getById).to.have.been.calledWith('foo')
    // on peut aussi récupérer tous les appels à un mock grace à la fonction getCalls
    // exemple : userRepository.save.getCalls()
    it('should call the repository with a User to save')
    it('should resolve with the saved User')
  })
  describe('new user name is not valid', () => {
    it('should not call the repository')
    it('should reject with a InvalidNameError')
  })
})
