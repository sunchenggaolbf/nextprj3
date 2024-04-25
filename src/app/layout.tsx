import Link from 'next/link';
import { ReactNode } from 'react';
import Menu from '../components/Menu'


type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html>
      <body>
        <header>
          <h1>Home Layout</h1>
          <Menu />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}