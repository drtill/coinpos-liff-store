import React, { useEffect } from 'react';
import { useState } from 'react'
import dynamic from 'next/dynamic';
import { CardElement } from '@stripe/react-stripe-js';
import Link from 'next/link';
import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
  IoSaveOutline
} from 'react-icons/io5';
import { ImCreditCard,ImClearFormatting,ImFileEmpty } from 'react-icons/im';

//import { Combobox } from '@headlessui/react'
import Dropdown from 'react-dropdown';
//internal import
import Layout from '@layout/Layout';
import Label from '@component/form/Label';
import Error from '@component/form/Error';
import CartItem from '@component/cart/CartItem';
import InputArea from '@component/form/InputArea';
import CountryFormSelect from '@component/form/CountryFormSelect';
import ProvinceFormSelect from '@component/form/ProvinceFormSelect';
import CityFormSelect from '@component/form/CityFormSelect';
import DistrictFormSelect from '@component/form/DistrictFormSelect';
import ShippingFormSelect from '@component/form/ShippingFormSelect';
import InputShipping from '@component/form/InputShipping';
import InputPayment from '@component/form/InputPayment';
import useCheckoutSubmit from '@hooks/useCheckoutSubmit';
import BankTransferPayment from '@component/form/BankTransferPayment';
import QRPaymentPayment from '@component/form/QRPaymentPayment';

import {Form} from 'react-bootstrap';
import ProductServices from '@services/ProductServices';

import EditableCustomerInput from '@component/form/editableCustomerInput';
/* import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css"; */

