import { Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import Router from './components/routing/Router';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingPage />}>
        <Router />
      </Suspense>
    </>
  );
}

export default App;
