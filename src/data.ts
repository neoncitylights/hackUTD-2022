type Song = {
	albumSource: string,
	trackName: string,
	artistName: string,
	tempoBpm: number,
	likes: number,
	plays: number,
	genres: string[],
}

let songs: Song[] = [
	{
		albumSource: '../public/cant-slow-me-down.jpg',
		trackName: 'Can\'t Slow Me Down',
		artistName: 'Lionel Richie',
		tempoBpm: 120,
		likes: 12_000_000,
		plays: 1_000_000,
		genres: ['Pop', 'R&B'],
	}
]