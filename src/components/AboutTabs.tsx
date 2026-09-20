import { useState } from 'react';
import { Space } from 'antd';
import type { AboutTabs as AboutTabsModel } from '../types/models';
import { SkillTabItem } from './SkillTabItem';

interface AboutTabsProps {
  tabs: AboutTabsModel[];
}

export function AboutTabs({ tabs }: AboutTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? 1);
  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <Space direction="vertical" size="small" className="w-full items-start">
      <ul className="mb-0 flex list-none flex-wrap gap-0 p-0" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} role="presentation">
            <button
              type="button"
              role="tab"
              className={`about-tab${activeId === tab.id ? ' active' : ''}`}
              aria-selected={activeId === tab.id}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="about-tab-panel w-full" role="tabpanel">
        {activeTab ? <SkillTabItem item={activeTab} /> : null}
      </div>
    </Space>
  );
}
