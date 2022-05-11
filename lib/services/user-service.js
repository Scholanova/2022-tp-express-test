class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  createNewUser({ name }) {
    return undefined
  }
}

module.exports = {
  UserService,
}
