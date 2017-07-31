import {Tile, TileMap} from '../model/tilemap';
import {Block, RoadBlock, LandBlock, BoundaryBlock, BlockMap} from '../model/blockmap';

export class TileMapGenerator {
  static generateTileMap(blockMap: BlockMap) {
    const tileMap =
      new TileMap(2 * blockMap.getRows(), 2 * blockMap.getColumns());
    for (let blockRow = 0; blockRow < blockMap.getRows(); blockRow++) {
      for(let blockColumn = 0; blockColumn < blockMap.getColumns(); blockColumn++) {
        let block = blockMap.getBlock(blockRow, blockColumn);
        if (block instanceof RoadBlock) {
          tileMap.setTile(2 * blockRow, 2 * blockColumn, Tile.ROAD_PINK_BRICK);
          tileMap.setTile(2 * blockRow, 2 * blockColumn + 1, Tile.ROAD_PINK_BRICK);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn, Tile.ROAD_PINK_BRICK);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn + 1, Tile.ROAD_PINK_BRICK);
        } else if (block instanceof LandBlock) {
          tileMap.setTile(2 * blockRow, 2 * blockColumn, Tile.ROAD_DIRT);
          tileMap.setTile(2 * blockRow, 2 * blockColumn + 1, Tile.ROAD_DIRT);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn, Tile.ROAD_DIRT);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn + 1, Tile.ROAD_DIRT);
        } else if (block instanceof BoundaryBlock) {
          tileMap.setTile(2 * blockRow, 2 * blockColumn, Tile.ROOF_GOLD_THIN_LEFT);
          tileMap.setTile(2 * blockRow, 2 * blockColumn + 1, Tile.ROOF_GOLD_THIN_RIGHT);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn, Tile.HOUSE_WHITE_LEFT);
          tileMap.setTile(2 * blockRow + 1, 2 * blockColumn + 1, Tile.HOUSE_WHITE_RIGHT);
        } else {
        }
      }
    }
    return tileMap;
  }
}
