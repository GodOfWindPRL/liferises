import LoadingScreen from 'components/core/LoadingScreen'
import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
const Homepage = lazy(() => import("../pages/home/Homepage"))
const Gallery = lazy(() => import("../pages/Gallery"))
const Faq = lazy(() => import("../pages/Faq"))
const Lore = lazy(() => import("../pages/lore/Lore"))
const Team = lazy(() => import("../pages/team/Team"))
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
            path: '/gallery',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Gallery />
                </Suspense>
        },
        {
            path: '/faqs',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Faq />
                </Suspense>
        },
        {
            path: '/lore',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Lore />
                </Suspense>
        },
        {
            path: '/team',
            element:
                <Suspense fallback={<LoadingScreen />}>
                    <Team />
                </Suspense>
        },
    ])
    return routes
}

export default Routers