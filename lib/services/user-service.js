const { User } = require('../models/user')
const { InvalidUserNameError } = require('../errors')

class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  createNewUser({ name }) {
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]*$/
    let hasOnlyValidCharacters = regex.test(name)
    let isTooShort = name.length < 5

    if (isTooShort || !hasOnlyValidCharacters) {
      return Promise.reject(new InvalidUserNameError())
    }

    const newUser = new User({ id: undefined, name })
    return this.userRepository.save({ user: newUser })
  }
}

module.exports = {
  UserService,
}
