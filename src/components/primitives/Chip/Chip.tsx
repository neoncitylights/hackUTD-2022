import { DivProps } from "react-html-props";
import styles from './Chip.module.css';

export type ChipProps = DivProps & {
	text: string,
}
export const Chip = ({text, ...props}: ChipProps) => {
	return (<div className={styles.chip}>
		<p>{text}</p>
	</div>);
}