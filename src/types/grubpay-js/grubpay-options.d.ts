export interface GrubpayOption {
  // Show a checkbox to let user choose to save card
  // if user checked, card's token will be returned unpon success purchase
  showSaveCardCheckBox?: boolean;

  // A default value for the checkbox
  defaultCheckBoxValue?: boolean;

  // Toggle style / Checkbox style
  checkboxToggleStyle?: boolean;

  // Some detailed appearance
  appearance?: GrubpayAppearance;
}

export interface GrubpayAppearance {
  // The base theme of the element
  theme?: string; // 'default' 'simple' 'minimal'

  // Make is dense, takes less space
  dense?: boolean;

  // Dark theme?
  dark?: boolean;

  // Extra style variables
  variables?: GrubpayCssVariables;
}

export interface GrubpayCssVariables {
  fontColor?: string;
  fontSize?: string | number;
  fontFamily?: string;
  colorPrimary?: string;
  colorDanger?: string;
  borderRadius?: string | number;
  borderColor?: string;
  borderWidth?: string | number;
  borderStyle?: string;
  borderFocusColor?: string;
  borderFocusWidth?: string | number;
  borderFocusStyle?: string;
  borderFocusOutlineWidth?: string | number;
  borderFocusOutlineColor?: string;
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?: string | number;
  labelFocusColor?: string;
  labelFontFamily?: string;
  labelPadding?: string | number;
  verticalGapSize?: string | number;
  horizontalGapSize?: string | number;
  inputPadding?: string;
  inputFontSize?: string | number;
  inputFontWeight?: string | number;
  inputColor?: string;
  inputBackgroundColor?: string;
  inputPlaceHolderColor?: string;
  inputShadow?: string;
  inputFocusShadow?: string;
  checkboxColor?: string;
}
