import { FC, lazy } from 'react';
import { Routes, Route } from "react-router-dom";


const Portfolio =  lazy(() => import('./components/pages/portfolio/Portfolio'));
const AboutUs = lazy(() => import('./components/pages/about_us/AboutUs'));
const ProjectDetail = lazy(() => import('./components/pages/project_detail/ProjectDetail'));
const Layout = lazy(() => import('./components/Layout'));
const Main = lazy(() => import('./components/pages/main/Main'));


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
          <Route path='project/:project_id/' element={<ProjectDetail/>} />
        </Route>
      </Routes>
    </>
  )
}


export default App;
