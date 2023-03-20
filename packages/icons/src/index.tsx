import * as React from "react";
import { Text } from "@tarojs/components";

export interface IconProps {
  className?: string;
}
export const Icon: React.FunctionComponent<IconProps> = ({
  className,
  ...props
}) => {
  return <Text className={"corn-icons" + className} {...props} />;
};
