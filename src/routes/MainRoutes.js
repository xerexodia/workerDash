import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Worker from 'views/pages/users/worker';
import Client from 'views/pages/users/client';
import Posts from 'views/pages/posts/post';
import MaterialPost from 'views/pages/posts/materialPost';
import { useStateContext } from 'store/context';
import { Navigate } from 'react-router';

// dashboard routing

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const ProtectedRoute = () => {
    const { user } = useStateContext();

    if (!user) {
        return <Navigate to={'/'} />;
    }
    return (
        <>
            <MainLayout />
        </>
    );
};

const MainRoutes = {
    path: '/dash',
    element: <ProtectedRoute />,
    children: [
        {
            path: '',
            children: [
                {
                    path: 'workers',
                    element: <Worker />
                }
            ]
        },
        {
            path: '',
            children: [
                {
                    path: 'clients',
                    element: <Client />
                }
            ]
        },
        {
            path: '',
            children: [
                {
                    path: 'posts',
                    element: <Posts />
                }
            ]
        },
        {
            path: '',
            children: [
                {
                    path: 'material-posts',
                    element: <MaterialPost />
                }
            ]
        }
    ]
};

export default MainRoutes;
