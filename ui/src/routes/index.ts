import { lazy } from 'react';

const HttpLayout = lazy(() => import('../pages/HttpLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/http/routers',
    title: 'Http Routers',
    component: HttpLayout,
  },
  {
    path: '/http/services',
    title: 'HTTP Services',
    component: HttpLayout,
  },
  {
    path: '/http/middlewares',
    title: 'HTTP Middlewares',
    component: HttpLayout,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
