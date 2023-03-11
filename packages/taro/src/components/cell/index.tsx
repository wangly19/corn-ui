import React from "react";
import { Text, View, ViewProps } from "@tarojs/components";
import clsx from "clsx";
import { ReactFcBaseProps } from "@/types/fc";

export interface CellProps {
  label: React.ReactNode;
  description?: React.ReactNode;

  showArrow?: boolean;
  arrow?: React.ReactNode;

  leftIcon?: React.ReactNode;
}

export const Cell: React.FunctionComponent<
  CellProps & ReactFcBaseProps & ViewProps
> = ({ leftIcon, label, arrow, description, ...resetProps }) => {
  return (
    <View className={clsx("corn-cell")} {...resetProps}>
      {leftIcon ? <View className="corn-cell_icon">{leftIcon}</View> : null}
      <View className="corn-cell_left">
        <View className="corn-cell_left_label">{label}</View>
        <View className="corn-cell_left_desc">{description}</View>
      </View>
      <View className="corn-cell_right">
        {arrow}
        <Text className="corn-icons icon-right corn-cell_arrow" />
      </View>
    </View>
  );
};

Cell.defaultProps = {};
