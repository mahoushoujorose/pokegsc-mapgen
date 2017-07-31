import {CitySpec} from './attributes';
import {TileUtil} from './tile-util';


/**
 * A single 16x16-pixel tile.
 */
export enum Tile {
  // Solid
  TREE_1x1 = TileUtil.coordsToNumber(0, 4),
  TREE_2x1_TOP = TileUtil.coordsToNumber(0, 2),
  TREE_2x1_BOTTOM = TileUtil.coordsToNumber(1, 2),
  ROOF_GOLD_THIN_LEFT = TileUtil.coordsToNumber(12, 26),
  ROOF_GOLD_THIN_CENTER = TileUtil.coordsToNumber(12, 29),
  ROOF_GOLD_THIN_RIGHT = TileUtil.coordsToNumber(12, 27),
  HOUSE_WHITE_LEFT = TileUtil.coordsToNumber(13, 26),
  HOUSE_WHITE_CENTER = TileUtil.coordsToNumber(13, 29),
  HOUSE_WHITE_RIGHT = TileUtil.coordsToNumber(13, 27),

  // Walkable
  GRASS = TileUtil.coordsToNumber(2, 0),
  ROAD_PINK_BRICK = TileUtil.coordsToNumber(12, 32),
  ROAD_DIRT = TileUtil.coordsToNumber(4, 0),
}


/**
 * Map of tiles.
 */
export class TileMap {
  rows: number;
  columns: number;
  tiles: Array<Array<Tile>>;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.tiles = new Array(rows);
    for (let row = 0; row < rows; row++) {
      this.tiles[row] = new Array(columns);
    }
  }

  setTile(row: number, column: number, tile: Tile) {
    this.tiles[row][column] = tile;
  }

  getTile(row: number, column: number) {
    return this.tiles[row][column];
  }

  getRows() {
    return this.rows;
  }

  getColumns() {
    return this.columns;
  }
}
