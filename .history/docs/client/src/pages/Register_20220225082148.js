import Footer from "../components/Footer";
import Container from "../components/Container";
import Layout from "../components/Layout";


const Register = () => {
   
  return(
    <>
      <Layout>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center  mt-10 mb-6">
            <span className="text-green-500 font-semibold capitalize">CDS E-attendance</span>
              <h1 className="text-black font-medium leading-loose text-2xl uppercase tracking-wide">create profile</h1>
             
            </div>
              <div className="w-full max-w-lg">
              <form className="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="relative py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                            <div className="absolute -top-3">
                            <label className="inline px-2 bg-white text-green-500 text-xs font-bold" for="firstname">
                                First Name
                            </label>
                            </div>
                            <input 
                            type={'text'}
                            name={'statecode'}
                            
                            className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                            onChange={''}
                            required />
                        </div>
                <div className="flex flex-col md:flex-row mb-4">
                    <div className="w-full md:w-1/2 relative py-2 mb-4 rounded text-sm w-full shadow-sm border border-1 border-gray-300  appearance-none rounded focus:outline-none focus:shadow-outline focus:border hover:border-2 hover:border-green-400">
                        <div className="absolute -top-3">
                        <label className="inline px-2 bg-white text-green-500 text-xs font-bold" for="firstname">
                            First Name
                        </label>
                        </div>
                        <input 
                        type={'text'}
                        name={'statecode'}
                        
                        className={'border-0 text-xs md:text-sm w-full text-gray-700  py-2 px-2 leading-loose font-medium focus:ring-0 focus:outline-0 text-uppercase'}
                        onChange={''}
                        required />
                    </div>
                    <div className="w-full md:w-1/2 relative  shadow appearance-none border rounded focus:outline-none focus:shadow-outline focus:border-green-400">
                        <div className="absolute">
                            <label className="block text-gray-700 text-sm font-bold" for="firstname">
                                First name
                            </label>
                        </div>
                        <input className=" " id="firstname" type="text" placeholder="Deborah" />
                        <div className="msg mt-2 hidden">
                            <p className="text-red-500 text-xs italic">Please enter your password.</p>
                        </div>
                    </div>
                    <div className="ml-4 w-full md:w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Surname
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-400" id="username" type="text" placeholder="Egonu" />
                        <div className="msg mt-2 hidden">
                            <p className="text-red-500 text-xs italic">Please enter your password.</p>
                        </div>
                    </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Statecode
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Local Goverment Area (L.G.A)
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Community Development Service (CDS) Group
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Place of Primary Assignment (PPA) Group
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Phone Number (Whatsapp)
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Email
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Profile Picture
                  </label>
                  <input className="shadow appearance-none border focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <div className="msg hidden">
                    <p className="text-red-500 text-xs italic">Please enter your password.</p>
                  </div>
                  
                </div>
                <div className="flex w-full flex-col">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                   Create Profile
                  </button>
                  <span className="inline-block mt-2 align-baseline font-bold text-xs text-green-500 hover:text-green-800 text-center">
                    Forgot Password?
                  </span>
                </div>
              </form>
              <Footer />
              </div>
          </div>
        
        </Container>
      </Layout>
      
    </>
  )
}

export default Register;