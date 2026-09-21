import { List, Typography } from 'antd';
import type { AboutTabs } from '../types/models';

const { Paragraph, Text } = Typography;

interface SkillTabItemProps {
  item: AboutTabs;
}

export function SkillTabItem({ item }: SkillTabItemProps) {
  return (
    <List
      className="credential-list"
      dataSource={item.detail}
      split={false}
      renderItem={(detail) => (
        <List.Item className="credential-list-item !px-0">
          <List.Item.Meta
            title={
              <Text>
                <Text strong>{detail.title}</Text>
                {detail.subtitle ? (
                  <Text type="secondary"> — {detail.subtitle}</Text>
                ) : null}
              </Text>
            }
            description={
              <Paragraph className="fw-light !mb-0">{detail.text}</Paragraph>
            }
          />
        </List.Item>
      )}
    />
  );
}
