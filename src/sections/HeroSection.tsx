import { Col, Image, Row, Space, Typography } from 'antd';
import { intro } from '../data/content';

const { Title, Paragraph, Text } = Typography;

export function HeroSection() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-glow hero-glow--red" aria-hidden />
      <div className="hero-glow hero-glow--gold" aria-hidden />
      <div className="site-container hero-inner">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={9} lg={8}>
            <div className="headshot-frame">
              <Image
                src="/assets/images/newheadshot.jpg"
                alt="Sean Loyless"
                className="headshot-image"
                preview={false}
              />
            </div>
          </Col>
          <Col xs={24} md={15} lg={16}>
            <Space orientation="vertical" size="middle" className="w-full">
              <Text className="section-kicker">New York City</Text>
              <Title level={1} className="hero-title !mb-0">
                Hi, I&apos;m{' '}
                <span className="hero-name">Sean Loyless</span>
              </Title>
              <Paragraph className="hero-role text-danger !mb-0">
                Lead Software Engineer
              </Paragraph>
              <Paragraph className="hero-lead !mb-0">{intro.lead}</Paragraph>
              {intro.paragraphs.map((text) => (
                <Paragraph key={text} className="!mb-0">
                  {text}
                </Paragraph>
              ))}
              <Paragraph className="!mb-0">
                Today I lead live streaming metadata engineering at The Walt
                Disney Company. Before that, I spent eight years at IBM iX
                leading React, React Native, and Angular delivery for global
                brands.
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
}
