import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from 'components/Header/Header';
import {Home} from 'pages/Home';
import {Skills} from 'pages/Skills';
import {Projects} from 'pages/Projects';
import {About} from 'pages/About';
import {NotFound} from 'pages/NotFound';

export const WebRoutes = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
        <Header />

        <main className="mx-auto max-w-7xl px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
