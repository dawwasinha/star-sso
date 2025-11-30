import { lazy } from 'react';
const HomePage = lazy(() => import('@/app/(home)/page'));

//pages
const DirectoryPage = lazy(() => import('@/app/(landing-pages)/demos/directory/page'));
const EventPage = lazy(() => import('@/app/(landing-pages)/demos/event/page'));
const PaymentPage = lazy(() => import('@/app/(landing-pages)/demos/payment/page'));
const SaasPage = lazy(() => import('@/app/(landing-pages)/demos/saas/page'));

//auth pages
const Login = lazy(() => import('@/app/auth/login/page'));
const LoginWithQr = lazy(() => import('@/app/auth/qr-login/page'));
const LockScreen = lazy(() => import('@/app/auth/lock-screen/page'));
const Register = lazy(() => import('@/app/auth/register/page'));
const ForgotPassword = lazy(() => import('@/app/auth/forgot-pw/page'));
const ResetPassword = lazy(() => import('@/app/auth/reset-password/page'));
const Logout = lazy(() => import('@/app/auth/logout/page'));

//coming soon pages
const ComingSoon1 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-1/page'));
const ComingSoon2 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-2/page'));
const ComingSoon3 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-3/page'));
const ComingSoon4 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-4/page'));
const ComingSoon5 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-5/page'));
const ComingSoon6 = lazy(() => import('@/app/(coming-soon-pages)/coming-soon-6/page'));
const demoPages = [{
  path: '/',
  name: 'root',
  element: <SaasPage />
}, {
  path: '/demos/directory',
  name: 'Directory',
  element: <DirectoryPage />
}, {
  path: '/demos/event',
  name: 'Event',
  element: <EventPage />
}, {
  path: '/demos/payment',
  name: 'Payment',
  element: <PaymentPage />
}, {
  path: '/demos/saas',
  name: 'Saas',
  element: <SaasPage />
}];
export const authPagesRoutes = [{
  path: '/auth/login',
  name: 'Login',
  element: <Login />
}, {
  path: '/auth/qr-login',
  name: 'Login with Qr',
  element: <LoginWithQr />
}, {
  path: '/auth/lock-screen',
  name: 'LockScreen',
  element: <LockScreen />
}, {
  path: '/auth/register',
  name: 'Register',
  element: <Register />
}, {
  path: '/auth/forgot-pw',
  name: 'ForgotPassword',
  element: <ForgotPassword />
}, {
  path: '/auth/reset-password',
  name: 'ResetPassword',
  element: <ResetPassword />
}, {
  path: '/auth/logout',
  name: 'Logout',
  element: <Logout />
}];
export const comingSoonPagesRoutes = [{
  path: '/coming-soon-1',
  name: 'Coming Soon 1',
  element: <ComingSoon1 />
}, {
  path: '/coming-soon-2',
  name: 'Coming Soon 2',
  element: <ComingSoon2 />
}, {
  path: '/coming-soon-3',
  name: 'Coming Soon 3',
  element: <ComingSoon3 />
}, {
  path: '/coming-soon-4',
  name: 'Coming Soon 4',
  element: <ComingSoon4 />
}, {
  path: '/coming-soon-5',
  name: 'Coming Soon 5',
  element: <ComingSoon5 />
}, {
  path: '/coming-soon-6',
  name: 'Coming Soon 6',
  element: <ComingSoon6 />
}];
export const appRoutes = [...demoPages];