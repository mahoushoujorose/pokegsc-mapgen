/**
 * Specification for a city.
 */
export class CitySpec {
  private size: CitySize;
  private colors: Array<CityColor>;

  constructor(
      size: CitySize,
      colors: Array<CityColor>) {
    this.size = size;
    this.colors = colors;
  }

  getSize() {
    return this.size;
  }

  getColors() {
    return this.colors;
  }

  static builder(): CitySpecBuilder {
    return new CitySpecBuilder();
  }
}


export class CitySpecBuilder {
  private size: CitySize;
  private colors: Array<CityColor>;

  constructor() {
    // default values
    this.size = CitySize.SMALL;
    this.colors = new Array<CityColor>();
  }

  setSize(size: CitySize) {
    this.size = size;
    return this;
  }
  get getSize() {
    return this.size;
  }

  addColor(color: CityColor) {
    this.colors.push(color);
    return this;
  }
  get getColors() {
    return this.colors;
  }

  build(): CitySpec {
    return new CitySpec(
        this.size,
        this.colors);
  }
}


export enum CitySize {
  SMALL,
  MEDIUM,
  LARGE,
  ENORMOUS
}

export enum CityColor {
  NONE,
  PINK,
  ORANGE,
  BROWN,
  YELLOW,
  GREEN,
  AQUA,
  INDIGO,
  PURPLE,
  BLACK,
  GRAY,
  WHITE
}
