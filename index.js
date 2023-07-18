function Product(nameOfProduct, price, amount) {
  this.nameOfProduct = nameOfProduct;
  this.price = price;
  this.amount = amount;
  this.discount = 0;
}

function PrototypesProduct() {
  this.showInfo = function () {
    return `
    name ${this.nameOfProduct}
    price ${this.price}
    amuunt ${this.amount}
    discount ${this.discount}`;
  };
  this.getDiscountToPrice = function (value) {
    this[this.discount] = value;
    return ++this.discount;
  };
  this.byAmountProduct = function (amountValue) {
    this.rest = amountValue;
    if (this.rest > this.amount) {
      return null;
    }
    return this.rest * (this.price - this.discount);
  };
}

Product.prototype = new PrototypesProduct();

const milk = new Product("white milk", 10, 50);

console.log(milk);
console.log(milk.showInfo());
console.log(milk.getDiscountToPrice());
console.log(milk.byAmountProduct(3));
console.log(milk.byAmountProduct(150));
