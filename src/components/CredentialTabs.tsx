import { Tabs } from 'antd';
import type { AboutTabs as CredentialGroup } from '../types/models';
import { SkillTabItem } from './SkillTabItem';

interface CredentialTabsProps {
  tabs: CredentialGroup[];
}

export function CredentialTabs({ tabs }: CredentialTabsProps) {
  return (
    <Tabs
      className="credential-tabs-ant"
      defaultActiveKey={String(tabs[0]?.id)}
      destroyOnHidden={false}
      items={tabs.map((tab) => ({
        key: String(tab.id),
        label: tab.title,
        children: (
          <div className="credential-panel">
            <SkillTabItem item={tab} />
          </div>
        ),
      }))}
    />
  );
}
