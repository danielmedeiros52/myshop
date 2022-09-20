import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from './theme/_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from './theme/_metronic/layout/core'
import {MasterInit} from './theme/_metronic/layout/MasterInit'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
            <Outlet />
            <MasterInit />
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
