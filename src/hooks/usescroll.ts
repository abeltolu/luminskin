import { useState, useEffect, useCallback } from 'react';

type State = {
    lastScrollTop: number;
    bodyOffset: DOMRect;
    scrollY: number;
    scrollX: number;
    scrollDirection: 'up' | 'down' | 'unset';
};
export const useScroll = () => {
    const [state, setState] = useState<State>({
        lastScrollTop: 0,
        bodyOffset: document.body.getBoundingClientRect(),
        scrollY: document.body.getBoundingClientRect().top,
        scrollX: document.body.getBoundingClientRect().left,
        scrollDirection: 'unset',
    });

    const handleScrollEvent = useCallback((e) => {
        setState((prevState: State) => {
            const prevLastScrollTop = prevState.lastScrollTop;
            const bodyOffset = document.body.getBoundingClientRect();

            return {
                bodyOffset: bodyOffset,
                scrollY: -bodyOffset.top,
                scrollX: bodyOffset.left,
                scrollDirection:
                    prevLastScrollTop > -bodyOffset.top ? 'down' : 'up',
                lastScrollTop: -bodyOffset.top,
            };
        });
    }, []);

    useEffect(() => {
        const scrollListener = (e: Event) => {
            handleScrollEvent(e);
        };
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [handleScrollEvent]);

    return {
        scrollY: state.scrollY,
        scrollX: state.scrollX,
        scrollDirection: state.scrollDirection,
    };
};

export default useScroll;
