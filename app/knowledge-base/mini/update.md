---
sidebar_position: 1
---

# 更新检测

参考[https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html)

```ts title="以 Taro 为例"
import Taro from '@tarojs/taro'
import logger from './logger'
import { showModal } from './ui'

/**
 * 检查更新
 */
export async function updateApp() {
  const updateManager = Taro.getUpdateManager()
  updateManager.onCheckForUpdate((res) => {
    if (res.hasUpdate) {
      logger.info(`检测到新的更新`)
    }
  })
  updateManager.onUpdateReady(async () => {
    try {
      await showModal('新版本已经准备好，是否重启应用？', '更新提示')
      updateManager.applyUpdate()
    }
    catch {
      logger.warn('用户取消更新')
    }
  })
  updateManager.onUpdateFailed(() => {
    logger.error('新版本下载失败')
  })
}
```
