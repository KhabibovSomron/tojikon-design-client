import { FC, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/pages/main/Main';
import Portfolio from './components/pages/portfolio/Portfolio';
import AboutUs from './components/pages/about_us/AboutUs';

const Layout = lazy(() => import('./components/Layout'))

interface IAppProps {

}

const App: FC<IAppProps> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='portfolio/' element={<Portfolio />} />
          <Route path='about-us/' element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}


export default App;
