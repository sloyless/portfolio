import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Button, Flex, Layout } from 'antd';
import { scrollToSection } from '../utils/scrollToSection';

const { Header } = Layout;

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

export function SiteHeader() {
  return (
    <Header className="site-header sticky top-0 z-50 px-0">
      <Flex
        className="site-container min-h-16 py-2"
        align="center"
        justify="space-between"
        gap="middle"
        wrap="wrap"
      >
        <a
          href="#about"
          title="The Portfolio of Sean Loyless"
          className="shrink-0"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('#about');
          }}
        >
          <img
            src="/assets/images/logo-notag.svg"
            alt=""
            width={90}
            height={45}
            className="block h-[45px] w-auto max-h-[45px] object-contain"
          />
        </a>

        <Flex
          component="nav"
          aria-label="Primary"
          className="site-header-nav min-w-0 flex-1"
          justify="center"
          wrap="wrap"
          gap="small"
        >
          {navLinks.map((link) => (
            <Button
              key={link.href}
              type="text"
              className="site-header-nav-link"
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </Flex>

        <Flex gap="small">
          <Button
            type="text"
            href="https://github.com/sloyless"
            target="_blank"
            rel="noreferrer"
            title="Github profile of Sean Loyless"
            className="social-link !text-white/60 hover:!text-white"
            icon={<GithubOutlined />}
          />
          <Button
            type="text"
            href="https://www.linkedin.com/in/seanloyless/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile of Sean Loyless"
            className="social-link !text-white/60 hover:!text-white"
            icon={<LinkedinOutlined />}
          />
        </Flex>
      </Flex>
    </Header>
  );
}
