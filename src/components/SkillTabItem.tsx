import { Typography } from 'antd';
import type { AboutTabs } from '../types/models';

const { Paragraph, Text } = Typography;

interface SkillTabItemProps {
  item: AboutTabs;
}

export function SkillTabItem({ item }: SkillTabItemProps) {
  return (
    <ul className="about-detail-list mt-3">
      {item.detail.map((detail) => (
        <li key={detail.title} className="mb-2">
          <Text>
            <Text strong>{detail.title}</Text>
            {detail.subtitle ? (
              <Text className="fw-lighter"> - {detail.subtitle}</Text>
            ) : null}
          </Text>
          <br />
          <Paragraph className="fw-light !mb-0">{detail.text}</Paragraph>
        </li>
      ))}
    </ul>
  );
}
