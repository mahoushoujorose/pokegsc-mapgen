import {TileUtil} from '../model/tile-util';
import {Tile, TileMap} from '../model/tilemap';
const Canvas = require('canvas');
const fs = require('fs');

export class ImageGenerator {
  static readonly TILE_WIDTH = 16;

  static generateImage(tilemap: TileMap) {
    const height = tilemap.getRows() * ImageGenerator.TILE_WIDTH;
    const width = tilemap.getColumns() * ImageGenerator.TILE_WIDTH;
    const canvas = new Canvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ff007f';
    ctx.fillRect(0, 0, width, height);

    const tilesetImage = new Canvas.Image();
    tilesetImage.src = 'src/img/tileset.png';
    for (let row = 0; row < tilemap.getRows(); row++) {
      for (let column = 0; column < tilemap.getColumns(); column++) {
        const tile = tilemap.getTile(row, column);
        if (tile) {
        ctx.drawImage(
            tilesetImage,
            16 * TileUtil.sheetColumn(tile),
            16 * TileUtil.sheetRow(tile),
            16,
            16,
            16 * column,
            16 * row,
            16,
            16);
        }
      }
    }

    const dataUrl = canvas.toDataURL();
    const data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    const buf = new Buffer(data, 'base64');
    fs.writeFile('image.png', buf);
  }
}

