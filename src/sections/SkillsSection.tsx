import { Col, Row, Space } from 'antd';
import { skills } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';

export function SkillsSection() {
  return (
    <section id="skills" className="section-block">
      <div className="site-container">
        <Space orientation="vertical" size="large" className="mb-8 w-full">
          <SectionHeading
            kicker="What I bring"
            title="Skills & craft"
            description="Technologies and practices I use to design, build, and ship responsive products—from prototypes to enterprise platforms."
          />
        </Space>
        <Row gutter={[20, 20]}>
          {skills.map((skill) => (
            <Col key={skill.title} xs={24} sm={12} lg={8}>
              <SkillCard skill={skill} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
