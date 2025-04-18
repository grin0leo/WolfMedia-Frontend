import styles from './burgerButton.module.css';
import clsx from 'clsx';

export function BurgerButton({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={clsx(styles.burger, isActive && styles.active)}
            aria-label='Переключатель BurgerMenu'
            id="burger-button"
        >
            <span className={styles.line}></span>
        </button>
    );
}
