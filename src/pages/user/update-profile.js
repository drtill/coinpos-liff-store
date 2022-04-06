import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect, useState } from 'react';

import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
  IoSaveOutline,
  IoCheckboxOutline,
  IoCloseCircleOutline,
  IoCreateOutline

} from 'react-icons/io5';
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
import { set } from 'firebase/database';

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

  var provinceTextData = '';
  var cityTextData = '';
  var districtTextData = '';

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

  var companyLogoData = '';
  var companyName = '';

  var dataPath = '';
  var isInputAddressData = true;
  
  

  
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
  
  if(sessionStorage.getItem('provinceId'))
  {
    provinceIdData = Number(sessionStorage.getItem('provinceId')); 
      
  }
  if(sessionStorage.getItem('countryId'))
  {
    
    countryIdData = Number(sessionStorage.getItem('countryId')); 
    
    
    //alert("Select Id = " + countryIdData);
      
  }
  
  
  if(sessionStorage.getItem('cityId'))
  {
    cityIdData = Number(sessionStorage.getItem('cityId')); 
      
  }
  if(sessionStorage.getItem('districtId'))
  {
    districtIdData = Number(sessionStorage.getItem('districtId')); 
      
  }
  
  
  
  if(sessionStorage.getItem('postalcode'))
  {
    postalCodeData = sessionStorage.getItem('postalcode'); 
      
  }
  
  
  
  
  /*if(sessionStorage.getItem('provinceId'))
  {
    provinceIdData = 1;//Number(sessionStorage.getItem('provinceId')); 
    
    //alert("province Data Id = " + provinceIdData);
  }*/
  
  /* if(sessionStorage.getItem('cityId'))
  {
    cityIdData = Number(sessionStorage.getItem('cityId')); 
      
  }
  if(sessionStorage.getItem('districtId'))
  {
    districtIdData = Number(sessionStorage.getItem('districtId')); 
      
  } */
  
  
  

  if(sessionStorage.getItem('companyId'))
  {
    lineCompanyId = sessionStorage.getItem('companyId');
    //alert('lineCompanyId = ' + lineCompanyId); 
    //companyId = lineCompanyId;
    //handleCompanyId(lineCompanyId);
  }

  const [companyLogo, setCompanyLogo] = useState(companyLogoData);

  const [IsApproveCustomerInfo, setApproveCustomerInfo] = useState(false);
  const [IsEditCustomerInfo, setEditCustomerInfo] = useState(false);
  const [IsDisableCustomerInfo, setDisableCustomerInfo] = useState(true);
  const [customerAddressId, setCustomerAddressId] = useState(customerAddressIdData);
  const [firstName,setCustomerFirstName] = useState(customerFirstName);
  const [lastName,setCustomerLastName] = useState(customerLastName);
  const [email,setCustomerEmail] = useState(customerEmail);
  const [phoneNumber,setCustomerPhoneNumber] = useState(customerPhoneNumber);

  const [address1,setCustomerAddress] = useState(customerAddress1);

  const [provinces, setProvinces] = useState(provincesList);
  const [countrys,setCountry] = useState(countryList);
  const [cities, setCities] = useState(citiesList);
  const [districts, setDistricts] = useState([]);
  const [postalcode, setPostalCode] = useState(postalCodeData);
  const [changePostalcode, setChangePostalCode] = useState(false);


  const [countryId, setCountryId] = useState(countryIdData);
  const [cityId, setCityId] = useState(cityIdData);
  const [provinceId,setProvinceId] = useState(provinceIdData);
  const [districtId,setDistrictId] = useState(districtIdData);

  const [districtText, setDistrictText] = useState(districtTextData);
  const [cityText, setCityText] = useState(cityTextData);
  const [provinceText, setProvinceText] = useState(provinceTextData);
  
  const [isInputAddress, setIsInputAddress] = useState(isInputAddressData);

  const [customerInfoLoading, setCustomerInfoLoading] = useState(false);

  /* useEffect(() => 
  {
    //alert('start');
    if(sessionStorage.getItem('countryId'))
    {
      
      countryIdData = Number(sessionStorage.getItem('countryId')); 
      setCountryId(countryIdData);
      //alert('countryIdData = ' + countryIdData);
      //alert("Select Id = " + countryId);
        
    }
    
    if(sessionStorage.getItem('provinceId'))
    {
      provinceIdData = 1;//Number(sessionStorage.getItem('provinceId')); 
      setProvinceId(provinceIdData);
      alert("province Data Id = " + provinceIdData);
    }
    
    //alert('countryIdData = ' + countryIdData);
    if(Number(countryIdData) !== 10 && Number(countryIdData) !== 0)//thai
    {
      //alert('not thai');
      isInputAddressData = true;
      setIsInputAddress(isInputAddressData);
      if(sessionStorage.getItem('city'))
      {
        cityTextData = sessionStorage.getItem('city'); 
        setCityText(cityTextData);
          
      }
      if(sessionStorage.getItem('district'))
      {
        districtTextData = sessionStorage.getItem('district'); 
        setDistrictText(districtTextData);
      }
      if(sessionStorage.getItem('province'))
      {
        provinceTextData = sessionStorage.getItem('province'); 
        setProvinceText(provinceTextData);
      }
      
      
    }
    else
    {
      //alert('thai')
      isInputAddressData = false;
      setIsInputAddress(isInputAddressData);

      


      if(sessionStorage.getItem('provinces'))
      {
        var provincesJson = sessionStorage.getItem('provinces'); 
        provincesList = JSON.parse(provincesJson);
        //alert('provincesList = ' + provincesList)
        if(provincesList === null)
        {
          setProvinces([]);
        }
        else
        {
          setProvinces(provincesList);
          
        }
        
        
      }
    }

    
    
    if(sessionStorage.getItem('customerId'))
  {
    customerId = sessionStorage.getItem('customerId'); 
    
          
  }
  if(sessionStorage.getItem('dataPath'))
  {
    dataPath = sessionStorage.getItem('dataPath'); 
    
          
  }
  if(sessionStorage.getItem('catalogName'))
  {
    catalogName = sessionStorage.getItem('catalogName'); 
    
          
  }
  if(sessionStorage.getItem('customerAddressId'))
  {
    
    customerAddressIdData = Number(sessionStorage.getItem('customerAddressId')); 
    setCustomerAddressId(customerAddressIdData);
    //alert('customerAddressIdData = ' + customerAddressIdData)
    if(customerAddressIdData !== undefined && customerAddressIdData !== null && customerAddressIdData !== 0)
    {
      //alert('Disable')
      setDisableCustomerInfo(true);
    }
    else
    {
      //alert('Enable')
      setCustomerAddressId(false);
    }
  }

  if(sessionStorage.getItem('customerAddressId'))
  {
    
    customerAddressIdData = Number(sessionStorage.getItem('customerAddressId')); 
    //alert("customerAddressIdData = " + customerAddressIdData)
  }


  if(sessionStorage.getItem('countrysJSON'))
  {
    var countrysJson = sessionStorage.getItem('countrysJSON'); 
    //alert(countrysJson);
    countryList = JSON.parse(countrysJson);
    if(countryList === null)
    {
      setCountry([])
    }
    else
    {
      setCountry(countryList);
    }
    
  }
  
  if(sessionStorage.getItem('cities'))
  {
    //alert('cities');
    var citiesJson = sessionStorage.getItem('cities'); 
    //alert('citiesJson = ' + citiesJson);
    citiesList = JSON.parse(citiesJson);
    if(citiesList === null)
    {
      setCities([]);
    }
    else
    {
      setCities(citiesList);
    }
  }
  if(sessionStorage.getItem('districts'))
  {
    var districtsJson = sessionStorage.getItem('districts'); 
    districtsList = JSON.parse(districtsJson);
    if(districtsList === null)
    {
      setDistricts([]);
    }
    else
    {
      setDistricts(districtsList);
    }
  }


  if(sessionStorage.getItem('companyLogo'))
  {
    companyLogoData = sessionStorage.getItem('companyLogo'); 
    setCompanyLogo(companyLogoData);
    
  }
  if(sessionStorage.getItem('companyName'))
  {
    companyName = sessionStorage.getItem('companyName'); 
    //alert(companyName)
    
  }
  if(sessionStorage.getItem('address1'))
  {
    customerAddress1 = sessionStorage.getItem('address1'); 
    //alert("Address1 = " + customerAddress1);
    setCustomerAddress(customerAddress1);
      
  }
  

  

  
  
  //alert('isInputAddress = ' + isInputAddress)
  //setIsInputAddress(isInputAddress);
    
  },[]); */

  useEffect(() => 
  {
    //alert('countryIdData = ' + countryIdData);
    if(Number(countryIdData) !== 10 && Number(countryIdData) !== 0)//thai
    {
      
      isInputAddressData = true;
      setIsInputAddress(isInputAddressData);
      if(sessionStorage.getItem('city'))
      {
        cityTextData = sessionStorage.getItem('city'); 
        setCityText(cityTextData);
          
      }
      if(sessionStorage.getItem('district'))
      {
        districtTextData = sessionStorage.getItem('district'); 
        setDistrictText(districtTextData);
      }
      if(sessionStorage.getItem('province'))
      {
        provinceTextData = sessionStorage.getItem('province'); 
        setProvinceText(provinceTextData);
      }
      
      //alert('not thai')
    }
    else
    {
      //alert('thai')
      isInputAddressData = false;
      setIsInputAddress(isInputAddressData);
    }

    if(sessionStorage.getItem('customerId'))
  {
    customerId = sessionStorage.getItem('customerId'); 
    //alert('customerId = ' + customerId);
          
  }
  if(sessionStorage.getItem('dataPath'))
  {
    dataPath = sessionStorage.getItem('dataPath'); 
    
          
  }
  if(sessionStorage.getItem('catalogName'))
  {
    catalogName = sessionStorage.getItem('catalogName'); 
    
          
  }
  if(sessionStorage.getItem('customerAddressId'))
  {
    
    customerAddressIdData = Number(sessionStorage.getItem('customerAddressId')); 
    //alert("customerAddressIdData = " + customerAddressIdData)
    setCustomerAddressId(customerAddressIdData);
    if(customerAddressId !== undefined && customerAddressId !== null && customerAddressId !== 0)
    {
      setDisableCustomerInfo(true);
    }
    else
    {
      setCustomerAddressId(false);
    }
  }

  if(sessionStorage.getItem('countrysJSON'))
  {
    var countrysJson = sessionStorage.getItem('countrysJSON'); 
    //alert(countrysJson);
    countryList = JSON.parse(countrysJson);
    if(countryList === null)
    {
      setCountry([])
    }
    else
    {
      setCountry(countryList);
    }
    
  }
  if(sessionStorage.getItem('provinces'))
  {
    var provincesJson = sessionStorage.getItem('provinces'); 
    provincesList = JSON.parse(provincesJson);
    //alert('provincesList = ' + provincesList)
    if(provincesList === null)
    {
      setProvinces([]);
    }
    else
    {
      setProvinces(provincesList);
    }
  }

  setProvinceId(1);
  
  if(sessionStorage.getItem('cities'))
  {
    //alert('cities');
    var citiesJson = sessionStorage.getItem('cities'); 
    //alert('citiesJson = ' + citiesJson);
    citiesList = JSON.parse(citiesJson);
    if(citiesList === null)
    {
      setCities([]);
    }
    else
    {
      setCities(citiesList);
    }
  }
  if(sessionStorage.getItem('districts'))
  {
    var districtsJson = sessionStorage.getItem('districts'); 
    districtsList = JSON.parse(districtsJson);
    if(districtsList === null)
    {
      setDistricts([]);
    }
    else
    {
      setDistricts(districtsList);
    }
  }




  if(sessionStorage.getItem('companyLogo'))
  {
    companyLogoData = sessionStorage.getItem('companyLogo'); 
    setCompanyLogo(companyLogoData);
    
  }
  if(sessionStorage.getItem('companyName'))
  {
    companyName = sessionStorage.getItem('companyName'); 
    //alert(companyName)
    
  }
  if(sessionStorage.getItem('address1'))
  {
    customerAddress1 = sessionStorage.getItem('address1'); 
    //alert("Address1 = " + customerAddress1);
    setCustomerAddress(customerAddress1);
  }
    
  if (Cookies.get('userInfo')) {
    //alert("Get UserInfo");
    const user = JSON.parse(Cookies.get('userInfo'));
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('address', user.address);
    setValue('phone', user.phone);
    setImageUrl(user.image);
  }
    
  },[]);
  


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

  const handleDistrictTextChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setDistrictText(event.target.value)
  }
  const handleCityTextChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setCityText(event.target.value)
  }
  const handleProvinceTextChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setProvinceText(event.target.value)
  }

  const EditCustomerInfo = async () =>
{
  setEditCustomerInfo(true);
  setDisableCustomerInfo(false);
  setApproveCustomerInfo(false);
}
  const handleCountryChange = async(event) => {
    console.log(event.target.value);
    var countryId = parseInt(event.target.value)
    setCountryId(countryId);
    var provincesDataJson = await ProductServices.fetchGetStateProvince();
    //alert(provincesDataJson)

    var provincesData = JSON.parse(provincesDataJson)
    //alert('provincesData = ' + provincesData)
    //alert('provincesData Response = ' + provincesData.provinceResponses);
    //setProvinces(JSON.parse(provincesData.provinceResponse))
    

    setProvinces(provincesData.provinceResponses)
    //setProvinceId(1);
    setCities([]);
    setDistricts([]);
    
    if(countryId === 10)//thai
    {
      setIsInputAddress(false);
    }
    else
    {
      setIsInputAddress(true);
    }
    setPostalCode('');
    
    
}
const handleProvinceChange = async(event) => {
    console.log(event.target.value);
    var stateId = parseInt(event.target.value)
    var citysData = await ProductServices.fetchGetCity({stateId});
    setProvinceId(stateId);
    setCities(citysData);
    setDistricts([]);
    setPostalCode('');
    
}
const handleCityChange = async(event) => {
    console.log(event.target.value);
    var cityId = parseInt(event.target.value)        
    var districtsData = await ProductServices.fetchGetDistrict({cityId});
    setCityId(cityId);
    setDistricts(districtsData);
    setPostalCode('');
    
    
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
  if(sessionStorage.getItem('customerId'))
  {
    customerId = sessionStorage.getItem('customerId'); 
    //alert('customerId = ' + customerId);
          
  }
  if (!imageUrl) {
    notifyError('Image is required!');
    return;
  }
  setLoading(true);

  SaveCustomerInfo(lineCompanyId);

  setCustomerInfoLoading(true);
  //alert(countryId);
  var countryItem = countrys.find(x => x.countryId === countryId);
  //alert('Country = ' + JSON.stringify(countryItem));
    var countryString = countryItem === null ? "" : countryItem.countryLocalName;

    var cityString = '';
    var provinceString = '';
    var districtString = '';
    if(isInputAddress === true)
    {
      cityString = cityText;
      provinceString = provinceText;
      districtString = districtText;
    }
    else
    {
      var cityItem = cities.find(x => x.Id === cityId);
      cityString = cityItem === null ? "" : cityItem.Name_th;

      var provinceItem = provinces.find(x => x.Id === provinceId);
      provinceString = provinceItem === null ? "" : provinceItem.Name_th;

      var districtItem = districts.find(x => x.Id === districtId);
      districtString = districtItem === null ? "" : districtItem.Name_th;
    }

    var postalCodeString = postalcode;
    //alert(companyId)
    //alert(firstName);
    //return;
    if(!checkValid(firstName,lastName,email,phoneNumber, address1, countryId, provinceString, districtString, cityString))
    {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
      //return;
    }
    else
    {
      
      var customerData = await ProductServices.fetchSaveCustomerInfo(
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

        notifySuccess('Update Profile Success!');
        alert(JSON.stringify(customerData));
      sessionStorage.setItem('customerId', customerData.customerId);
          sessionStorage.setItem('customerFirstName', customerData.firstName);
          sessionStorage.setItem('customerLastName', customerData.lastName);
          sessionStorage.setItem('customerEmail', customerData.email);
          sessionStorage.setItem('customerPhoneNumber', customerData.phone);

          sessionStorage.setItem('customerAddressId', customerData.customerAddressId);


          alert('address1 = ' + customerData.address1);
          sessionStorage.setItem('address1', customerData.address1);
          sessionStorage.setItem('countryId', customerData.countryId);
          sessionStorage.setItem('provinceId', customerData.provinceId);
          sessionStorage.setItem('province', customerData.StateOrProvince);
          sessionStorage.setItem('cityId', customerData.cityId);
          sessionStorage.setItem('city', customerData.City);
          sessionStorage.setItem('districtId', customerData.districtId);
          sessionStorage.setItem('district', customerData.District);
          sessionStorage.setItem('postalcode', customerData.postalcode);

          //sessionStorage.setItem('countrys', JSON.stringify(customerData.countrys));
          //setCountry(customerData.countrys);
          //sessionStorage.setItem('provinces', JSON.stringify(customerData.provinces));
          //sessionStorage.setItem('cities', JSON.stringify(customerData.cities));
          //sessionStorage.setItem('districts', JSON.stringify(customerData.districts));
      //var customerAddressId = customerData.customerAddressId;

      dispatch({ type: 'USER_LOGIN', payload: customerData });
      Cookies.set('userInfo', JSON.stringify(customerData));

      localStorage.setItem('userInfo', JSON.stringify(customerData));
    }
    

      
      
}
  const CancelCustomerInfo = async () =>
  {
    setEditCustomerInfo(false);
    setDisableCustomerInfo(true);
    setApproveCustomerInfo(false);
  }
  

  const checkValid = (firstName, lastName, email, phoneNumber, address1, countryId, provinceString, districtString,cityString) =>
{
  var isComplete = true;
  if(firstName.length <= 0)
  {
    isComplete = false;
  }
  if(lastName.length <= 0)
  {
    isComplete = false;
  }
  if(email.length <= 0)
  {
    isComplete = false;
  }
  if(phoneNumber.length <= 0)
  {
    //alert("Contact Error")
    var error = {};
    error['message'] = 'เบอร์ติดต่อว่างไม่ได้';
    setContactError(error);
    isComplete = false;
  }
  if(address1.length <= 0)
  {
    isComplete = false;
  }
  if(countryId === 0)
  {
    isComplete = false;
  }
  if(provinceString.length <= 0)
  {
    isComplete = false;
  }
  if(districtString.length <= 0)
  {
    isComplete = false;
  }
  if(cityString.length <= 0)
  {
    isComplete = false;
  }

  return isComplete;
}

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
        <form onSubmit={onSubmit}>
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
                          isDisable={IsDisableCustomerInfo}
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
                          isDisable={IsDisableCustomerInfo}
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
                          isDisable={IsDisableCustomerInfo}
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
                          isDisable={IsDisableCustomerInfo}
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
                        isDisable={IsDisableCustomerInfo}
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
                          isDisable={IsDisableCustomerInfo}
                          handleItemChange={handleCountryChange}
                          dataList={countrys} selectedId={countryId}
                          />
                        
                        <Error errorName={errors.country} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        
                      {
                              isInputAddress === true 
                              ?
                                
                                <EditableCustomerInput register={register}
                                    id="province"
                                    label="จังหวัด"
                                    name="province"
                                    type="input"
                                    placeholder="Please insert state/province."
                                    isDisable={IsDisableCustomerInfo}
                                    dataValue={provinceText}
                                    changeData={changePostalcode}
                                    canAutoChange={true}
                                    handleDataChange={handleProvinceTextChange}
                                    />
                              :
                              
                              <ProvinceFormSelect register={register}
                              label="จังหวัด"
                              name="province"
                              type="text"
                              isDisable={IsDisableCustomerInfo}
                              handleItemChange={handleProvinceChange}
                              dataList={provinces} selectedId={provinceId}
                              />
                            }
                        <Error errorName={errors.province} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                         {
                              isInputAddress === true 
                              ?
                                <EditableCustomerInput register={register}
                                  id="city"
                                  label="เขต/อำเภอ"
                                  name="province2"
                                  type="input"
                                  placeholder="Please insert city."
                                  isDisable={IsDisableCustomerInfo}
                                  dataValue={cityText}
                                  changeData={changePostalcode}
                                  canAutoChange={true}
                                  handleDataChange={handleCityTextChange}
                                  />
                              :
                              <CityFormSelect register={register}
                              label="เขต/อำเภอ"
                              name="province2"
                              type="text"
                              isDisable={IsDisableCustomerInfo}
                              handleItemChange={handleCityChange}
                              dataList={cities} selectedId={cityId}
                              />
                            }
                        <Error errorName={errors.city} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      {isInputAddress === true 
                            ?
                              
                              <EditableCustomerInput register={register}
                              id="district"
                              label="แขวง/ตำบล"
                              name="district"
                              type="input"
                              placeholder="Please insert district."
                              isDisable={IsDisableCustomerInfo}
                              dataValue={districtText}
                              changeData={changePostalcode}
                              canAutoChange={true}
                              handleDataChange={handleDistrictTextChange}
                              />
                            :
                              <DistrictFormSelect register={register}
                                label="แขวง/ตำบล"
                                name="district"
                                type="text"
                                isDisable={IsDisableCustomerInfo}
                                handleItemChange={handleDistrictChange}
                                dataList={districts} selectedId={districtId}
                                />
                            }
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
                    {/* <div className="col-span-6 sm:col-span-3">
                                  <button
                                    type="button"
                                    
                                    onClick={() => EditCustomerInfo()}
                                    className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                  >
                                    แก้ไขข้อมูลลูกค้า{' '}
                                    <span className="text-xl ml-2">
                                      {' '}
                                      <IoCreateOutline />
                                    </span>
                                  </button>
                                </div>
                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                      <button
                        disabled={loading}
                        type="submit"
                        className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-cyan-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-cyan-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                      >
                        Update Profile
                      </button>
                    </div> */}
                    <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10 text-right">
                      {
                        IsEditCustomerInfo === true
                        ?
                        <>
                          <div className="col-span-6 sm:col-span-3 gap-4 lg:gap-6">
                          </div>
                          <div className="col-span-6 sm:col-span-3 gap-4 lg:gap-6">
                          
                            <button
                                  type="button"
                                  
                                  onClick={() => CancelCustomerInfo()}
                                  className="bg-indigo-50 border border-indigo-100 md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-gray-700 hover:text-gray-800 hover:border-gray-300  px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 h-12 mt-1 mr-2 text-sm lg:text-sm w-full sm:w-auto"
                                >
                                  ยกเลิก{' '}
                                  
                                </button>
                            <button
                              disabled={loading}
                              type="button"
                              onClick={() => SaveCustomerInfo()}
                              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-cyan-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-cyan-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                            >
                              Update Profile
                            </button>
                            
                          </div>
                          </>
                        :
                        <>
                          <div className="col-span-6 sm:col-span-3 gap-4 lg:gap-6">
                          </div>
                          <div className="col-span-6 sm:col-span-3 gap-4 lg:gap-6">
                            
                            <button
                                    type="button"
                                    onClick={() => EditCustomerInfo()}
                                    className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                                  >
                                    แก้ไขข้อมูลลูกค้า{' '}
                                    <span className="text-xl ml-2">
                                      {' '}
                                      <IoCreateOutline />
                                    </span>
                                  </button>
                            
                          </div>
                        </>
                      }
                      
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
