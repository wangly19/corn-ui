import * as React from "react";
import { View } from "@tarojs/components";
import clsx from "clsx";
import { ReactFcBaseProps } from "@/types/fc";
import { pxTransform } from "@tarojs/taro";

export interface RowProps {
  gutter?: number;
}

export const Row: React.FunctionComponent<RowProps & ReactFcBaseProps> = ({
  children,
  gutter,
}) => {
  const withChildren = React.useMemo(() => {
    return React.Children.map(children, (child) =>
      React.cloneElement(child as React.ReactElement, {
        gutter,
      })
    );
  }, [gutter, children]);

  return (
    <View
      style={{
        marginInline: pxTransform(-(gutter || 0) / 2),
      }}
      className={clsx("corn-row")}
    >
      {withChildren}
    </View>
  );
};

Row.defaultProps = {
  gutter: 20,
};
