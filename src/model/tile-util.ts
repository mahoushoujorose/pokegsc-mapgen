import {Tile} from './tilemap';

/**
 * Utility functions for working with Tiles.
 */
export class TileUtil {
  static SHEET_WIDTH = 44;
  static coordsToNumber(row: number, column: number) {
    return row * TileUtil.SHEET_WIDTH + column;
  }

  static sheetRow(tile: Tile) {
    return Math.floor(tile / TileUtil.SHEET_WIDTH);
  }

  static sheetColumn(tile: Tile) {
    return tile % TileUtil.SHEET_WIDTH;
  }
}
