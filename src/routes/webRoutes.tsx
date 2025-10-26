import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {About} from 'pages/about/about';
import {Home} from 'pages/home';
import {Projects} from 'pages/projects/projects';
import {Skills} from 'pages/skills/skills';
import {NotFound} from 'pages/notFound';
import {WebRoutesContainer, Content} from './webRoutes.styles';
import {Header} from 'components/header';
import {useTheme} from 'context/ThemeContext';

export const WebRoutes = () => {
  const {themeDark} = useTheme();
  return (
    <BrowserRouter>
      <WebRoutesContainer $backgroundblack={themeDark}>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </WebRoutesContainer>
    </BrowserRouter>
  );
};
