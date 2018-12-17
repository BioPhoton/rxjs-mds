export enum ColorsNames {
  Background = 'background',
  Line = 'line',
  Inactive = 'inactive',
  Value1 = 'value1',
  Value2 = 'value2',
  Value3 = 'value3',
  Value4 = 'value4',
}

export interface Colors {
  [ColorsNames.Background]: string;
  [ColorsNames.Line]: string;
  [ColorsNames.Inactive]: string;
  [ColorsNames.Value1]: string;
  [ColorsNames.Value2]: string;
  [ColorsNames.Value3]: string;
  [ColorsNames.Value4]: string;
}
export const DEFAULT_COLORS: Colors = {
  [ColorsNames.Background]: '#FFFFFF',
  [ColorsNames.Line]: '#000000',
  [ColorsNames.Inactive]: '#CCCCCC',
  [ColorsNames.Value1]: '#767676',
  [ColorsNames.Value2]: '#ccc',
  [ColorsNames.Value3]: '#efefef',
  [ColorsNames.Value4]: '#ed9dc5'
};
