import React from 'react';
import { SiGithub, SiLinkedin, SiX, SiTumblr, SiMedium, SiInstagram } from '@icons-pack/react-simple-icons';

const ModernPersonalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-2 animate-fade-in">Hamdi Laadhari</h1>
          <p className="text-2xl text-blue-300 animate-fade-in-delay-1">PHP/Symfony Lead Developper</p>
        </header>
        
        <main className="space-y-16">
          <section className="flex flex-col md:flex-row items-center animate-fade-in-delay-2">
            <div className="w-40 h-40 mb-8 md:mb-0 md:mr-12 flex-shrink-0">
              <picture>
                <source 
                  media="(max-width: 767px)" 
                  srcSet="/img/avatar/thumb.png 1x, /img/avatar/thumb@2x.png 2x, /img/avatar/thumb@3x.png 3x"
                />
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/img/avatar/avatar@1x.png 1x, /img/avatar/avatar@2x.png 2x, /img/avatar/avatar@3x.png 3x"
                />
                <img 
                  src="/img/avatar/avatar@1x.png"
                  alt="Profile" 
                  className="rounded-full w-full h-full object-cover shadow-lg" 
                />
              </picture>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-300">About Me</h2>
              <p className="text-xl leading-relaxed">
                Passionate about software engineer with a keen interest in web technologies, automation, and open source. 
                I thrive on crafting efficient solutions and contributing to innovative projects that push the boundaries of what's possible.
              </p>
            </div>
          </section>
          
          <section className="animate-fade-in-delay-3">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['PHP', 'Symfony', 'Elasticsearch', 'React', 'Node', 'Docker', 'AWS', 'Git'].map(skill => (
                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">{skill}</span>
              ))}
            </div>
          </section>
          
          <section className="animate-fade-in-delay-4">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Let's Connect</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <SocialLink href="https://h4md1.tumblr.com/" icon={SiTumblr} label="Tumblr" />
              <SocialLink href="https://x.com/0xh4md1" icon={SiX} label="X" />
              <SocialLink href="https://www.linkedin.com/in/hamdilaadhari" icon={SiLinkedin} label="LinkedIn" />
              <SocialLink href="https://medium.com/@killerwolf" icon={SiMedium} label="Medium" />
              <SocialLink href="https://github.com/killerwolf" icon={SiGithub} label="GitHub" />
              <SocialLink href="https://www.instagram.com/hamdilaadhari/" icon={SiInstagram} label="Instagram" />
            </div>
          </section>
        </main>
        
        <footer className="text-center mt-16 animate-fade-in-delay-5">
          <p className="text-blue-300">&copy; 2024 Hamdi LAADHARI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex flex-col items-center"
    aria-label={label}
  >
    <div className="bg-gray-800 p-4 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
      <Icon size={24} />
    </div>
    <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
  </a>
);

export default ModernPersonalPage;