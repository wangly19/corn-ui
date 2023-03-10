import * as React from "react";
import { View, ViewProps } from "@tarojs/components";
import clsx from "clsx";
import { ReactFcBaseProps } from "@/types/fc";

export interface ButtonProps {
  // 样式类型
  variant?: "solid" | "text" | "ghost";
  color?: "primary" | "success" | "warning" | "danger";
  size?: "mini" | "small" | "medium" | "large" | "max";
  round?: boolean;
  bordered?: boolean;
  block?: boolean;
  disabled?: boolean;
}

export const Button: React.FunctionComponent<
  ButtonProps & ReactFcBaseProps & ViewProps
> = (props) => {
  const {
    color,
    variant,
    size,
    className,
    round,
    bordered,
    block,
    disabled,
    ...restProps
  } = props;
  return (
    <View
      hoverClass="__hover-click__"
      className={clsx(
        "corn-button",
        `corn-button-${color}`,
        `corn-button-${variant}`,
        {
          [`corn-button-size-${size}`]: Boolean(size),
          "corn-button-disabled": disabled,
          "corn-button-round": round,
          "corn-button-block": block,
        },
        className
      )}
      {...restProps}
    >
      {/* <Text className="corn-loading" ></Text> */}
      {props.children}
    </View>
  );
};

Button.defaultProps = {
  variant: "solid",
  color: "primary",
  size: "medium",
  round: false,
  bordered: false,
};
