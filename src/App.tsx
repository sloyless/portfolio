import { Layout } from 'antd';
import { HeroSection } from './sections/HeroSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SiteFooter } from './sections/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import './App.css';

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="site-layout min-h-screen">
      <SiteHeader />
      <Content>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </Content>
      <SiteFooter />
    </Layout>
  );
}
