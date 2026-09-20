import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#dc3545',
          borderRadius: 4,
          colorBgBase: '#212529',
          colorBgLayout: '#212529',
          colorBgContainer: '#212529',
          colorText: 'rgba(248, 249, 250, 0.88)',
          colorTextSecondary: 'rgba(248, 249, 250, 0.65)',
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
