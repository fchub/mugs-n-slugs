import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/App.scss'
import './index.css'
import About from './pages/About.jsx'
import Account from './pages/Account.jsx'
import Build from './pages/Build.jsx'

import { HeadMenu } from './components/HeadMenu.jsx'
import SideNav from './components/SideNav.jsx'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <HeadMenu /> {/*allows HeadMenu to stay in place no matter which page*/}
          <SideNav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/build" element={<Build />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
