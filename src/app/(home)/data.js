import sassImg from '@/assets/images/demo/home-saas.png';
import directoryImg from '@/assets/images/demo/home-directory.png';
import eventImg from '@/assets/images/demo/home-event.png';
import paymentImg from '@/assets/images/demo/home-payment.png';
import comingSoon1 from '@/assets/images/demo/coming-soon-1.png';
import comingSoon2 from '@/assets/images/demo/coming-soon-2.png';
import comingSoon3 from '@/assets/images/demo/coming-soon-3.png';
import comingSoon4 from '@/assets/images/demo/coming-soon-4.png';
import comingSoon5 from '@/assets/images/demo/coming-soon-5.png';
import comingSoon6 from '@/assets/images/demo/coming-soon-6.png';
import login from '@/assets/images/demo/auth-login.png';
import loginWithQr from '@/assets/images/demo/auth-qr-login.png';
import signUp from '@/assets/images/demo/auth-register.png';
import logout from '@/assets/images/demo/auth-logout.png';
import forgotPassword from '@/assets/images/demo/auth-forgotpw.png';
import lockScreen from '@/assets/images/demo/auth-lock-screen.png';
export const navLinks = [{
  label: 'Home',
  link: '#home'
}, {
  label: 'Demo',
  link: '#demo'
}, {
  label: 'Features',
  link: '#features'
}];
export const demoPages = [{
  name: 'Saas Modern',
  url: '/demos/saas',
  image: sassImg
}, {
  name: 'Directory',
  url: '/demos/directory',
  image: directoryImg
}, {
  name: 'Event Conference',
  url: '/demos/event',
  image: eventImg
}, {
  name: 'Payment',
  url: '/demos/payment',
  image: paymentImg
}];
export const extraPages = [{
  name: 'Coming Soon',
  url: '/coming-soon-1',
  image: comingSoon1
}, {
  name: 'Coming Soon',
  url: '/coming-soon-2',
  image: comingSoon2
}, {
  name: 'Coming Soon',
  url: '/coming-soon-3',
  image: comingSoon3
}, {
  name: 'Coming Soon',
  url: '/coming-soon-4',
  image: comingSoon4
}, {
  name: 'Coming Soon',
  url: '/coming-soon-5',
  image: comingSoon5
}, {
  name: 'Coming Soon',
  url: '/coming-soon-6',
  image: comingSoon6
}];
export const accountPages = [{
  name: 'Login',
  url: '/auth/login',
  image: login
}, {
  name: 'Login With QR',
  url: '/auth/qr-login',
  image: loginWithQr
}, {
  name: 'Sign Up',
  url: '/auth/register',
  image: signUp
}, {
  name: 'Logout',
  url: '/auth/logout',
  image: logout
}, {
  name: 'Forgot Password',
  url: '/auth/forgot-pw',
  image: forgotPassword
}, {
  name: 'Lock Screen',
  url: '/auth/lock-screen',
  image: lockScreen
}];