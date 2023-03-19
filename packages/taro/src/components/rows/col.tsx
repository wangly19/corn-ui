import * as React from "react";
import { View } from "@tarojs/components";
import clsx from "clsx";
import { ReactFcBaseProps } from "@/types/fc";
import { pxTransform } from "@tarojs/taro";

export interface ColProps {
  span?: number;
  gutter?: number;
  offset?: number;
}

export const Col: React.FunctionComponent<ColProps & ReactFcBaseProps> = ({
  span,
  className,
  children,
  gutter,
  style,
  offset,
  ...restProps
}) => {
  const gutterStyle: React.CSSProperties = React.useMemo(() => {
    if (!gutter) {
      return {};
    }
    return {
      paddingInline: pxTransform(gutter / 2),
      marginBottom: pxTransform(gutter),
    };
  }, [gutter]);

  return (
    <View
      style={{
        ...style,
        ...gutterStyle,
      }}
      className={clsx("corn-col", {
        [`corn-col-span-${span}`]: span && span > 0 && span < 13,
        [`corn-col-offset-${offset}`]: offset && offset > 0 && offset < 13,
      })}
      {...restProps}
    >
      {children}
    </View>
  );
};
