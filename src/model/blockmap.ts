import {CitySpec} from './attributes';


/**
 * Whether or not a block can be moved through.
 */
export enum Solidity {
  SOLID,
  MAYBE_SOLID,
  PASSABLE
}


/**
 * A 2x2tile block.
 */
export abstract class Block {
  solidity: Solidity;

  getSolidity() {
    return this.solidity;
  }
}


/**
 * A road block.
 */
export class RoadBlock extends Block {
  constructor() {
    super();
    this.solidity = Solidity.PASSABLE;
  }
}


/**
 * A potentially walkable block that isn't a road.
 */
export class LandBlock extends Block {
  constructor() {
    super();
    this.solidity = Solidity.MAYBE_SOLID;
  }
}


/**
 * A boundary block.
 */
export class BoundaryBlock extends Block {
  constructor() {
    super();
    this.solidity = Solidity.SOLID;
  }
}


/**
 * Map of 2x2tile blocks indicating basic city structure.
 */
export class BlockMap {
  rows: number;
  columns: number;
  blocks: Array<Array<Block>>;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.blocks = new Array(rows);
    for (let row = 0; row < rows; row++) {
      this.blocks[row] = new Array(columns);
    }
  }

  getRows() {
    return this.rows;
  }

  getColumns() {
    return this.columns;
  }

  getBlock(row: number, column: number) {
    return this.blocks[row][column];
  }

  setBlock(row: number, column: number, block: Block) {
    this.blocks[row][column] = block;
  }
}
