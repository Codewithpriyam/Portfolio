"use client";

import styles from './MenuBar.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface MenuBarProps {
  onOpenPortfolio?: () => void;
  onOpenContact?: () => void;
}

export default function MenuBar({ onOpenPortfolio, onOpenContact }: MenuBarProps) {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    setTimeString(new Date().toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }));
    
    // Optional: update time every minute
    const interval = setInterval(() => {
      setTimeString(new Date().toLocaleTimeString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }));
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.menuBar}>
      <div className={styles.left}>
        <span className={styles.appleLogo}>
          <Image src="/images/logo.svg" alt="Apple" width={19} height={19} />
        </span>
        <span className={styles.brand} onClick={onOpenPortfolio}><h4>Priyam's Portfolio</h4></span>
        <span className={styles.menuItem} onClick={onOpenContact}>Contact</span>
        <span className={styles.menuItem} onClick={() => {
          const a = document.createElement('a');
          a.href = '/files/resume.pdf';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.click();
        }}>Resume</span>
      </div>
      <div className={styles.right}>
        <span className={styles.icon}>
          <Image src="/icons/wifi.svg" alt="Wifi" width={19} height={19} />
        </span>
        <span className={styles.icon}>
          <Image src="/icons/search.svg" alt="Search" width={19} height={19} />
        </span>
        <span className={styles.icon}>
          <Image src="/icons/info.svg" alt="Info" width={19} height={19} />
        </span>
        <span className={styles.time}>{timeString}</span>
      </div>
    </div>
  );
}
