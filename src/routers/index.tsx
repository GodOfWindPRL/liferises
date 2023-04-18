import LoadingScreen from 'components/core/LoadingScreen'
import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
const Homepage = lazy(() => import("../pages/home/Homepage"))
const Routers = () => {
    const routes = useRoutes([
        {
            path: '/',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Homepage />
                </Suspense>
        }
    ])
    return routes
}

export default Routers