
const User = require('../index2');

describe('User class', () => {
  let user;

  beforeEach(() => {
    
    user = new User('Asmaa mohammed', 'password123');
  });

  describe('addToCart method', () => {
    it('should add a product to the cart', () => {
      const product = { name: 'Product 1', price: 10 };
      user.addToCart(product);
      expect(user.cart).toContain(product);
    });
  });

  describe('calculateTotalCartPrice method', () => {
    it('should calculate the total price of the cart', () => {
      const products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        { name: 'Product 3', price: 30 }
      ];

      products.forEach(product => user.addToCart(product));

      const totalPrice = user.calculateTotalCartPrice();
      expect(totalPrice).toBe(60); 
    });
  });

  describe('checkout method', () => {
    it('should call paymentModel methods and return true if payment is verified', () => {
      const paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify').and.returnValue(true)
      };

      const result = user.checkout(paymentModel);

      
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();

      
      expect(result).toBe(true);
    });

    it('should return false if payment is not verified', () => {
      const paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify').and.returnValue(false)
      };

      const result = user.checkout(paymentModel);

    
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();

      
      expect(result).toBe(false);
    });
  });
});
