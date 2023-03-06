import { Button } from "@corn-ui/taro"

import { View } from '@tarojs/components'

export default () => {
  return (
    <View id="layout" >
      <View className="example_title" >按钮</View>
      <View className="example_content" >
      <Button size="mini" >round</Button>
      <Button >round</Button>
      <Button >round</Button>
      <Button >round</Button>
      </View>
    </View>
    
  )
}
