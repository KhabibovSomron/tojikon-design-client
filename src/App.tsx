import { FC, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import('./components/Layout'))

interface IAppProps {

}

const App: FC<IAppProps> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </>
  )
}


export default App;
