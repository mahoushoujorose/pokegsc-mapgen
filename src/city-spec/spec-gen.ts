import {CitySpec, CitySize, CityColor} from '../model/attributes';

/**
 * Specification generator.
 */
export class SpecGenerator {
  static generateSpec() {
    let builder = CitySpec.builder();
    builder.setSize(CitySize.MEDIUM);
    builder.addColor(CityColor.PINK);
    return builder.build();
  }
}

