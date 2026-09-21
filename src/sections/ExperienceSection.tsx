import { Space } from 'antd';
import { credentialTabs } from '../data/content';
import { CredentialTabs } from '../components/CredentialTabs';
import { SectionHeading } from '../components/SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block section-block--alt">
      <div className="site-container">
        <Space orientation="vertical" size="large" className="mb-6 w-full">
          <SectionHeading
            kicker="Background"
            title="Experience & credentials"
            description="Where I have led teams, shipped work, and kept learning—across streaming, consulting, and agency life."
          />
          <CredentialTabs tabs={credentialTabs} />
        </Space>
      </div>
    </section>
  );
}
