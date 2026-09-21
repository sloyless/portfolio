import { Card, Space, Typography } from 'antd';
import type { PortfolioItem } from '../types/models';

const { Title, Text } = Typography;

interface PortfolioCardProps {
  item: PortfolioItem;
  onSelect?: (item: PortfolioItem) => void;
}

export function PortfolioCard({ item, onSelect }: PortfolioCardProps) {
  const openDetail = () => onSelect?.(item);

  return (
    <Card
      hoverable
      variant="borderless"
      className="portfolio-card text-light"
      tabIndex={onSelect ? 0 : undefined}
      role={onSelect ? 'button' : undefined}
      aria-label={
        onSelect ? `View details for ${item.title}, ${item.client}` : undefined
      }
      onClick={onSelect ? openDetail : undefined}
      onKeyDown={
        onSelect
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDetail();
              }
            }
          : undefined
      }
      styles={{ body: { display: 'none', padding: 0 } }}
      cover={
        <div
          className="portfolio-card-cover"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          <div className="portfolio-card-details">
            <Space orientation="vertical" size={0} className="w-full">
              <Title
                level={5}
                className="portfolio-card-title !mb-0 !text-inherit"
              >
                {item.title}{' '}
                <Text className="fw-lighter">({item.date})</Text>
              </Title>
              <Text className="portfolio-card-client fw-lighter">
                {item.client}
              </Text>
            </Space>
          </div>
        </div>
      }
    />
  );
}
