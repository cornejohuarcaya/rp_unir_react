import React, { useContext, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
 import VistaCheckout from './components/checkout/VistaCheackout'
import VistaDetalleLibro from './components/VistaDetalleLibro'
import VistaInicialAcceso from './components/VistaInicialAcceso'
import VistaLogin from './components/login/VistaLogin'
import VistaPay from './components/VistaPay'
 import { GlobalProvider, GlobalContext } from './context/GlobalContext';
 import { BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
 import PrivateRoute from './components/PrivateRoute'; 
import Error404 from './components/Error404';
import { AuthProvider } from './context/AuthContext';
import VistaPrincipal from './components/landing/VistaPrincipal';


function AppContent() {
  const { darkMode } = useContext(GlobalContext);

    const location = useLocation();
    const hideLayout = location.pathname === '/';

  return (
    <>
     {!hideLayout && <Header />}
    <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<VistaPrincipal/>} />
          <Route path="/search" element={<VistaInicialAcceso/>} />
          <Route path="/checkout" element={<VistaCheckout />} />
          <Route path="/detLibro/:id" element={<VistaDetalleLibro />} />
          <Route path="/pay" element={
                    <PrivateRoute>
                        <VistaPay />
                    </PrivateRoute>
                } />
          <Route path="/login" element={<VistaLogin/>} />          
    </Routes>    
    {!hideLayout && <Footer />}
    </>
  )
}

function App() {
  return (
      <GlobalProvider>
         <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </GlobalProvider>
  );
}
export default App
