import styles from './WaveForm.module.css';

export type WaveFormProps = {
	items?: number[],
	minDist?: number,
	maxDist?: number,
	lines?: number,
	lineHeight?: number,
	lineSpacing?: number,
	lineWidth?: number,
	lineColor?: string,
	lineCap?: 'butt' | 'round' | 'square',
}

export const WaveForm = ({
	items = [],
	minDist = 7,
	maxDist = 30,
	lines = 100,
	lineHeight = 50,
	lineSpacing = 4,
	lineWidth = 2,
	lineColor = '#fff',
	lineCap = 'round',
	...props
}: WaveFormProps) => {
	items = Array.from(
		{ length: maxDist - minDist + 1 },
		(_, idx) => 7 + idx
	);

	const svgLines: JSX.Element[] = [];
	for(let i = 0; i < lines; i++){
		let y1 = items[Math.floor(Math.random() * items.length)];
		let y2 = lineHeight - y1;
		let x = i * lineSpacing;
		svgLines.push(
			<line 
				className={styles.waveFormLine}
				key={`waveform-line-${i}`}
				x1={x} y1={y1} x2={x} y2={y2}
				stroke-width={lineWidth}
				stroke-linecap={lineCap}
				stroke={lineColor}/>
		);
	}

	return (<svg
			xmlns="http://www.w3.org/2000/svg"
			id="svg"
			className={styles.waveForm}
			viewBox={`0 0 ${lines * lineSpacing} ${lineHeight}`}
			width={lines * lineSpacing}
			height={lineHeight}
			{...props}>
		{svgLines}
	</svg>);
}
