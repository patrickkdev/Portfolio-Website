import styles from '@/styles/modules/Portfolio.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FiLink as LinkIcon } from 'react-icons/fi';
import { UrlObject } from 'url';

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  href: string | UrlObject;
};

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  return (
    <div className={classNames(styles['portfolio'], 'bg-white dark:bg-gray-700 shadow-lg')}>
      <Image
        src={imageUrl}
        height={384}
        width={512}
        alt={title}
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          filter: 'saturate(1.1) contrast(1.2)'
        }} />
      <div className={styles['portfolio-overlay']}>
        <span className={styles['portfolio-category']}>{category}</span>
        <Link href={href} className={styles['portfolio-title']}>
          {title}
        </Link>
        <Link href={href} className={styles['portfolio-link']}>
          <LinkIcon className="h-5 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
