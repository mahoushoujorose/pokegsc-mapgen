import {SpecGenerator} from './src/city-spec/spec-gen';
import {BlockMapGenerator} from './src/blockmap-gen/blockmap-gen';
import {TileMapGenerator} from './src/tilemap-gen/tilemap-gen';
import {ImageGenerator} from './src/img-gen/img-gen';
import {Block, RoadBlock, LandBlock, BoundaryBlock, BlockMap} from './src/model/blockmap';
import {Tile, TileMap} from './src/model/tilemap';

const Twitter = require('twitter');
const secret = {
  consumer_key: '5V1F6Zx7e7Y8Hryo7sDvKaKnd',
  consumer_secret: 'WPRVwdLIMPSM3FdbVA1yJUfnilYkBHHrGFbeKpFw9AhsAXUV0b',
  access_token_key: '882803300327759873-CxKpA2lNAqZTDlVQz48tneirxjd6HRw',
  access_token_secret: 'zkY9fkKLX6ncKSYIkCrqOASOLCGtXnSeppbA9YkpWvbRT'
};
const client = new Twitter(secret);
const post = 'hello world!!!!!!!';
/*client.post('statuses/update', {status: post}, (error: Error, tweet: string, response: Object) => {
  console.log(tweet);
  console.log(response);
});*/

const citySpec = SpecGenerator.generateSpec();
console.log(citySpec);
const blockMap = BlockMapGenerator.generateBlockMap(citySpec);
const tileMap = TileMapGenerator.generateTileMap(blockMap);
ImageGenerator.generateImage(tileMap);
