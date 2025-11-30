import Typist from 'react-text-typist';
const TextTyping = () => {
  return <Typist typingSpeed={1500} deletingSpeed={700} showCursor={false} startDelay={100} cursorSmooth pauseTime={2500} sentences={['saas', 'Event Managment', 'Digital Payment', 'Directory', 'Coming Soon Pages']} className="typewrite relative capitalize text-primary underline" />;
};
export default TextTyping;