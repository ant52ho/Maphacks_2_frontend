import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './components/LandingPage';
// import ResultPage from './result_site/src/App'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Site imports
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import ScrollToTop from './result_site/src/components/ScrollToTop';
import AppFooter from './result_site/src/components/shared/AppFooter';
import AppHeader from './result_site/src/components/shared/AppHeader';
import './result_site/src/css/App.css';
import UseScrollToTop from './result_site/src/hooks/useScrollToTop';
import './result_site/src/css/main.css';
import InputFormPage from './components/InputFormPage';

// image imports
import profileImage from './result_site/src/images/profile.jpeg'


const About = lazy(() => import('./result_site/src/pages/AboutMe'));
const Contact = lazy(() => import('./result_site/src/pages/Contact.jsx'));
const Home = lazy(() => import('./result_site/src/pages/Home'));
const Projects = lazy(() => import('./result_site/src/pages/Projects'));
const ProjectSingle = lazy(() => import('./result_site/src/pages/ProjectSingle.jsx'));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Layout = () => (
	<>
  <AnimatePresence>
    <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
      <ScrollToTop />
      <AppHeader />
      <Suspense fallback={""}>
        <Outlet />
      </Suspense>
      <AppFooter 
      // website={"yes"} 
      github={'yes'} 
      linkedin={'yes'} 
      youtube={'yes'} 
      twitter={"yes"}
      />
      <UseScrollToTop />
    </div>
  </AnimatePresence>
	</>
)


// 
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/page',
        element: <App />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About bioImage={profileImage} bioText={"Hello World!"}/>
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/form",
    element: <InputFormPage />
  },
]);

export const InfoContext = React.createContext<InfoContextType>({info: {}, setInfo: () => {}})

export type InfoContextType = {
  info: Object,
  setInfo: React.Dispatch<React.SetStateAction<Object>>
}

function EntireWebsite() {
  const [info, setInfo] = useState<Object>({});
  return ( 
  <InfoContext.Provider value={{info: info, setInfo: setInfo}}>
    <RouterProvider router={router} />
    </InfoContext.Provider>
    );
}



root.render(
  <EntireWebsite/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
