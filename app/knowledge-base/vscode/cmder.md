# 使用cmder终端

1. [下载cmder](https://cmder.app)

2. 环境变量
   以安装目录为 `D:cmder` 为例
   新建环境变量名 CMDER_ROOT, 变量值 D:\cmder
   系统变量 Path 新增 D:\cmder

3. VS Code 终端设置

```json
{
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": ["/k D:\\cmder\\vendor\\init.bat"],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    },
    "cmder": {
      "path": "C:\\WINDOWS\\System32\\cmd.exe",
      "args": ["/k D:\\cmder\\vendor\\init.bat"]
    }
  }
}
```

4. 右键菜单设置

```shell
# 管理员运行cmder.exe
cmder /register all
```
