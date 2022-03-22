import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect, useState } from 'react';

//internal import
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import Dashboard from '@pages/user/dashboard';
import InputArea from '@component/form/InputArea';
import EditableCustomerInput from '@component/form/EditableCustomerInput';
import CountryFormSelect from '@component/form/CountryFormSelect';
import ProvinceFormSelect from '@component/form/ProvinceFormSelect';
import CityFormSelect from '@component/form/CityFormSelect';
import DistrictFormSelect from '@component/form/DistrictFormSelect';
import ProductServices from '@services/ProductServices';

// import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import Uploader from '@component/image-uploader/Uploader';
import { notifySuccess, notifyError } from '@utils/toast';

const UpdateProfile = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const { dispatch } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  var lineCompanyId = 0;

  var customerAddressIdData = 0
  var countryIdData = 0;
  var provinceIdData = 0;
  var cityIdData = 0;
  var districtIdData = 0;

  var customerFirstName = '';
  var customerLastName = ''
  var customerEmail = '';
  var customerPhoneNumber = '';

  var customerAddress1 = ''
  var postalCodeData = '';
  
  var countryList = [];
  var provincesList = [];
  var citiesList = [];
  var districtsList = [];

  var catalogName = '';

  var customerId = 0;

  
  if(sessionStorage.getItem('customerId'))
  {
    customerId = sessionStorage.getItem('customerId'); 
    
          
  }

  if(sessionStorage.getItem('catalogName'))
  {
    catalogName = sessionStorage.getItem('catalogName'); 
    
          
  }

  if(sessionStorage.getItem('customerFirstName'))
  {
    
    customerFirstName = sessionStorage.getItem('customerFirstName'); 
    //alert(customerFirstName);  
  }
  if(sessionStorage.getItem('customerLastName'))
  {
    customerLastName = sessionStorage.getItem('customerLastName'); 
      
  }
  if(sessionStorage.getItem('customerEmail'))
  {
    customerEmail = sessionStorage.getItem('customerEmail'); 
      
  }
  if(sessionStorage.getItem('customerPhoneNumber'))
  {
    customerPhoneNumber = sessionStorage.getItem('customerPhoneNumber');
    //if(customerPhoneNumber == )
    //alert(customerPhoneNumber); 
      
  }
  if(sessionStorage.getItem('address1'))
  {
    customerAddress1 = sessionStorage.getItem('address1'); 
    //alert("Address1 = " + customerAddress1);
      
  }
  
  if(sessionStorage.getItem('provinceId'))
  {
    provinceIdData = Number(sessionStorage.getItem('provinceId')); 
      
  }
  if(sessionStorage.getItem('countryId'))
  {
    
    countryIdData = Number(sessionStorage.getItem('countryId')); 
    //alert("Select Id = " + countryId);
      
  }
  
  if(sessionStorage.getItem('cityId'))
  {
    cityIdData = Number(sessionStorage.getItem('cityId')); 
      
  }
  if(sessionStorage.getItem('districtId'))
  {
    districtId = Number(sessionStorage.getItem('districtId')); 
      
  }
  if(sessionStorage.getItem('postalcode'))
  {
    postalCodeData = sessionStorage.getItem('postalcode'); 
      
  }
  if(sessionStorage.getItem('countrys'))
  {
    var countrysJson = sessionStorage.getItem('countrys'); 
    //alert(countrysJson);
    countryList = JSON.parse(countrysJson);
    
  }
  if(sessionStorage.getItem('provinces'))
  {
    var provincesJson = sessionStorage.getItem('provinces'); 
    provincesList = JSON.parse(provincesJson);
  }
  if(sessionStorage.getItem('cities'))
  {
    var citiesJson = sessionStorage.getItem('cities'); 
    citiesList = JSON.parse(citiesJson);
  }
  if(sessionStorage.getItem('districts'))
  {
    var districtsJson = sessionStorage.getItem('districts'); 
    districtsList = JSON.parse(districtsJson);
  }

  if(sessionStorage.getItem('companyId'))
  {
    lineCompanyId = sessionStorage.getItem('companyId');
    //alert(lineCompanyId); 
    //companyId = lineCompanyId;
    //handleCompanyId(lineCompanyId);
  }

  const [firstName,setCustomerFirstName] = useState(customerFirstName);
  const [lastName,setCustomerLastName] = useState(customerLastName);
  const [email,setCustomerEmail] = useState(customerEmail);
  const [phoneNumber,setCustomerPhoneNumber] = useState(customerPhoneNumber);

  const [address1,setCustomerAddress] = useState(customerAddress1);

  const [provinces, setProvinces] = useState(provincesList);
  const [countrys,setCountry] = useState(countryList);
  const [cities, setCities] = useState(citiesList);
  const [districts, setDistricts] = useState(districtsList);
  const [postalcode, setPostalCode] = useState(postalCodeData);
  const [changePostalcode, setChangePostalCode] = useState(false);


  const [countryId, setCountryId] = useState(countryIdData);
  const [cityId, setCityId] = useState(cityIdData);
  const [provinceId,setProvinceId] = useState(provinceIdData);
  const [districtId,setDistrictId] = useState(districtIdData);

  const handleEmailChange = (event) => {  
    setCustomerEmail(event.target.value)
  }
  const handleContactChange = (event) => {  
    setCustomerPhoneNumber(event.target.value)
  }
  const handleFirstNameChange = (event) => {  
    setCustomerFirstName(event.target.value)
  }
  const handleLastNameChange = (event) => {  
    setCustomerLastName(event.target.value)
  }

  const handleCountryChange = async(event) => {
    console.log(event.target.value);
    var countryId = parseInt(event.target.value)
    setCountryId(countryId);
    var provincesData = await ProductServices.getStateProvince();
    
}
const handleProvinceChange = async(event) => {
    console.log(event.target.value);
    var stateId = parseInt(event.target.value)
    var citysData = await ProductServices.getCity({stateId});
    setProvinceId(stateId);
    setCities(citysData);
    
}
const handleCityChange = async(event) => {
    console.log(event.target.value);
    var cityId = parseInt(event.target.value)        
    var districtsData = await ProductServices.getDistrict({cityId});
    setCityId(cityId);
    setDistricts(districtsData);
    
    
}
const handleDistrictChange = async(event) => {
    console.log(event.target.value);
    var districtId = parseInt(event.target.value)     
    setDistrictId(districtId);   
    PopulatePostalCode(districtId)
    
}

