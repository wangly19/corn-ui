import * as React from "react";
import { View, ViewProps } from "@tarojs/components";
import { ReactFcBaseProps } from "@/types/fc";
import clsx from "clsx";
import { Loading } from "@/components/loading";

export interface ButtonProps {
  variant?: "solid" | "outline" | "none";

  size?: "small" | "medium" | "large" | "mini";

  type?: "primary" | "warning" | "danger" | "default" | "success";

  block?: boolean;

  disabled?: boolean;

  loading?: boolean;

  round?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FunctionComponent<
  ButtonProps & ReactFcBaseProps & ViewProps
> = ({
  children,
  block,
  round,
  type,
  variant,
  leftIcon,
  rightIcon,
  size,
  disabled,
  loading,
  className,
  ...props
}) => {
  return (
    <View
      hoverClass="corn-btn-hover"
      className={clsx(
        "corn-btn",
        {
          [`corn-btn-${type}`]: type,
          [`corn-btn-${variant}`]: variant && type !== "default",
          [`corn-btn-size-${size}`]: size,
          ["corn-btn-block"]: block,
          ["corn-btn-round"]: round,
          ["corn-btn-disabled"]: disabled || loading,
        },
        className
      )}
      {...props}
    >
      {loading ? (
        <View className="corn-btn_icon corn-btn_icon-left">
          <Loading />
        </View>
      ) : null}
      {leftIcon ? (
        <View className="corn-btn_icon corn-btn_icon-left">{leftIcon}</View>
      ) : null}
      <View>{children}</View>
      {rightIcon ? (
        <View className="corn-btn_icon corn-btn_icon-right">{rightIcon}</View>
      ) : null}
    </View>
  );
};

Button.defaultProps = {
  size: "medium",
  variant: "solid",
  type: "default",
};
