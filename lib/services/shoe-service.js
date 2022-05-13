class ShoeService {
  constructor({ shoeRepository }) {
    this.shoeRepository = shoeRepository
  }

  calculateUserCollectionValue({ userId }) {
    return this.shoeRepository.listForUserId({ userId })
      .then((shoes) => {
        return shoes.reduce((accumulateur, shoe )=> {
          switch (shoe.brand) {
            case 'Bacoste':
              return accumulateur + 150
            case 'Bucci':
              return accumulateur + 250
            case 'Bobotin':
              return accumulateur + 350
            default:
              return accumulateur + 100
          }
        }, 0);
      })
  }
}

module.exports = {
  ShoeService,
}