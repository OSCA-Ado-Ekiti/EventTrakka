import { useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Provides scrolling to top button functionality.
 *
 * @param threshold - The y (height) of the page when the button should become visible
 * @param animateTarget - Set to true if you need to animate a component at the threshold
 * 	and bind the targetEl to the component.
 */
export default function (threshold: number, animateTarget: boolean) {
	const scrollAnimationControls = useAnimation();
	const [isScrollToTopButtonVisible, setIsScrollToTopButtonVisible] =
		useState(false);
	const targetEl = useRef<HTMLElement | null>(null);

	const handleToggleScrollToTopButton = async () => {
		if (animateTarget) {
			if (!targetEl.current) return;
			const sectionTop = targetEl.current.offsetTop - window.innerHeight;

			if (window.scrollY >= sectionTop) {
				await scrollAnimationControls.start({ opacity: 1, y: 0 });
			} else {
				await scrollAnimationControls.start({ opacity: 0, y: 30 });
			}
		}

		if (window.scrollY > threshold) {
			setIsScrollToTopButtonVisible(true);
		} else {
			setIsScrollToTopButtonVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleToggleScrollToTopButton);
		return () =>
			window.removeEventListener("scroll", handleToggleScrollToTopButton);
	}, [animateTarget ? scrollAnimationControls : null]);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return {
		scrollAnimationControls,
		isScrollToTopButtonVisible,
		targetEl,
		handleScrollToTop,
	};
}
