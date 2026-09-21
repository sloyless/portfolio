import type { ComponentType } from 'react';
import {
  BarChartOutlined,
  CloudServerOutlined,
  CodeOutlined,
  EyeOutlined,
  MobileOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { Card, Space, Typography } from 'antd';
import type { Skill, SkillIcon } from '../types/models';

const { Title, Paragraph } = Typography;

const iconMap: Record<SkillIcon, ComponentType<{ className?: string }>> = {
  code: CodeOutlined,
  images: PictureOutlined,
  mobile: MobileOutlined,
  server: CloudServerOutlined,
  eye: EyeOutlined,
  chart: BarChartOutlined,
};

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = iconMap[skill.icon];

  return (
    <Card className="skill-card h-full" variant="borderless">
      <Space align="center" size="middle" className="mb-2">
        <Icon className="skill-card-icon" aria-hidden />
        <Title level={5} className="skill-card-title !mb-0">
          {skill.title}
        </Title>
      </Space>
      <Paragraph className="skill-card-text !mb-0">{skill.text}</Paragraph>
    </Card>
  );
}
