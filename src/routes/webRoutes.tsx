import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from 'components/Header/Header';
import {Home} from 'pages/Home';
import {Skills} from 'pages/Skills';
import {Projects} from 'pages/Projects';
import {About} from 'pages/About';
import {NotFound} from 'pages/NotFound';
import {Footer} from 'components/Footer';

export const WebRoutes = () => {
  const baseName = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={baseName}>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
