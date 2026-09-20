import type { MouseEvent } from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
];

function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  const id = href.replace(/^#/, '');
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', href);
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 shadow"
      style={{ backgroundColor: 'rgb(33, 37, 41)' }}
    >
      <div className="site-container flex h-16 items-center justify-between">
        <a
          href="/"
          title="The Portfolio of Sean Loyless"
          className="mr-4 shrink-0"
        >
          <img
            src="/assets/images/logo-notag.svg"
            alt=""
            width={90}
            height={45}
            className="block h-[45px] w-auto max-h-[45px] object-contain"
          />
        </a>

        <nav className="flex flex-1 items-center" aria-label="Primary">
          <ul className="mb-0 flex list-none flex-wrap gap-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link px-3 py-2"
                  onClick={(event) => scrollToSection(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mb-0 hidden list-none flex-nowrap p-0 md:flex">
          <li className="nav-item">
            <a
              href="https://github.com/sloyless"
              target="_blank"
              rel="noreferrer"
              title="Github profile of Sean Loyless"
              className="nav-link social-link px-2"
            >
              <GithubOutlined />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/seanloyless/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn profile of Sean Loyless"
              className="nav-link social-link px-2"
            >
              <LinkedinOutlined />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