const Checkout = () => {
  const {
    handleSubmit,
    submitHandler,
    handleShippingCost,
    register,
    errors,
    showCard,
    setShowCard,
    error,
    stripe,
    couponInfo,
    couponRef,
    handleCouponCode,
    discountAmount,
    shippingCost,
    total,
    isEmpty,
    items,
    cartTotal,
    isCheckoutSubmit,
    orderId,
    companyId,
    linePOSId,
    liffId,
    pictureUrl,
    handleShippingId,
    handleShippingName,
  } = useCheckoutSubmit();

  

  var disDetailsData = [];

  var totalDiscountData = 0;
  if(sessionStorage.getItem('discountDetails'))
    {
      var discountDetailsJson = sessionStorage.getItem('discountDetails'); 
      
      //alert(discountDetailsJson);
      disDetailsData = JSON.parse(discountDetailsJson);
      
      if(disDetailsData !== null)
      {
        totalDiscountData = disDetailsData.reduce((discountTotal, item) => (discountTotal += item.discount),0);
        //setTotalDiscount(totalDiscountVal);
      }
    }

  const [discountDetails, setDiscountDetail] = useState(disDetailsData);
  const [totalDiscount, setTotalDiscount] = useState(totalDiscountData);
  
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
  var shippingsList = [];
  

  var customerAddressIdData = 0
  var countryIdData = 0;
  //const [countryId,setCountryId] = useState(0);
  var provinceIdData = 0;
  var cityIdData = 0;
  var districtIdData = 0;
  var shippingId = 0;

  var countrysData = [];

  var salesOrderId = 0;
  var lineLiffId = '';
  var lineLiffUserId = '';
  
  var lineCompanyId = 0;


  var companyLogo = '';
  var companyName = '';
  var locationName = '';
  var locationAddress1 = '';
  var locationAddress2 = '';
  var locationCity = '';
  var locationStateOrProvince = '';
  var locationCountry = '';
  var locationPostalCode = '';
  var locationEmail = '';
  var locationTel = '';

  var catalogName = '';
  var dataPath = '';
  var customerId = 0;

  useEffect(() => 
  {

    
  });
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
    //alert("customerAddressIdData = " + customerAddressIdData)
  }
  if(sessionStorage.getItem('companyLogo'))
  {
    companyLogo = sessionStorage.getItem('companyLogo'); 
    
  }
  if(sessionStorage.getItem('companyName'))
  {
    companyName = sessionStorage.getItem('companyName'); 
    //alert(companyName)
    
  }
  if(sessionStorage.getItem('locationName'))
  {
    locationName = sessionStorage.getItem('locationName'); 
    
  }
  if(sessionStorage.getItem('locationAddress1'))
  {
    locationAddress1 = sessionStorage.getItem('locationAddress1'); 
    
  }
  if(sessionStorage.getItem('locationAddress2'))
  {
    locationAddress2 = sessionStorage.getItem('locationAddress2'); 
    
  }
  if(sessionStorage.getItem('locationCity'))
  {
    locationCity = sessionStorage.getItem('locationCity'); 
    
  }
  if(sessionStorage.getItem('locationStateOrProvince'))
  {
    locationStateOrProvince = sessionStorage.getItem('locationStateOrProvince'); 
    
  }
  if(sessionStorage.getItem('locationCountry'))
  {
    locationCountry = sessionStorage.getItem('locationCountry'); 
    
  }
  if(sessionStorage.getItem('locationPostalCode'))
  {
    locationPostalCode = sessionStorage.getItem('locationPostalCode'); 
    
  }
  if(sessionStorage.getItem('locationEmail'))
  {
    locationEmail = sessionStorage.getItem('locationEmail'); 
    
  }
  if(sessionStorage.getItem('locationTel'))
  {
    locationTel = sessionStorage.getItem('locationTel'); 
    
  }
      
  if(sessionStorage.getItem('orderId'))
  {
    salesOrderId = sessionStorage.getItem('orderId'); 
    //orderId = salesOrderId;
  }
  if(sessionStorage.getItem('liffId'))
  {
    lineLiffId = sessionStorage.getItem('liffId');
    //alert(lineLiffId) 
    //liffId = lineLiffId;
    //handleLiffId(lineLiffId);
  }
  if(sessionStorage.getItem('linePOSId'))
  {
    lineLiffUserId = sessionStorage.getItem('linePOSId'); 
    //linePOSId = lineLiffUserId;
    //handleLinePOSId(lineLiffUserId);
  }
  if(sessionStorage.getItem('companyId'))
  {
    lineCompanyId = sessionStorage.getItem('companyId');
    //alert(lineCompanyId); 
    //companyId = lineCompanyId;
    //handleCompanyId(lineCompanyId);
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
    districtIdData = Number(sessionStorage.getItem('districtId')); 
      
  }
  if(sessionStorage.getItem('postalcode'))
  {
    postalCodeData = sessionStorage.getItem('postalcode'); 
      
  }
  if(sessionStorage.getItem('shippingId'))
  {
    shippingId = sessionStorage.getItem('shippingId'); 
      
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
  if(sessionStorage.getItem('shippings'))
  {
    var shippingsJson = sessionStorage.getItem('shippings'); 
    shippingsList = JSON.parse(shippingsJson);
  }
  
  const [IsApproveCustomerInfo, setApproveCustomerInfo] = useState(false);
  const [IsEditCustomerInfo, setEditCustomerInfo] = useState(false);
  const [IsDisableCustomerInfo, setDisableCustomerInfo] = useState(customerAddressIdData !== 0);
  const [customerAddressId, setCustomerAddressId] = useState(customerAddressIdData);
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
  const [shippingServices, setShippings] = useState(shippingsList);

  const [countryId, setCountryId] = useState(countryIdData);
  const [cityId, setCityId] = useState(cityIdData);
  const [provinceId,setProvinceId] = useState(provinceIdData);
  const [districtId,setDistrictId] = useState(districtIdData);
  

  const [qrShow, setQRShow] = useState(false);
  const [bankShow, setBankShow] = useState(false);
  const [qrUrl, setQRUrl] = useState('');

  /* if(sessionStorage.getItem('countrys'))
  {
    var countrysJson = sessionStorage.getItem('countrys'); 
    //alert(countrysJson);
    countrys = JSON.parse(countrysJson);
    setCountrys(countrys)
  }
  if(sessionStorage.getItem('provinces'))
  {
    var provincesJson = sessionStorage.getItem('provinces'); 
    provinces = JSON.parse(provincesJson);
  }
  if(sessionStorage.getItem('cities'))
  {
    var citiesJson = sessionStorage.getItem('cities'); 
    cities = JSON.parse(citiesJson);
  }
  if(sessionStorage.getItem('districts'))
  {
    var districtsJson = sessionStorage.getItem('districts'); 
    districts = JSON.parse(districtsJson);
  } */

  const UpdateTotal = (id,qty,discountRate) =>
  {
    //alert("UpdateTotal");
    var totalDiscountValue = 0;
    for(var i=0;i<items.length;i++)
    {
      var item = items[i];
      if(item.id === id)
      {
        totalDiscountValue += (qty * item.price) * discountRate; 

      }
      else
      {
        for(var j=0;j<discountDetails.length;j++)
        {
          var discountItem = discountDetails[j];
          if(discountItem.id === item.id)
          {
            totalDiscountValue += (item.quantity * item.price * discountItem.discountRate);
          } 
        }
        
      }
    }
    alert(totalDiscountValue);
    setTotalDiscount(totalDiscountValue);
  }
  const submitContact = async (event) => {
    event.preventDefault();
    
    //alert(`submitContact`);
    //alert(`So your name is ${firstName}?`);
    var data = {};

    data["firstName"] = firstName;
    data["lastName"] = lastName;
    //alert(email);
    data["email"] = email;


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

    //alert(phoneNumber);

    data["address"] = address1;//event.target.address.value;
    data["contact"] = phoneNumber;//event.target.contact.value;

    data["country"] = countryString;

    //var cityItem = cities.find(x => x.Id == event.target.province2.value);
    data["city"] = cityString;//cityItem === null ? "" : cityItem.Name_th;

    //var provinceItem = provinces.find(x => x.Id == event.target.province.value);
    data["province"] = provinceString;//provinceItem === null ? "" : provinceItem.Name_th;

    //var districtItem = districts.find(x => x.Id == event.target.district.value);
    data["district"] = districtString;//districtItem === null ? "" : districtItem.Name_th;

    //alert(postalCodeString);
    data["postalCode"] = postalCodeString;//event.target.postalCode.value;
    

    
    if(catalogName !== null)
    {
      var orderDetails = [];
      for(var i = 0;i<items.length;i++)
      {
        var itemData = items[i];
        var orderDetail = {
          VariantId:itemData.id,
          Quantity:itemData.quantity,
          ProductVariantLabel:itemData.title,
          UnitPrice:itemData.price
        };
         
        orderDetails.push(orderDetail);
      }

      data["orderDetails"] = JSON.stringify(orderDetails);
      data["catalogName"] = catalogName;

    }



    submitHandler(data);
  };

  const handlePostalCodeChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setPostalCode(event.target.value)
  }
  const handleAddress1Change = (event) => {  
    //alert("aaaa" + event.target.value);
    setCustomerAddress(event.target.value)
  }

  const handleEmailChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setCustomerEmail(event.target.value)
  }
  const handleContactChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setCustomerPhoneNumber(event.target.value)
  }
  const handleFirstNameChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setCustomerFirstName(event.target.value)
  }
  const handleLastNameChange = (event) => {  
    //alert("aaaa" + event.target.value);
    setCustomerLastName(event.target.value)
  }

  const handleShippingChange = async(event) => {
    console.log(event.target.value);
    //alert('shipping Id = ' + event.target.value);
    var shippingData = event.target.value;
    var shippingDatas = shippingData.split(':');

    var shippingCost = 0.00;
    if(shippingDatas.length > 1)
    {
      shippingCost = parseFloat(shippingDatas[1]);
    }
    
    //alert('shipping cost = ' + shippingCost);
    handleShippingCost(shippingCost);
    
    handleShippingId(Number(shippingDatas[0]))
    var shippingName = '';
    for(var i = 0; i<shippingServices.length;i++)
    {
       if(shippingServices[i].providerId == Number(shippingDatas[0]))
       {
        
         shippingName = shippingServices[i].serviceName;
         //alert('shippingName = ' + shippingName)
       }
    }
    handleShippingName(shippingName)
}
const handleCountryChange = async(event) => {
    console.log(event.target.value);
    var countryId = parseInt(event.target.value)
    setCountryId(countryId);
    //alert('country Id = ' + countryId);
    var provincesData = await ProductServices.getStateProvince();
    //var provinces = await GetStateProvince()
    //PopulateProvince(provinces)
    
}
const handleProvinceChange = async(event) => {
    console.log(event.target.value);
    var stateId = parseInt(event.target.value)
    //alert('state Id = ' + stateId);
    var citysData = await ProductServices.getCity({stateId});
    //alert(JSON.stringify(citysData));
    setProvinceId(stateId);
    setCities(citysData);
    //var citys = await GetCity(stateId)
    //PopulateCity(citys)
    
}
const handleCityChange = async(event) => {
    console.log(event.target.value);
    var cityId = parseInt(event.target.value)        
    //alert('city Id = ' + cityId);
    var districtsData = await ProductServices.getDistrict({cityId});
    setCityId(cityId);
    //alert(JSON.stringify(districtsData));
    setDistricts(districtsData);
    //PopulateDistrict(districts)
    
}
const handleDistrictChange = async(event) => {
    console.log(event.target.value);
    var districtId = parseInt(event.target.value)     
    setDistrictId(districtId);   
    //alert('district Id = ' + districtId);
    //setPostalCode(districtId);
    //set
    PopulatePostalCode(districtId)
    //setCustomerAddress(event.target.value)
    
}

