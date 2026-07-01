import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from 'components/Header/Header';
import {Home} from 'pages/Home';
import {Skills} from 'pages/Skills';
import {Projects} from 'pages/Projects';
import {About} from 'pages/About';
import {Settings} from 'pages/Settings';
import {NotFound} from 'pages/NotFound';
import {Footer} from 'components/Footer';
import {BottomTabBar} from 'components/BottomTabBar/BottomTabBar';

export const WebRoutes = () => {
  const baseName = import.meta.env.BASE_URL || '/';

  return (
    <BrowserRouter basename={baseName}>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50">
        <Header />
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BottomTabBar />
      </div>
    </BrowserRouter>
  );
};
