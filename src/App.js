import Header from './Component/Header/Header.js'
import './app.scss'
import Future from './Component/Future/Future.js'
import Loading from './Component/Loading/Loading'
import { createResource } from './APIs/fetchForecast.js'
import { Suspense } from 'react'

const App = () => {
    const resource = createResource()
    return (
        <Suspense fallback={<Loading />}>
            <div className="app">
                {/* <Header data={resource} /> */}
                <Future data={resource} />
            </div>
        </Suspense>
    )
}

export default App
