import { ReactElement, ReactNode } from "react";
import { DivProps } from "react-html-props";
import { Counter } from "../Text/Counter";
import styles from "./Stat.module.css";

export type StatProps = DivProps & {
	icon?: ReactElement,
	statName: string,
	quantity: ReactNode,
	unit?: string,
}

export const Stat = ({
	icon,
	statName,
	quantity,
	unit,
	...props
}: StatProps) => {
	return (
		<div className={styles.stat} {...props}>
			<span className={styles.statIcon}>
				{icon}
			</span>
			<span className={styles.statContent}>
				<span className={styles.statName}>{statName}</span>
				<span className={styles.statValue}>
					<span className={styles.quantity}>
						{typeof quantity === 'number' ? <Counter from={0} to={quantity} /> : quantity}
					</span>
					{unit && <span className={styles.unit}>{unit}</span>}
				</span>
			</span>
		</div>
	)
}
