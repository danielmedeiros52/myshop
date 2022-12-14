import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../theme/_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import  ProductsPage from '../pages/product/list'
import ProductForm from '../pages/product/form'


const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path="/produtos" element={<ProductForm className='mb-5 mb-xl-8'/>} />
        {/* Lazy Modules */}
    
               {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}


export {PrivateRoutes}
