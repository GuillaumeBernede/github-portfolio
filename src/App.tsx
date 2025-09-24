import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  AboutMe,
  Project,
  Navigation,
  Footer,
  Expertise,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const handleModeChange = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <AboutMe/>
            <Timeline/>
            <Project/>
            <Expertise mode={mode} />
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;