import { ElementProps } from 'react-html-props';
import { Music2Add } from 'iconoir-react';
import styles from './Track.module.css';
import { ReactElement } from 'react';

export type TrackProps = ElementProps & {
	albumCover?: ReactElement,
	track: string,
	artist: string[],
};

export const Track = ({
	albumCover = <Music2Add />,
	artist,
	track,
	className,
	...props
}: TrackProps) => {
	let artists: JSX.Element[] = artist.map((artist, index) => {
		return (<span className={styles.artist} key={index}>{artist}</span>);	
	});

	return (<section className={styles.track} {...props}>
		{/* <IconoirProvider iconProps={{
			className: styles.albumCover,
			height: 24,
			width: 24,
		}}>
			
		</IconoirProvider> */}
		<div className={styles.albumCover}>
			{albumCover}
		</div>
		<div className={styles.trackContent}>
			<span className={styles.trackName}>{track}</span>
			<span className={styles.artists}>{artists}</span>
		</div>
	</section>);
}

