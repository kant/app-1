import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../styles/Home.module.css';
import Counter from '../common/components/Counter';
import { H1 } from '../common/styledComponents/Head';

export default function Example() {
  const router = useRouter();
  const { t } = useTranslation(['common', 'counter']);

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Link passHref href="/example" locale={router.locale === 'en' ? 'es' : 'en'}>
          <button type="button">{t('common:change-locale')}</button>
        </Link>
        <H1 type="h1" className={styles.title}>
          {t('common:heading')}
          {' '}
          <Link href="/example">Example!</Link>
        </H1>

        <Counter title={t('counter:title')} resetText={t('counter:resetButton')} />
      </main>

      <footer className={styles.footer}>
        <Link passHref href="/">
          Powered by
          {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
    </div>
  );
}