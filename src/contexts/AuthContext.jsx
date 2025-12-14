import { createContext, useContext, useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('auth_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (loginData, password) => {
    try {
      const response = await fetch(`https://arise-app.my.id/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: loginData,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token and user data
      localStorage.setItem('auth_token', data.access_token);
      localStorage.setItem('auth_user', JSON.stringify(data.user));
      
      setToken(data.access_token);
      setUser(data.user);

      // Redirect to home page
      navigate('/');
      
      return { success: true, data };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setToken(null);
    setUser(null);
    navigate('/auth/login');
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Lazy-loaded routes
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
  element: <ProtectedRoute><SaasPage /></ProtectedRoute>
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
