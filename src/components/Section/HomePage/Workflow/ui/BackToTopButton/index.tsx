'use client';

import { useEffect, useState } from 'react';
import styles from './backToTop.module.css';
import clsx from 'clsx';

export function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={clsx(styles.button, visible && styles.visible)}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ⇧
        </button>
    );
}
