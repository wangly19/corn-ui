---
group: 进阶
order: 1
---
# 组件列表

## 按钮

与 dumi 1 一样，只需要安装移动端组件研发主题即可切换到移动端组件研发模式：

```bash
$ npm i dumi-theme-mobile@^2.0.0 -D
```

然后可以通过 `themeConfig` 配置该主题包的行为：

```ts
export default {
  themeConfig: {
    // 配置高清方案，默认为 750 高清方案
    hd: {
      rules: [...]
    },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
}
```

关于该主题包的更多介绍及配置项使用方式，可以访问 [移动端组件研发主题](/theme/mobile) 了解更多。

## 效果预览

```tsx
/**
 * title: 按钮组件
 * demoUrl: http://192.168.0.103:10086/#/pages/index/index
 * iframe: true
 */

import React from 'react';

<DemoBlock/>

  export default () =>
null;
```
