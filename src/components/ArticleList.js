import styles from '@/styles/articleList.module.scss';
import Link from "next/link";

const ArticleList = (
  {
    title, subHeading, className,
    isFirst = false,
    isLast = false,
    link = '/#'
  }
) => {

  return (
    <Link href={link} className={styles.link} scroll={true}>
      <div className={`${styles.articleListWrap} ${className}
      ${isFirst ? styles.isFirst : ''}
      ${isLast ? styles.isLast : ''}
    `}>
        <h2 className={`${styles.itemTitle} s40_64`}>{title}</h2>
        <div className={styles.itemContent}>
          <h4 className={`${styles.subHeading} s28_42`}>{subHeading}</h4>
          <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
              fill="black"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ArticleList;