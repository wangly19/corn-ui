import { Button } from "@corn-ui/taro";

import { View } from "@tarojs/components";

export default () => {
  return (
    <View id="layout">
      <View className="example_title">按钮</View>
      <View className="example_content">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
            flexWrap: "wrap",
            columnGap: 10,
            rowGap: 18,
          }}
        >
          <Button size="max" block>
            Max Block
          </Button>
          {["mini", "small", "medium", "large"].map((size) => (
            <Button size={size as any}>{size}</Button>
          ))}
        </div>
      </View>
      <View className="example_title">禁用</View>
      <View className="example_content">
        <Button disabled>禁用</Button>
      </View>
      <View className="example_title">边框</View>
      <View className="example_content">
        <Button variant="ghost">边框</Button>
      </View>
      <View className="example_title">圆角</View>
      <View className="example_content">
        <View
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Button round>圆角按钮</Button>
          <Button>直角边框</Button>
          <Button variant="ghost" round>
            圆角按钮
          </Button>
          <Button variant="ghost">直角边框</Button>
        </View>
      </View>

      <View className="example_title">按钮类型</View>
      <View className="example_content">
        <View
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Button variant="solid">实心按钮</Button>
          <Button variant="ghost">轮廓边框</Button>
          <Button variant="text">文本</Button>
        </View>
      </View>

      <View className="example_title">按钮颜色</View>
      <View className="example_content">
        <View
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Button variant="solid" color="primary">
            Primary
          </Button>
          <Button variant="solid" color="danger">
            Danger
          </Button>
          <Button variant="solid" color="success">
            Success
          </Button>
          <Button variant="solid" color="warning">
            Warning
          </Button>
        </View>
      </View>
    </View>
  );
};