const PopulatePostalCode = (id) =>
{
  for(var i=0;i<districts.length;i++)
  {
    var item = districts[i];
    if(item !== null)
    {
      if(item.Id === id)
      {
        
        setChangePostalCode(true);
        setPostalCode(districts[i].ZipCode);
      }
    }
  }
}

const handlePostalCodeChange = (event) => {  
  //alert("aaaa" + event.target.value);
  setPostalCode(event.target.value)
}
const handleAddress1Change = (event) => {  
  //alert("aaaa" + event.target.value);
  setCustomerAddress(event.target.value)
}
  const onSubmit = (data) => {
     if (!imageUrl) {
       notifyError('Image is required!');
       return;
     }
     setLoading(true);

     SaveCustomerInfo(lineCompanyId);

    //notifySuccess('For demo this feature is disable!');

     /*const userData = {
       name: data.name,
       email: data.email,
       address: data.address,
       phone: data.phone,
       image: imageUrl,
     };*/
    // UserServices.updateUser(userInfo._id, userData)
    //   .then((res) => {
    //     if (res) {
    //       setLoading(false);
    //       notifySuccess('Profile Update Successfully!');
    //       Cookies.set('userInfo', JSON.stringify(res));
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     notifyError(err ? err?.response?.data?.message : err.message);
    //   });
  };

  const SaveCustomerInfo = async (companyId) =>
{
  //alert(countryId);
  var countryItem = countrys.find(x => x.countryId === countryId);
  //alert(JSON.stringify(countryItem));
    var countryString = countryItem === null ? "" : countryItem.countryLocalName;

    //alert("cityId = " + cityId);
    var cityItem = cities.find(x => x.Id === cityId);
    //alert(JSON.stringify(cityItem));
    
    var cityString = cityItem === null ? "" : cityItem.Name_th;
    
    //alert("provinceId = " + provinceId);
    var provinceItem = provinces.find(x => x.Id === provinceId);
    //alert(JSON.stringify(provinceItem));
    var provinceString = provinceItem === null ? "" : provinceItem.Name_th;

    //alert("districtId = " + districtId);
    var districtItem = districts.find(x => x.Id === districtId);
    //alert(JSON.stringify(districtItem));
    var districtString = districtItem === null ? "" : districtItem.Name_th;

    var postalCodeString = postalcode;
    alert(companyId)
    alert(firstName);
    //return;
    var customerData = await ProductServices.saveCustomerInfo(
      {
        firstName:firstName,
        middleName:'',
        lastName:lastName,
        gender:0,
        phone:phoneNumber,
        mobile:phoneNumber,
        email:email,
        address1:address1,
        district:districtString,
        city:cityString,
        stateOrProvince:provinceString,
        country:countryString,
        countryId:countryId,
        customerId:customerId,
        postalcode:postalCodeString,
        companyId:companyId,
        catalogName:catalogName,
        imageUrl:imageUrl

      });
      alert(JSON.stringify(customerData));

      notifySuccess('Update Profile Success!');
      sessionStorage.setItem('customerId', customerData.customerId);
          sessionStorage.setItem('customerFirstName', customerData.firstName);
          sessionStorage.setItem('customerLastName', customerData.lastName);
          sessionStorage.setItem('customerEmail', customerData.email);
          sessionStorage.setItem('customerPhoneNumber', customerData.phone);

          sessionStorage.setItem('customerAddressId', customerData.customerAddressId);


          sessionStorage.setItem('address1', customerData.address1);
          sessionStorage.setItem('countryId', customerData.countryId);
          sessionStorage.setItem('provinceId', customerData.provinceId);
          sessionStorage.setItem('cityId', customerData.cityId);
          sessionStorage.setItem('districtId', customerData.districtId);
          sessionStorage.setItem('postalcode', customerData.postalcode);

          sessionStorage.setItem('countrys', JSON.stringify(customerData.countrys));
          sessionStorage.setItem('provinces', JSON.stringify(customerData.provinces));
          sessionStorage.setItem('cities', JSON.stringify(customerData.cities));
          sessionStorage.setItem('districts', JSON.stringify(customerData.districts));
      //var customerAddressId = customerData.customerAddressId;

      dispatch({ type: 'USER_LOGIN', payload: customerData });
      Cookies.set('userInfo', JSON.stringify(customerData));

      localStorage.setItem('userInfo', JSON.stringify(customerData));
      
}

  useEffect(() => {
    
    //alert("Get User");
    if (Cookies.get('userInfo')) {
      alert("Get UserInfo");
      const user = JSON.parse(Cookies.get('userInfo'));
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('address', user.address);
      setValue('phone', user.phone);
      setImageUrl(user.image);
    }
  }, []);

  return (
    <Dashboard title="Update-Profile" description="This is edit profile page">
      <div className="max-w-screen-2xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-serif font-semibold mb-5">
                Update Profile
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="bg-white space-y-6">
              <div>
                <Label label="Photo" />
                <div className="mt-1 flex items-center">
                  <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid-cols-6 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="lg:mt-6 mt-4 bg-white">
                    <div className="form-group">
                      <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                        Personal Details
                      </h2>
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <EditableCustomerInput register={register}
                          label="First Name" 
                          name="firstName"
                          type="text"
                          placeholder="John"
                          isDisable={false}
                            dataValue={firstName}
                            canAutoChange={true}
                          handleDataChange={handleFirstNameChange}
                          />
                          <Error errorName={errors.firstName} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <EditableCustomerInput register={register}
                          label="Last Name" 
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          isDisable={false}
                            dataValue={lastName}
                            canAutoChange={true}
                          handleDataChange={handleLastNameChange}
                          />
                          <Error errorName={errors.lastName} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          
                          <EditableCustomerInput register={register}
                          label="Email address"
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                          isDisable={false}
                          dataValue={email}

                          canAutoChange={true}
                          handleDataChange={handleEmailChange}
                          />
                          <Error errorName={errors.email} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <EditableCustomerInput register={register}
                          label="Phone number"
                          name="contact"
                          type="tel"
                          placeholder="+062-6532956"
                          isDisable={false}
                          dataValue={phoneNumber}
                          canAutoChange={true}
                          handleDataChange={handleContactChange}
                          />

                          <Error errorName={errors.contact} />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mt-12">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      Shipping Address
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                        <EditableCustomerInput register={register}
                        label="Street address"
                        name="address"
                        type="text"
                        placeholder="123 Boulevard Rd, Beverley Hills"
                        isDisable={false}
                        dataValue={address1}
                        canAutoChange={true}
                        handleDataChange={handleAddress1Change}
                        />
                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <CountryFormSelect register={register}
                          label="Country"
                          name="province1"
                          type="text"
                          isDisable={false}
                          handleItemChange={handleCountryChange}
                          dataList={countrys} selectedId={countryId}
                          />
                        
                        <Error errorName={errors.country} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <ProvinceFormSelect register={register}
                          label="Province"
                          name="province"
                          type="text"
                          isDisable={false}
                          handleItemChange={handleProvinceChange}
                          dataList={provinces} selectedId={provinceId}
                          />
                        <Error errorName={errors.province} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <CityFormSelect register={register}
                          label="City"
                          name="province2"
                          type="text"
                          isDisable={false}
                          handleItemChange={handleCityChange}
                          dataList={cities} selectedId={cityId}
                          />
                        <Error errorName={errors.city} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <DistrictFormSelect register={register}
                          label="District"
                          name="district"
                          type="text"
                          isDisable={false}
                          handleItemChange={handleDistrictChange}
                          dataList={districts} selectedId={districtId}
                          />
                        <Error errorName={errors.district} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        
                        <EditableCustomerInput register={register}
                        id="postalCode"
                        label="ZIP / Postal"
                        name="zipCode"
                        type="input"
                        placeholder="12345"
                        isDisable={false}
                        dataValue={postalcode}
                        changeData={changePostalcode}
                        canAutoChange={true}
                        handleDataChange={handlePostalCodeChange}
                        />
                        
                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>
                  </div>
                    {/* <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="Full Name"
                        />
                        <Error errorName={errors.name} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Your Address"
                          name="address"
                          type="text"
                          placeholder="Your Address"
                        />
                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Phone/Mobile"
                          name="phone"
                          type="tel"
                          placeholder="Your Mobile Number"
                        />
                        <Error errorName={errors.phone} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                        />
                        <Error errorName={errors.email} />
                      </div>
                    </div> */}
                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                      <button
                        disabled={loading}
                        type="submit"
                        className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default dynamic(() => Promise.resolve(UpdateProfile), { ssr: false });
