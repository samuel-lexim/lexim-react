import React, { useState, useEffect, useRef } from 'react';
import page from '@/styles/page.module.scss';

const PageTitle = ({ title = '' }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      titleRef.current.classList.remove(page.initNotRunEffect);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${page.pageTitle} _title ${page.initNotRunEffect}`} ref={titleRef}>
      <span>{title}</span>
    </div>
  );
};

export default PageTitle;