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
    this.discount = value;
    return this.price -= this.discount;
  };
  this.byAmountProduct = function (amountValue) {
    
    if (amountValue > this.amount) {
      return null;
    }
    this.amount -= amountValue;
    return amountValue * this.price;
  };
  
}

Product.prototype = new PrototypesProduct();

const milk = new Product("white milk", 20, 50);

console.log(milk);
console.log(milk.showInfo());
console.log(milk.getDiscountToPrice(10));
console.log(milk.byAmountProduct(20));
console.log(milk.byAmountProduct(31));
// console.log(milk.byAmountProduct(150));
