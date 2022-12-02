import { Link } from "@nextui-org/react";
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link href='/users'>users</Link>
        <Link href='/projects'>projects</Link>
        <Link href='/managers'>managers</Link>
        <Link href='/developers'>developers</Link>
        <Link href='/departments'>departments</Link>
        <Link href='/errors'>errors</Link>
      </div>
    </>
  )
}