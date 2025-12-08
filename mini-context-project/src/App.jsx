import { Login } from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <div className="bg-slate-900 h-[100vh] w-[100vw] flex flex-col items-center justify-center text-white">
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
