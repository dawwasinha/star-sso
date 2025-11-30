import AppProviders from "./components/wrappers/AppProviders";
import AppRouter from "./routes/router";
import '@/assets/scss/style.css';
function App() {
  return <AppProviders>
      <AppRouter />
    </AppProviders>;
}
export default App;