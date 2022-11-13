import { PlayOutline } from 'iconoir-react';
import Image, { ImageProps } from 'next/image';
import { ElementProps } from 'react-html-props';
import { Heading } from '@/components/primitives/Text';
import { WaveForm } from '@/components/primitives/WaveForm';
import styles from './TrackPlayer.module.css';

export type TrackPlayerProps = ElementProps & {
	albumSource: ImageProps['src'];
	trackName: string,
	artist: string[],
}

export const onAlbumClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
}

export const TrackPlayer = ({albumSource, trackName, artist, ...props}: TrackPlayerProps) => {
	let artists: JSX.Element[] = artist.map((artist, index) => {
		return (<span className={styles.artist} key={index}>{artist}</span>);	
	});

	return (
		<section className={styles.trackPlayer}>
			<div className={styles.albumContainer}>
				<Image
					className={styles.trackAlbumCover}
					src={albumSource}
					alt=""
					width={200} height={200}
					/>
				<div className={styles.albumOverlay}>
					<div className={styles.albumOverlayButton}>
						<PlayOutline width={36} height={36} />
					</div>
				</div>
			</div>
			<div className={styles.trackInfo}>
				<Heading level={2}>{trackName}</Heading>
				<p className={styles.artists}>{artists}</p>
				<WaveForm lines={200} lineColor='#555' />
			</div>
		</section>
	);
}
