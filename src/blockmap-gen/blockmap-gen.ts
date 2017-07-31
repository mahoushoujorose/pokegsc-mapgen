import {Block, RoadBlock, LandBlock, BoundaryBlock, BlockMap} from '../model/blockmap';
import {CitySize, CitySpec} from '../model/attributes';
import {Coords} from '../model/coords';

export class BlockMapGenerator {
  static generateBlockMap(citySpec: CitySpec) {
    let testSize: CitySize = citySpec.getSize();
    console.log(testSize);
    const dimensions = new Coords(8, 10);
    let blockMap = new BlockMap(dimensions.getR(), dimensions.getC());

    for (let row = 0; row < dimensions.getR(); row++) {
      blockMap.setBlock(row, 0, new BoundaryBlock());
      blockMap.setBlock(row, dimensions.getC() - 1, new BoundaryBlock());
    }
    for (let column = 1; column < dimensions.getC() - 1; column++) {
      blockMap.setBlock(0, column, new BoundaryBlock());
      blockMap.setBlock(dimensions.getR() - 1, column, new BoundaryBlock());
    }
    for (let row = 1; row < dimensions.getR() - 1; row++) {
      for (let column = 1; column < dimensions.getC() - 1; column++) {
        blockMap.setBlock(row, column, new LandBlock());
      }
    }

    return blockMap;
  }
}
