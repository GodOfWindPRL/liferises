import LoadingScreen from 'components/core/LoadingScreen'
import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
const Homepage = lazy(() => import("../pages/home/Homepage"))
const Lore = lazy(() => import("../pages/lore/Lore"))
const Routers = () => {
    const routes = useRoutes([
        {
            path: '/',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Homepage />
                </Suspense>
        },
        {
            path: '/lore',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Lore />
                </Suspense>
        },
    ])
    return routes
}

export default Routers