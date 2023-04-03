import * as React from "react";
import { View } from "@tarojs/components";
import clsx from "clsx";
import { ReactFcBaseProps } from "@/types/fc";

export interface FlexProps {
  direction?: React.CSSProperties["flexDirection"];
  wrap?: React.CSSProperties["flexWrap"];
  basis?: React.CSSProperties["flexBasis"];
  grow?: React.CSSProperties["flexGrow"];
  shrink?: React.CSSProperties["flexShrink"];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  flex?: React.CSSProperties["flex"];
  gap?: number;
}

export const Flex: React.FunctionComponent<FlexProps & ReactFcBaseProps> = ({
  children,
  direction,
  wrap,
  basis,
  grow,
  shrink,
  align,
  justify,
  flex,
  gap,
}) => {
  return (
    <View
      className={clsx("corn-flex")}
      style={{
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        alignItems: align,
        justifyContent: justify,
        flexBasis: basis,
        flex,
        gap,
      }}
    >
      {children}
    </View>
  );
};
