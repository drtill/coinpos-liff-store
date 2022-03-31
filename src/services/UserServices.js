import requests from './httpServices';

const serviceUrl = 'https://coinpos-uat.azurewebsites.net/lineliff/';
//const serviceUrl = 'http://localhost:41781/lineliff/';
const UserServices = {
  userLogin(body) {
    return requests.post('/user/login', body);
  },
  coinposUserLogin(body) {
    return requests.post('/user/coinPOS-login', body);
  },
  async fetchCoinposUserLogin(body) {
    try {
      //alert("Body = " + JSON.stringify(body));
      const userJson = await findCoinPOSCustomerAccount(body.companyId,body.registerEmail,body.password);//findCoinPOSEmail(req.body.companyId,req.body.email);
  
      //alert('UserJson = ' + userJson )
      if(userJson)
      {
        const user = JSON.parse(userJson);
        //const token = signInToken(user);
        return ({
          //token,
          _id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone,
          image: user.image,
          paramPath: body.paramPath,
          customerId: user.customerId,
          customerName: user.customerName,
          customerTypeId: user.customerTypeId,
          customerType: user.customerType,
          imageUrl: user.imageUrl,
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          customerAddressId: user.customerAddressId,
          countrys: user.countrys,
          provinces: user.provinces,
          cities: user.cities,
          districts: user.districts,
          address1: user.address1,
          postalcode: user.postalcode,
          districtId: user.districtId,
          cityId: user.cityId,
          provinceId: user.provinceId,
          countryId: user.countryId,
          country: user.country,
          province: user.province,
          city: user.city,
          district: user.district,
          
  
  
  
  
        });
      } else {
        return 'Invalid user or password!';
        
      }
    } catch (err) {
      return err.message;
      
    }
  },

  verifyEmailAddress(body) {
    return requests.post('/user/verify-email', body);
  },
  verifyCoinPOSEmailAddress(body) {
    return requests.post('/user/verify-coinpos-email', body);
  },

  userRegister(token, body) {
    return requests.post(`/user/register/${token}`, body);
  },
  coinposUserRegister(token, body) {
    return requests.post(`/user/coinpos-register/${token}`, body);
  },
  coinposCheckExpired(body) {
    return requests.post(`/user/coinpos-check-expired`, body);
  },

  signUpWithProvider(body) {
    return requests.post('/user/signup', body);
  },

  forgetPassword(body) {
    return requests.put('/user/forget-password', body);
  },
  forgetCoinPOSCustomerPassword(body) {
    return requests.put('/user/coinpos-customer-forget-password', body);
  },

  resetPassword(body) {
    return requests.put('/user/reset-password', body);
  },
  resetCoinPOSCustomerPassword(body) {
    return requests.put('/user/coinpos-customer-reset-password', body);
  },

  changePassword(body) {
    return requests.post('/user/change-password', body);
  },

  updateUser(id, body) {
    return requests.put(`/user/${id}`, body);
  },
  getLiffURLTemplate()
  {
    return requests.get(`/user/allUser1`);
  }
};

const findCoinPOSCustomerAccount = async(companyId, email, password) => 
{
  try
  {
    var userData = null;
    await fetch(serviceUrl + 'CoinPOSCustomerAccountLogin',//fetch('http://localhost:5002/simple-cors3', 
    { 
      method:'POST',
      //credentials:"include",
      headers: {'Content-Type': 'application/json','x-security-lock':'0241CCFF2D40AF7AF8A4FC02272C47A30D15DBDFB36E3266D1296212574F328E'},
      body:`{"CompanyId":${companyId},"Email":"${email}", "Password":"${password}"}`
      }).then(function(response) {
        return response.text();
      }).then(function(data) {

        userData = data;
    });
    
    return userData;
      
  }
  catch (err) {
    return "Error: " + err.message;
    
  }
};
export default UserServices;
