import React from "react";
import { StateColors, ThemeColors } from "../../types/Theme.types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ThemeColors | StateColors;
}