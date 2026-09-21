import { useState } from 'react';
import { Col, Row, Space } from 'antd';
import { portfolioItems } from '../data/content';
import { PortfolioCard } from '../components/PortfolioCard';
import { PortfolioDetailModal } from '../components/PortfolioDetailModal';
import { SectionHeading } from '../components/SectionHeading';
import type { PortfolioItem } from '../types/models';

export function ProjectsSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="projects" className="section-block section-block--alt">
      <div className="site-container">
        <Space orientation="vertical" size="large" className="mb-8 w-full">
          <SectionHeading
            kicker="Selected work"
            title="Projects"
            description="Client engagements across travel, retail, nonprofit, and telecom—representative of larger programs and launches."
          />
        </Space>
        <Row gutter={[20, 20]}>
          {portfolioItems.map((item) => (
            <Col key={item.id} xs={24} sm={12} lg={8}>
              <PortfolioCard item={item} onSelect={setSelectedItem} />
            </Col>
          ))}
        </Row>
      </div>
      <PortfolioDetailModal
        item={selectedItem}
        open={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
