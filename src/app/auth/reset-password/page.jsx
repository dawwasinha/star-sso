import { Link, useSearchParams } from 'react-router-dom';
import logoLight from '@/assets/images/logo-light.png';
import AuthSwiper from '@/components/common/AuthSwiper';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageMetaData from '@/components/PageMetaData';
import { useState } from 'react';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password minimal 8 karakter!');
      return;
    }

    // TODO: Implement reset password API call
    console.log('Reset password with token:', token);
    console.log('New password:', formData.password);
  };

  return (
    <>
      <PageMetaData title='Reset Password' />
      <div className="grid lg:grid-cols-2">
        <div className="flex h-full flex-col p-10">
          <div className="pb-10">
            <Link to="/" className="flex justify-center">
              <img src={logoLight} width={145} height={40} alt="logo" className="h-10" />
            </Link>
          </div>
          <div className="my-auto pb-6 text-center">
            <h4 className="mb-3 text-2xl font-bold text-white">Reset Password</h4>
            <p className="mx-auto mb-5 max-w-sm text-gray-300">
              Masukkan password baru Anda. Password harus minimal 8 karakter.
            </p>
            <form onSubmit={handleSubmit} className="text-start">
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Password Baru
                </label>
                <div className="relative">
                  <input 
                    className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 pr-10 text-white/80 focus:border-white/25 focus:ring-transparent" 
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                    placeholder="Masukkan password baru"
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <IconifyIcon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <input 
                    className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 pr-10 text-white/80 focus:border-white/25 focus:ring-transparent" 
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required 
                    placeholder="Ulangi password baru"
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <IconifyIcon icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="mb-4 text-xs text-gray-400">
                <ul className="list-disc list-inside space-y-1">
                  <li>Minimal 8 karakter</li>
                  <li>Gunakan kombinasi huruf, angka, dan simbol</li>
                  <li>Hindari password yang mudah ditebak</li>
                </ul>
              </div>

              <div className="mb-6 text-center">
                <button 
                  className="group mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white/20 px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary/20 hover:text-primary" 
                  type="submit"
                >
                  <IconifyIcon icon="mdi:lock-reset" className="me-2 text-lg" /> 
                  <span className="fw-bold">Reset Password</span>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full text-center">
            <p className="text-base font-medium leading-6 text-gray-300">
              Kembali ke halaman{' '}
              <Link to="/auth/login" className="ms-1 font-semibold text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
        <AuthSwiper />
      </div>
    </>
  );
};

export default ResetPassword;
