'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../styles/header.css'; // 스타일 분리

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/about') {
      return pathname === '/' || pathname === '/about';
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="header dark">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link href="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className={isActive('/skills') ? 'nav-link active' : 'nav-link'}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;