const PopulatePostalCode = (id) =>
{
  //setData(id);
  for(var i=0;i<districts.length;i++)
  {
    var item = districts[i];
    if(item !== null)
    {
      if(item.Id === id)
      {
        //alert(districts[i].ZipCode);
        //alert(document.getElementById("postalCode").value);
        //alert(document.getElementById("postalCode").defaultValue);
        //document.getElementById("postalCode").value = districts[i].ZipCode;
        //document.getElementById("postalCode").defaultValue = districts[i].ZipCode;
        setChangePostalCode(true);
        setPostalCode(districts[i].ZipCode);
      }
    }
  }
}

const AcceptCustomerInfo = async () =>
{
  //alert("AcceptCustomerInfo");
  setEditCustomerInfo(false);
  setDisableCustomerInfo(true);
  setApproveCustomerInfo(true);
}

const EditCustomerInfo = async () =>
{
  setEditCustomerInfo(true);
  setDisableCustomerInfo(false);
  setApproveCustomerInfo(false);
}
const CancelCustomerInfo = async () =>
{
  setEditCustomerInfo(false);
  setDisableCustomerInfo(true);
  setApproveCustomerInfo(false);
}
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
    //alert(companyId)
    //alert(firstName);
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
        postalcode:postalCodeString,
        companyId:companyId,
        catalogName:catalogName,
        customerId:customerId

      });
      //alert(JSON.stringify(customerData));
      var customerAddressId = customerData.customerAddressId;
      setCustomerAddressId(customerAddressId);
      setEditCustomerInfo(false);
      setDisableCustomerInfo(true);
}


  var currencySign = '';
    if(sessionStorage.getItem('currencySign'))
    {
      currencySign = sessionStorage.getItem('currencySign'); 
      //alert('liffId = ' + sessionStorage.getItem('liffId'))
    }
    
  return (
    <>
      <Layout title="Checkout" description="this is checkout page" dataPath={dataPath} companyName={companyName} locationName={locationName} companyLogo={companyLogo}  
      locationAddress1={locationAddress1} locationAddress2={locationAddress2} locationCity={locationCity}
      locationStateOrProvince={locationStateOrProvince} locationCountry={locationCountry} locationPostalCode={locationPostalCode}
      locationEmail={locationEmail} locationTel={locationTel}>
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              
              <div className="mt-5 md:mt-0 md:col-span-2">
                {/* <form onSubmit={handleSubmit(submitHandler)}> */}
                <form onSubmit={submitContact}>
                  <div className="form-group">
                    <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                      01. ข้อมูลส่วนบุคคล
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        {/* <InputArea
                          register={register}
                          label="First Name"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          dataValue={firstName}
                        /> */}
                        
                        <EditableCustomerInput register={register}
                        label="ชื่อต้น" 
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
                        {/* <InputArea
                          register={register}
                          label="Last name"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          dataValue={lastName}
                        /> */}
                        <EditableCustomerInput register={register}
                        label="นามสกุล" 
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
                        {/* <InputArea
                          register={register}
                          label="Email address"
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                          dataValue={email}
                        /> */}
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
                        {/* <InputArea
                          register={register}
                          label="Phone number"
                          name="contact"
                          type="tel"
                          placeholder="+062-6532956"
                          dataValue={phoneNumber}
                        /> */}
                        <EditableCustomerInput register={register}
                        label="เบอร์ติดต่อ"
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
                      02. ที่อยู่ขนส่ง
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                        {/* <InputArea
                          register={register}
                          label="Street address"
                          name="address"
                          type="text"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                          dataValue={address1}
                        /> */}
                        <EditableCustomerInput register={register}
                        label="บ้านเลขที่ ซอย ถนน"
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
                        {/* <InputArea
                          register={register}
                          label="City"
                          name="city"
                          type="text"
                          placeholder="Los Angeles"
                        /> */}
                        
                        <CountryFormSelect register={register}
                          label="ประเทศ"
                          name="province1"
                          type="text"
                          isDisable={IsDisableCustomerInfo}
                          handleItemChange={handleCountryChange}
                          dataList={countrys} selectedId={countryId}
                          />
                        
                        <Error errorName={errors.country} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        {/* <InputArea
                          register={register}
                          label="Country"
                          name="country"
                          type="text"
                          placeholder="United States"
                        /> */}
                        <ProvinceFormSelect register={register}
                          label="จังหวัด"
                          name="province"
                          type="text"
                          isDisable={IsDisableCustomerInfo}
                          handleItemChange={handleProvinceChange}
                          dataList={provinces} selectedId={provinceId}
                          />
                        <Error errorName={errors.province} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        {/* <InputArea
                          register={register}
                          label="ZIP / Postal"
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                        /> */}
                        <CityFormSelect register={register}
                          label="เขต/อำเภอ"
                          name="province2"
                          type="text"
                          isDisable={IsDisableCustomerInfo}
                          handleItemChange={handleCityChange}
                          dataList={cities} selectedId={cityId}
                          />
                        <Error errorName={errors.city} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        {/* <InputArea
                          register={register}
                          label="ZIP / Postal"
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                        /> */}
                        <DistrictFormSelect register={register}
                          label="แขวง/ตำบล"
                          name="district"
                          type="text"
                          isDisable={IsDisableCustomerInfo}
                          handleItemChange={handleDistrictChange}
                          dataList={districts} selectedId={districtId}
                          />
                        <Error errorName={errors.district} />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        {/* <InputArea
                          register={register}
                          label="ZIP / Postal"
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                          dataValue={postalcode}
                        /> */}
                        <EditableCustomerInput register={register}
                        id="postalCode"
                        label="รหัสไปรษณีย์"
                        name="zipCode"
                        type="input"
                        placeholder="12345"
                        isDisable={IsDisableCustomerInfo}
                        dataValue={postalcode}
                        changeData={changePostalcode}
                        canAutoChange={true}
                        handleDataChange={handlePostalCodeChange}
                        />
                        
                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>

                    {/* <Label label="Shipping Cost" /> */}
                    
                  </div>
                  {
                    customerAddressId === 0 ?
                      <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                        <div className="col-span-6 sm:col-span-3">

                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <button
                            type="button"
                            disabled={isEmpty || !stripe || isCheckoutSubmit}
                            onClick={() => SaveCustomerInfo(lineCompanyId)}
                            className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                          >
                            บันทึกข้อมูลลูกค้า{' '}
                            <span className="text-xl ml-2">
                              {' '}
                              <IoSaveOutline />
                            </span>
                          </button>
                        </div>
                      </div>
                    :
                      
                        IsEditCustomerInfo === true ?
                          <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                          
                            <div className="col-span-6 sm:col-span-3">
                              <button
                                type="button"
                                disabled={isEmpty || !stripe || isCheckoutSubmit}
                                onClick={() => CancelCustomerInfo()}
                                className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full"
                              >
                                ยกเลิก{' '}
                                <span className="text-xl ml-2">
                                  {' '}
                                  <IoSaveOutline />
                                </span>
                              </button>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <button
                                type="button"
                                disabled={isEmpty || !stripe || isCheckoutSubmit}
                                onClick={() => SaveCustomerInfo(lineCompanyId)}
                                className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                              >
                                บันทึกข้อมูลลูกค้า{' '}
                                <span className="text-xl ml-2">
                                  {' '}
                                  <IoSaveOutline />
                                </span>
                              </button>
                            </div>
                          </div>
                        :
                          <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                            
                            <div className="col-span-6 sm:col-span-3">
                              <button
                                type="button"
                                disabled={isEmpty || !stripe || isCheckoutSubmit}
                                onClick={() => AcceptCustomerInfo()}
                                className="bg-orange-500 hover:bg-orange-600 border border-orange-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                              >
                                อนุมัติข้อมูลลูกค้า{' '}
                                <span className="text-xl ml-2">
                                  {' '}
                                  <IoSaveOutline />
                                </span>
                              </button>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <button
                                type="button"
                                disabled={isEmpty || !stripe || isCheckoutSubmit}
                                onClick={() => EditCustomerInfo()}
                                className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                              >
                                แก้ไขข้อมูลลูกค้า{' '}
                                <span className="text-xl ml-2">
                                  {' '}
                                  <IoSaveOutline />
                                </span>
                              </button>
                            </div>
                          </div>
                      
                      
                  }
                  

                  {
                  customerAddressId === 0 ? 
                    <>
                      <br/>
                      <h2 className="font-semibold font-serif text-base text-center text-gray-700 pb-3">
                        Please save customer info before confirm order. 
                      </h2>
                    </> 
                  : 
                    IsApproveCustomerInfo === false ?
                      <>
                        <br/>
                        <h2 className="font-semibold font-serif text-base text-center text-gray-700 pb-3">
                          Please approve customer info before confirm order. 
                        </h2>
                      </>
                    :
                    <>
                      <div className="form-group mt-12">
                            <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                              03. รูปแบบขนส่ง
                            </h2>
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                              <ShippingFormSelect register={register}
                                label="Shipping"
                                name="shippingOption"
                                type="text"
                                handleItemChange={handleShippingChange} 
                                dataList={shippingServices} selectedId={shippingId}/>
                              </div>
                              
                              
                            </div>
                            
                          </div>
      
                          <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                            <div className="col-span-6 sm:col-span-3">
                              <Link href={dataPath}>
                                <a className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full">
                                  <span className="text-xl mr-2">
                                    <IoReturnUpBackOutline />
                                  </span>
                                  ช็อบต่อ
                                </a>
                              </Link>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <button
                                type="submit"
                                disabled={isEmpty || !stripe || isCheckoutSubmit}
                                className="bg-cyan-500 hover:bg-cyan-600 border border-cyan-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                              >
                                อนุมัติ คำสั่งขาย{' '}
                                <span className="text-xl ml-2">
                                  {' '}
                                  <IoArrowForward />
                                </span>
                              </button>
                            </div>
                          </div>
                    </>
                  }
                  
                  
                </form>
              </div>
            </div>

            <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                <h2 className="font-semibold font-serif text-lg pb-4">
                  สรุป คำสั่งขาย
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} discountDetails={discountDetails} UpdateTotal={UpdateTotal}/>
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        ยังไม่มีข้อมูลสินค้า!
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo.couponCode ? (
                      <span className="bg-cyan-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {' '}
                        <p className="text-cyan-600">ใช้คูปองแล้ว </p>{' '}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder="Input your coupon code"
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-cyan-500 placeholder-gray-500 placeholder-opacity-75"
                        />
                        <button
                          onClick={handleCouponCode}
                          className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-cyan-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                        >
                          ใช้รหัสคูปอง
                        </button>
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  ยอดขาย
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currencySign}{cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  ค่าขนส่ง
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                  {currencySign}{shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  ส่วนลด
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                  {currencySign}{totalDiscount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    ยอดชำระรวม
                    <span className="font-serif font-extrabold text-lg">
                      {' '}
                      {currencySign}{Math.round(total-totalDiscount)}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
