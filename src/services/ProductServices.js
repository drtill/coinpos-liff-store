import requests from './httpServices';

const ProductServices = {
  getShowingProducts() {
    return requests.get('/products/show');
  },

  getDiscountedProducts() {
    return requests.get('/products/discount');
  },

  getProductBySlug(slug) {
    return requests.get(`/products/${slug}`);
  },
  getCoinPOSProduct(){
    return requests.get('/products/coinpos');
  },
  getCoinPOSProductService(body){
    return requests.post('/products/coinpos_service',body);
  }
};

export default ProductServices;
