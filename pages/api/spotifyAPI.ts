import SpotifyWebApi from 'spotify-web-api-node'
import type { NextApiRequest, NextApiResponse } from 'next'

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '0569473f72da4e85af2673c36fc6d327',
  clientSecret: '89866fccbc7b4e0a871929b1a7faa89f',
  redirectUri: 'http://localhost:3000/api/spotifyAPI'
});

spotifyApi.setAccessToken('<your_access_token>');

spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof spotifyApi>
) {
  console.log(spotifyApi)
  console.log("Meow1")
  res.status(200).json(spotifyApi)
}
