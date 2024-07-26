import './style/App.scss'
import './index.css'
import Router from './components/Router.jsx'
import Context from './components/Context.jsx'

function App() {
  const userInfo = {
    name: "Frank",
    email: "fycfyc741@gmail.com",
    loggedIn: false,
    pastLists: 4,
    friends: 11,
  }

  return (
    <>
      <div className="App">
        <Context.Provider value={userInfo}>
          <Router />
        </Context.Provider>
      </div>
    </>
  )
}

export default App
