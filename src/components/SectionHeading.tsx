import { Space, Typography } from 'antd';

const { Title, Text } = Typography;

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Space
      orientation="vertical"
      size="small"
      className={`w-full ${centered ? 'items-center text-center' : 'items-start'}`}
    >
      <Text className="section-kicker">{kicker}</Text>
      <Title level={2} className="section-title !mb-0">
        {title}
      </Title>
      {description ? (
        <Text className="section-description">{description}</Text>
      ) : null}
    </Space>
  );
}
