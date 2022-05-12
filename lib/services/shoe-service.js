class ShoeService {
  constructor({ shoeRepository }) {
    this.shoeRepository = shoeRepository
  }

  calculateUserCollectionValue({ userId }) {
    return undefined
  }
}

module.exports = {
  ShoeService,
}
