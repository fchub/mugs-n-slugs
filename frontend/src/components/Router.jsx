import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { HeadMenu } from './HeadMenu.jsx'
import { Footer } from './Footer.jsx'
import Home from '../pages/Home.jsx'
import Account from '../pages/Account.jsx'
import Build from '../pages/Build.jsx'
import BuildPastLists from '../pages/build_subpages/BuildPastLists.jsx'
import ListsDetails from '../pages/build_subpages/Build_lists_details.jsx'

export default function Router() {
    const Layout = () => {
        return (
          <>
            <HeadMenu />
            <Outlet />
            <Footer />
          </>
        )
    }
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/build" element={<Build />} />
                    <Route path='/build/pastlists' element={<BuildPastLists />} />
                    <Route path="/build/pastlists/details/:id" element={<ListsDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}