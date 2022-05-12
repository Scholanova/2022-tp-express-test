class ResourceNotFoundError extends Error {
  constructor (value) {
    super(value)
  }
}

class UserNameEmptyError extends Error {
  constructor (value) {
    super(value)
  }
}

class InvalidUserNameError extends Error {
  constructor (value) {
    super(value)
  }
}


module.exports = {
  UserNameEmptyError,
  InvalidUserNameError,
  ResourceNotFoundError
}
