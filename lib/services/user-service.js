const { User } = require('../models/user')
const { InvalidUserNameError } = require('../errors')

class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  createNewUser({ name }) {
    if (name.length < 5) {
      return Promise.reject(new InvalidUserNameError())
    }

    const newUser = new User({ id: undefined, name })
    return this.userRepository.save({ user: newUser })
  }
}

module.exports = {
  UserService,
}
