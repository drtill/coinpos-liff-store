import { FiLock, FiMail } from 'react-icons/fi';

//internal  import
import Error from '@component/form/Error';
import useLoginSubmit from '@hooks/useLoginSubmit';
import InputArea from '@component/form/InputArea';

const Login = ({ setShowResetPassword, setModalOpen }) => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit(setModalOpen);

    const submitLogin = async (event) => 
    {
      event.preventDefault();
      var data = {};

      var password = event.target.password.value;
      var registerEmail = event.target.registerEmail.value;


      if(password.length > 0 &&  registerEmail.length > 0)
      {
        data["registerEmail"] = registerEmail;
        data["password"] = password;
      
      var companyId = 0;
      var paramPath = '';
      if(sessionStorage.getItem('companyId'))
      {
        companyId = sessionStorage.getItem('companyId'); 
        alert("CompanyId = " + companyId);
          
      }
      if(sessionStorage.getItem('catalogName'))
      {
        paramPath = '/catalog/' + sessionStorage.getItem('catalogName'); 
        alert("catalogName = " + paramPath);
          
      }
      
      data["companyId"] = companyId;
      data["paramPath"] = paramPath;

      
      

      alert("Login Handle")
      submitHandler(data)
      }
    }

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Login</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Login with your email and password
        </p>
      </div>
      <form
        //onSubmit={handleSubmit(submitHandler)}
        onSubmit={submitLogin}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="justin@gmail.com"
              label="Email"
              name="registerEmail"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.registerEmail} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue="12345678"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
