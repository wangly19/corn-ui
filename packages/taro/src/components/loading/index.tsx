import * as React from "react";
import { Text, View } from "@tarojs/components";
import clsx from "clsx";

export interface LoadingProps {
  type?: "round" | "default";
}

const loadingIcon = {
  round: "icon-loading-round",
  default: "icon-loading",
};

export const Loading: React.FunctionComponent<LoadingProps> = ({
  type,
  ...props
}) => {
  return (
    <View className="corn-loading corn-loading_rotate" {...props}>
      <Text className={clsx("corn-icons", loadingIcon?.[type || "default"])} />
    </View>
  );
};

Loading.defaultProps = {
  type: "default",
};
