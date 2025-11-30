import { Route, Routes } from 'react-router-dom';
import { appRoutes, authPagesRoutes, comingSoonPagesRoutes } from './index';
import ComingSoonLayout from '@/layouts/ComingSoonLayout';
import AuthLayout from '@/layouts/AuthLayout';
const AppRouter = props => {
  return <Routes>
      {appRoutes.map((route, idx) => <Route key={idx + route.name} path={route.path} element={route.element} />)}

      {authPagesRoutes.map((route, idx) => <Route key={idx + route.name} path={route.path} element={<AuthLayout {...props}>{route.element}</AuthLayout>} />)}

      {comingSoonPagesRoutes.map((route, idx) => <Route key={idx + route.name} path={route.path} element={<ComingSoonLayout {...props}>{route.element}</ComingSoonLayout>} />)}
    </Routes>;
};
export default AppRouter;