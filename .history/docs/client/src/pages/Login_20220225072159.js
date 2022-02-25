import Footer from "../components/Footer";
import Container from "../components/Container";
import Layout from "../components/Layout";


const Login = () => {
   
  return(
    <>
      <Layout>
        <Container>
          <div className="flex h-screen flex-col items-center justify-center">
            <div className="text-center mb-2">
            <span className="text-green-500 font-semibold">CDS E-attendance</span>
              <h1 className="text-black font-medium leading-loose text-2xl">Corper Login</h1>
             
            </div>
              <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-green-400" id="username" type="text" placeholder="Email" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <p className="text-red-500 text-xs italic">Please enter your password.</p>
                </div>
                <div className="flex w-full flex-col">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
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

export default Login;