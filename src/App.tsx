import { Col, Row, Space, Typography } from 'antd';
import { aboutTabs, portfolioItems, skills } from './data/content';
import { AboutTabs } from './components/AboutTabs';
import { PortfolioCard } from './components/PortfolioCard';
import { SiteHeader } from './components/SiteHeader';
import { SkillCard } from './components/SkillCard';
import './App.css';

const { Title, Paragraph } = Typography;

export default function App() {
  return (
    <>
      <SiteHeader />

      <aside className="sl-jumbotron mb-0">
        <div className="site-container flex h-full flex-col justify-center pt-5 pb-5">
          <Space direction="vertical" size="middle" className="w-full">
            <Title level={1} className="display-3 pt-3 !mb-0 !text-inherit">
              Hi! I&apos;m Sean Loyless,
            </Title>
            <Paragraph className="display-4 fw-bolder text-danger !mb-0">
              Application Engineer
            </Paragraph>
            <Paragraph className="display-4 !mb-0 pb-3">in NYC.</Paragraph>
          </Space>
        </div>
      </aside>

      <main>
        <section id="about" className="site-container my-5">
          <Row gutter={[24, 24]} align="top">
            <Col xs={24} md={8}>
              <img
                src="/assets/images/about.jpg"
                alt=""
                className="about-photo w-full"
              />
            </Col>
            <Col xs={24} md={16} className="md:!pl-12">
              <Space
                direction="vertical"
                size="middle"
                className="w-full items-start"
              >
                <Title level={2} className="display-5 !mb-0">
                  About Me
                </Title>
                <Space direction="vertical" size="middle">
                  <Paragraph className="lead !mb-0">
                    I&apos;ve been programming since I was 11 years old! I spent
                    hours in front of my Atari XL-800 learning BASIC programming
                    from the back of <em>3-2-1 Contact</em> magazines.
                  </Paragraph>
                  <Paragraph className="!mb-0">
                    I love the challenge of programming with the constant
                    learning required to stay on top of the latest technologies
                    and trends to support my clients.
                  </Paragraph>
                </Space>
                <AboutTabs tabs={aboutTabs} />
              </Space>
            </Col>
          </Row>
        </section>

        <section id="skills" className="pb-5">
          <div className="skills-inner site-container text-light">
            <Space
              direction="vertical"
              size="middle"
              className="mb-4 w-full pt-5"
            >
              <Title level={2} className="display-4 !mb-0 text-center">
                My Toolbox
              </Title>
              <Paragraph className="lead !mb-0 text-center">
                These are just a few of the skills I use everyday as a developer.
              </Paragraph>
            </Space>
            <Row gutter={[24, 24]} className="mb-4">
              {skills.map((skill) => (
                <Col key={skill.title} xs={24} md={8}>
                  <SkillCard skill={skill} />
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section id="portfolio" className="py-5">
          <div className="site-container text-light">
            <Space direction="vertical" size="middle" className="mb-4 w-full">
              <Title level={2} className="display-4 !mb-0 text-center">
                Portfolio
              </Title>
              <Paragraph className="lead !mb-0 text-center">
                A few of the clients I have done work for over my career.
              </Paragraph>
            </Space>
            <Row gutter={[24, 24]} className="mb-4">
              {portfolioItems.map((item) => (
                <Col key={item.id} xs={24} md={8}>
                  <PortfolioCard item={item} />
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </main>
    </>
  );
}
