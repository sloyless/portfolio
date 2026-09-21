import { Flex, Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export function SiteFooter() {
  return (
    <Footer className="site-footer">
      <Flex
        className="site-container flex-col py-4 sm:flex-row"
        justify="space-between"
        align="center"
        gap="middle"
      >
        <Text className="!text-white/60">
          © {new Date().getFullYear()} Sean Loyless
        </Text>
      </Flex>
    </Footer>
  );
}
