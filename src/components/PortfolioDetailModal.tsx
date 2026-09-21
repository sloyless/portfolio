import { Image, Modal, Space, Typography } from 'antd';
import type { PortfolioItem } from '../types/models';

const { Text, Title } = Typography;

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  open: boolean;
  onClose: () => void;
}

export function PortfolioDetailModal({
  item,
  open,
  onClose,
}: PortfolioDetailModalProps) {
  return (
    <Modal
      open={open && item !== null}
      onCancel={onClose}
      footer={null}
      width={720}
      centered
      className="portfolio-detail-modal"
      title={
        item ? (
          <Space orientation="vertical" size={4} className="w-full">
            <Title level={4} className="portfolio-detail-modal-title !mb-0">
              {item.title}
            </Title>
            <Text className="portfolio-detail-modal-meta">
              {item.client} · {item.date}
            </Text>
          </Space>
        ) : null
      }
    >
      {item ? (
        <Image
          src={item.image}
          alt={`${item.title} — ${item.client}, ${item.date}`}
          className="portfolio-detail-modal-image"
          preview={false}
        />
      ) : null}
    </Modal>
  );
}
