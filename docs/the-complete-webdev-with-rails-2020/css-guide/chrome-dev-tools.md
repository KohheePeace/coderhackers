---
title: Chrome DevTools
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Goal

- ⚡ Learn how to use **"Chrome DevTools"** to detect CSS.

## Open DevTools

<Tabs
  groupId="operating-systems"
  defaultValue="win"
  values={[
    { label: "Windows", value: "win" },
    { label: "macOS", value: "mac" },
  ]}
>
<TabItem value="win">

```
Ctrl+Shift+C
```

</TabItem>
<TabItem value="mac">

```
Command+Shift+C
```

</TabItem>
</Tabs>

![open-google-dev-tools](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200514_115650.gif)

You see the applied css
w
![detect-applied-css chrome dev tools](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/2020-05-14-12-09-18.png)

:::info

- **`user agent stylesheet`** is a **default CSS of web browser** (chrome, safari etc...)
- That's why the appearance differs slightly in each browser

:::

## Check different mobile view

![chrome-dev-tools-mobile-view](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200514_115932.gif)

## Add laptop device

:::info TODO

- Laptop with HiDPI screen

:::

![add-HiDPI-screen](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200514_120307.gif)

## Refs

https://developers.google.com/web/tools/chrome-devtools
