import { currentYear, developedBy } from '@/common/constants';
import FallbackLoading from '@/components/FallbackLoading';
import { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
const AuthLayout = ({
  children
}) => {
  useEffect(() => {
    document.body.classList.add('relative', 'h-full');
    return () => {
      document.body.classList.add('relative', 'h-full');
    };
  }, []);
  return <>
      <section className="flex h-screen w-full bg-gradient-to-r from-blue-100 to-blue-50 items-center">
        <div className="container">
            <Suspense fallback={<FallbackLoading />}>
              {children}
            </Suspense>
        </div>
      </section>
    </>;
};
export default AuthLayout;