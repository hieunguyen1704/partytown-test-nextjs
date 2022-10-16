import HeadLayout from "../components/HeadLayout";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <HeadLayout />

      <main className={styles.main}>Test page</main>
    </div>
  );
}
