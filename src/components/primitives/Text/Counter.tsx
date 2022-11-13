import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

type CounterProps = {
	from: number,
	to: number,
}

export const Counter = ({ from, to }: CounterProps) => {
	const nodeRef = useRef<HTMLParagraphElement>(null);
	useEffect(() => {
		const node = nodeRef.current;
		const controls = animate(from, to, {
			duration: 1,
			onUpdate(value) {
				if (null !== node) {
					node.textContent = value.toFixed(2);
				}
			}
		});
		return () => controls.stop();
	}, [from, to]);

	return <p ref={nodeRef} />;
}
