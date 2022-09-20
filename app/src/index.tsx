import ReactDOM from 'react-dom'
// Axios
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

// Apps
import {MetronicI18nProvider} from './theme/_metronic/i18n/Metronici18n'

import './theme/_metronic/assets/sass/style.scss'
import './theme/_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './routing/AppRoutes'


Chart.register(...registerables)

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
        <AppRoutes />
    </MetronicI18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)
