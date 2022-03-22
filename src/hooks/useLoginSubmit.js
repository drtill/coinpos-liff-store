import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleLogin } from 'react-google-login';

//internal import
import UserServices from '@services/UserServices';
import { UserContext } from '@context/UserContext';
import { notifyError, notifySuccess } from '@utils/toast';

const useLoginSubmit = (setModalOpen) => {
  const router = useRouter();
  const { redirect } = router.query;
  const { dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submitHandler = ({
    name,
    email,
    registerEmail,
    verifyEmail,
    password,
    companyId,
    companyName,
    locationEmail,
    paramPath
  }) => {
    alert("Loading");
    setLoading(true);
    if (registerEmail && password) {
      alert("Email " + registerEmail + " password " + password);
      //return;
      UserServices.coinposUserLogin({
        registerEmail,
        password,
        companyId,
        paramPath

      })
        .then((res) => {
          setLoading(false);
          setModalOpen(false);
          alert(JSON.stringify(res));
          //return;
          //router.push(redirect || '/checkout');
          router.push(redirect || '/' + res.paramPath);
          //router.push(redirect);

          sessionStorage.setItem('customerId', res.customerId);
          sessionStorage.setItem('customerFirstName', res.firstName);
          sessionStorage.setItem('customerLastName', res.lastName);
          sessionStorage.setItem('customerEmail', res.email);
          sessionStorage.setItem('customerPhoneNumber', res.phone);

          sessionStorage.setItem('customerAddressId', res.customerAddressId);


          sessionStorage.setItem('address1', res.address1);
          sessionStorage.setItem('countryId', res.countryId);
          sessionStorage.setItem('provinceId', res.provinceId);
          sessionStorage.setItem('cityId', res.cityId);
          sessionStorage.setItem('districtId', res.districtId);
          sessionStorage.setItem('postalcode', res.postalcode);

          sessionStorage.setItem('countrys', JSON.stringify(res.countrys));
          sessionStorage.setItem('provinces', JSON.stringify(res.provinces));
          sessionStorage.setItem('cities', JSON.stringify(res.cities));
          sessionStorage.setItem('districts', JSON.stringify(res.districts));


          notifySuccess('Login Success!');
          dispatch({ type: 'USER_LOGIN', payload: res });
          Cookies.set('userInfo', JSON.stringify(res));

          localStorage.setItem('userInfo', JSON.stringify(res));
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
          setLoading(false);
        });
    }
    if (name && email && password) {
      alert("Name = " + name + " email = " + email + " password = " + password + " companyId = " + companyId);
      //return;
      UserServices.verifyCoinPOSEmailAddress({ name, email, password, companyName, locationEmail, companyId })
        .then((res) => {
          alert(res.message)
          setLoading(false);
          setModalOpen(false);
          notifySuccess(res.message);
        })
        .catch((err) => {
          setLoading(false);
          
          notifyError(err.response.data.message);
          alert(err.response.data.message);
        });
    }
    if (verifyEmail) {
      alert("verifyEmail");
      //UserServices.forgetPassword({ verifyEmail })

      UserServices.forgetCoinPOSCustomerPassword({ email:verifyEmail, companyName:companyName, locationEmail:locationEmail,companyId:companyId })
        .then((res) => {
          setLoading(false);
          notifySuccess(res.message);
          setValue('verifyEmail');
        })
        .catch((err) => {
          setLoading(false);
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  };

  const handleGoogleSignIn = (user) => {
    UserServices.signUpWithProvider({
      name: user.profileObj.name,
      email: user.profileObj.email,
      image: user.profileObj.imageUrl,
    })
      .then((res) => {
        setModalOpen(false);
        notifySuccess('Login success!');
        router.push(redirect || '/');
        



        dispatch({ type: 'USER_LOGIN', payload: res });
        Cookies.set('userInfo', JSON.stringify(res));
      })

      .catch((err) => {
        notifyError(err.message);
        setModalOpen(false);
      });
  };

  return {
    handleSubmit,
    submitHandler,
    handleGoogleSignIn,
    register,
    errors,
    GoogleLogin,
    loading,
  };
};

export default useLoginSubmit;
