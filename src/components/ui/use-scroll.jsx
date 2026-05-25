import React from 'react';

export function useScroll(threshold) {
	// Initialize with the current scroll position to avoid calling setState in useEffect
	const [scrolled, setScrolled] = React.useState(() => {
		if (typeof window !== 'undefined') {
			return window.scrollY > threshold;
		}
		return false;
	});

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	return scrolled;
}
