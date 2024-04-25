import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>Home</Link>
      <Link href='/menu1'>menu1</Link>
      <Link href='/menu2'>menu2</Link>
      <Link href='/menu3'>menu3</Link>
    </nav>
  );
}
