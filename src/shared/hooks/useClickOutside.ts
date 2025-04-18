import { useEffect } from "react";

export function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    callback: () => void,
    active = true
) {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            const isClickOutside = ref.current && !ref.current.contains(target);
            const isClickOnBurgerButton = target.closest('#burger-button');

            if (isClickOutside && !isClickOnBurgerButton) {
                callback();
            }
        };

        if (active) {
            document.addEventListener("mousedown", handleClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }
    }, [ref, callback, active]);
}
