import { Space, Typography } from 'antd';
import type { PortfolioItem } from '../types/models';

const { Title, Text } = Typography;

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article
      className="portfolio-card bg-dark text-light"
      style={{ backgroundImage: `url('${item.image}')` }}
    >
      <div className="portfolio-card-details">
        <Space direction="vertical" size={0} className="w-full">
          <Title level={5} className="portfolio-card-title !mb-0 !text-inherit">
            {item.title}{' '}
            <Text className="fw-lighter">({item.date})</Text>
          </Title>
          <Text className="portfolio-card-client fw-lighter">{item.client}</Text>
        </Space>
      </div>
    </article>
  );
}
