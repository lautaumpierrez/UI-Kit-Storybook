import React from "react";
import { ThemeColors } from "../../types/Theme.types";


export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: ThemeColors;
  trigger?: React.ReactElement,
}