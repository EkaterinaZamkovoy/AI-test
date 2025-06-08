import { StartTestingButton } from '@/widgets';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.rainbowText}>Психодиагностика для детей</h1>
        <StartTestingButton />
      </main>
    </div>
  );
}
