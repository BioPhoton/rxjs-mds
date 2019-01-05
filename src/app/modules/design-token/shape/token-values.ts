export enum ShapeNames {
  Background = 'background',
  Line = 'line',
  Inactive = 'inactive',
  Value1 = 'value1',
  Value2 = 'value2',
  Value3 = 'value3',
  Value4 = 'value4',
}

export interface Shape {
  [name: string]: string;
}
export const DEFAULT_SHAPES = {
  rectangle: 'rectangle'
};
