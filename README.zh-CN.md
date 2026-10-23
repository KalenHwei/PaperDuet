<p align="center">
  <img src="docs/images/icon.png" width="160" alt="PaperDuet 图标">
</p>

<h1 align="center">PaperDuet</h1>

<p align="center">
  <em>mirror your translation!</em>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/github/v/release/KalenHwei/PaperDuet?style=flat-square&color=111111&label=release" alt="最新版本"></a>
  <img src="https://img.shields.io/badge/macOS-13.3%2B%20%C2%B7%20Apple%20silicon-111111?style=flat-square" alt="macOS 13.3 及以上，Apple 芯片">
  <img src="https://img.shields.io/badge/translation-on%20your%20Mac-111111?style=flat-square" alt="在本机翻译">
  <img src="https://img.shields.io/badge/model-Index--Translate--2B-111111?style=flat-square" alt="模型：Index-Translate-2B">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-PolyForm%20Noncommercial-111111?style=flat-square" alt="许可证：PolyForm Noncommercial 1.0.0"></a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" width="880" alt="PaperDuet 从零开始翻译 Attention Is All You Need：侧栏目录先变成中文，接着右边那一页的标题和摘要在原来的位置出现中文">
</p>

<p align="center">
  <strong>左边是英文原文，右边是同样版式的中文译文，一页对一页。</strong><br>
  翻译在你的 Mac 上完成，15 页的论文大约 2 分钟。<br>
  目录几秒钟就变成中文，摘要半分钟内译完。<br>
  <sub>在 M5 Pro 的 MacBook Pro 上用默认设置从零翻译 Attention Is All You Need（15 页），动图按 1.3 倍速播放。<a href="#速度和内存">详细数据</a>。</sub>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/badge/%E4%B8%8B%E8%BD%BD-Mac%20%C2%B7%20Apple%20%E8%8A%AF%E7%89%87-111111?style=for-the-badge&logo=apple&logoColor=white" alt="下载 Mac 版（Apple 芯片）" height="36"></a>
</p>

<p align="center">
  <sub><a href="README.md">English</a> &middot; <b>简体中文</b></sub>
</p>

用第二语言读论文，常常要在翻译软件和 PDF 之间来回切换，切回来还得重新找读到哪儿、图在哪儿。PaperDuet 把原文和中文译文并排放在一起，一页对一页。翻译由你 Mac 上的一个小模型完成，不用注册账号，也不用 API 密钥，论文始终留在你的电脑里。

## 版式一致，左右对照

<p align="center">
  <img src="docs/images/layout.gif" width="880" alt="滚动浏览第 3 到 5 页：Transformer 结构图、注意力示意图和公式在两边位置相同，右边的英文换成了中文">
</p>

右边就是原文那一页，只是英文换成了中文，位置不变。公式、图和表格原样保留。两边一起滚动、一起缩放，图 2 对着图 2，公式 (1) 对着公式 (1)。PaperDuet 能认出分栏、标题、图表标题、脚注和参考文献，跨栏、跨页的段落会合成一段来译。

## 可以暂停的进度圆环

<p align="center">
  <img src="docs/images/progress-ring.gif" width="880" alt="翻译进行中，镜头推近工具栏上的进度圆环：鼠标移上去出现红色停止按钮，点一下暂停并变成蓝色播放按钮，再点一下继续">
</p>

工具栏上的圆环显示整篇论文译了多少。鼠标移上去，它会变成停止按钮，点一下暂停，再点一下继续。每段译完就会保存，下次打开这篇论文时译文已经在那里。

## 双击，先译这一部分

<p align="center">
  <img src="docs/images/double-click.gif" width="880" alt="第 9 页的 6.3 节还没有译；双击它的第一段，这一节排到最前，状态栏给出提示，各段依次出现中文，页面其余部分继续等待">
</p>

PaperDuet 先译各级标题，所以侧栏目录很快就是中文。接下来是论文标题、摘要和引言，然后从头到尾按顺序译。想先读后面的某一部分，在原文上双击它就行。动图里双击了 6.3 节，这一节的段落就排到了最前面，状态栏会显示排了几段。

## 高亮两边同步

<p align="center">
  <img src="docs/images/highlights.gif" width="880" alt="在原文摘要里选中两句，标成黄色，译文里对应的两句也变黄；再在译文最后一句里选一段标成绿色，左边对应的英文句子也变绿">
</p>

在一边做的高亮、下划线或备注，会出现在另一边对应的句子上。对译文不满意可以直接手动修改，这些操作都能撤销和重做。

## 其他功能

- 整篇译完后，论文所在的文件夹里会多一份“文件名_zh.pdf”，版式和原文相同，文字可以选中复制。之后修改译文，这个文件会跟着更新。不需要的话可以在设置里关掉。
- 模型的每次回复都会核对句子编号、公式和数字，出错的句子会重试。每篇论文还会自动整理一份术语表，让同一个术语前后译法一致。
- 如果图里的文字被译了，或者某一段漏译了，在那一块上右键，选“翻译此块”或“不翻译此块”。
- 可以两边同时查找，用中英对照的目录跳转，鼠标停在段落上时另一边对应的段落会描边。也可以只看原文、只看译文或者两边都看。PaperDuet 会记住你上次读到哪里。
- 可以导出带标注的原文 PDF（用标准 PDF 批注，其他阅读器也能看到）、中文 PDF，以及 Markdown 格式的笔记。
- PaperDuet 会去 GitHub 检查新版本。有新版本时会弹出一张卡片说明改了什么，点一下就下载并安装，重启后就是新版本。更新包都有签名，签名核对不上的不会安装。
- 界面用的是系统的毛玻璃材质，有浅色、深色外观和夜间阅读模式。动画都很短，系统开启“减少动态效果”时会自动关闭。界面语言为简体中文。

<p align="center">
  <img src="docs/images/screenshot-dark.png" width="880" alt="深色外观下的 PaperDuet：第 3 页两边都是 Transformer 结构图，原文和译文上有同样的黄色和绿色高亮，侧栏是中英对照的目录">
</p>

## 安装

需要一台 Apple 芯片的 Mac（M1 及以后），macOS 13.3 及以上，另外留出约 2.1 GB 硬盘空间放翻译模型。

### 下载安装

1. 在 [Releases](https://github.com/KalenHwei/PaperDuet/releases) 下载 `PaperDuet_<版本>_aarch64.dmg`。
2. 打开它，把 PaperDuet 拖进“应用程序”文件夹，之后从那里打开。macOS 不允许应用里自带的翻译引擎在磁盘映像或“下载”文件夹里运行。
3. 这个应用没有经过苹果公证，第一次打开时 macOS 会提示无法验证。打开“系统设置 › 隐私与安全性”，往下找到关于 PaperDuet 的提示，点“仍要打开”并确认。这一步只需要做一次。
   也可以在“终端”里运行：`xattr -dr com.apple.quarantine /Applications/PaperDuet.app`
4. 第一次使用时，PaperDuet 会先在本机找翻译模型，找不到就下载（2.1 GB）。模型一到位就自动开始翻译。详见[翻译模型](#翻译模型)。

除此之外不用再装任何东西，翻译引擎和 Metal 加速都已经包含在应用里。以后的新版本直接在应用里更新，磁盘映像只需要下载这一次。

## 翻译模型

PaperDuet 只用一个模型。它专门用来做翻译，大小也适合在笔记本上运行：

| 模型                                                                                             | 文件                           | 大小    | 许可证     |
| ------------------------------------------------------------------------------------------------ | ------------------------------ | ------- | ---------- |
| [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B)（哔哩哔哩 Index 团队） | `Index-Translate-2B.Q8_0.gguf` | 2.08 GB | Apache-2.0 |

模型由应用自带的 llama.cpp 服务运行，不需要另外安装或打开其他程序。如果本机已经有这个模型文件，PaperDuet 会先核对 SHA-256，然后直接使用，不会重复下载。它会在这些位置查找：

- LM Studio：`~/.lmstudio/models/IndexTeam/Index-Translate-2B-GGUF/` 或 `~/.cache/lm-studio/models/IndexTeam/Index-Translate-2B-GGUF/`
- llama.cpp（`-hf`）：`~/Library/Caches/llama.cpp/`
- Hugging Face 工具：`~/.cache/huggingface/hub/models--IndexTeam--Index-Translate-2B-GGUF/`

都没有的话就从 Hugging Face 下载，连不上时改从 ModelScope 下载。下载可以暂停和继续。

### 速度和内存

在 M5 Pro 的 MacBook Pro 上翻译 15 页的 _Attention Is All You Need_（106 段）实测：

| 同时翻译几段（设置 › 模型） | 整篇用时 | 翻译时占用内存   |
| --------------------------- | -------- | ---------------- |
| 1（默认）                   | 118 秒   | 约 2.8 GB        |
| 先 2 段，译到一半改成 3 段  | 67 秒    | 约 3.0 到 3.2 GB |

表里的内存包括 2.1 GB 的模型文件。“活动监视器”把这部分算作文件缓存，所以那里显示的数字会小一些。翻译引擎空闲 10 分钟后会自动退出，把内存还给系统。

## 隐私

- 论文、译文、标注和设置都只存在本机的 `~/Library/Application Support/io.github.paperduet.app/`。PaperDuet 只会在另一个地方写文件，就是译完的论文旁边的“文件名_zh.pdf”，这个可以在设置里关掉。
- 翻译引擎只在本机（127.0.0.1）的随机端口上监听，只接受带有本次启动时生成的密钥的请求。
- PaperDuet 只在三种情况下联网：下载模型（从 huggingface.co 或 modelscope.cn）、去 GitHub 检查有没有新版本，以及打开你点击的链接。检查更新只读取版本信息，可以在“设置 › 关于”里关掉。
- 它不统计使用数据，不发送崩溃报告，也没有账号。

## 快捷键

| 操作                 | 快捷键                            |
| -------------------- | --------------------------------- |
| 打开 PDF             | ⌘O                                |
| 关闭当前论文         | ⌘W                                |
| 查找（两边同时搜）   | ⌘F                                |
| 下一处、上一处       | ⌘G、⇧⌘G                           |
| 放大、缩小、适合宽度 | ⌘+、⌘−、⌘0                        |
| 以鼠标位置为中心缩放 | 按住 ⌘ 滚动滚轮，或触控板双指捏合 |
| 拖动页面             | 按住 ⌘ 用左键拖                   |
| 先翻译这一部分       | 在还没译的原文上双击              |
| 高亮选中内容         | H                                 |
| 为选中内容加备注     | N                                 |
| 切换高亮颜色         | 1 到 5                            |
| 撤销、重做           | ⌘Z、⇧⌘Z                           |
| 收起或展开侧栏       | ⌘\                                |
| 开关同步滚动         | ⌘L                                |
| 快捷键一览           | ⌘/                                |

H、N、1 到 5 只在选中了文字、并且没有在输入框里打字时有效。

## 常见问题

### 能换别的模型吗？

这一版不能。提示词、译文检查和术语表处理都是针对 Index-Translate-2B 调好的。

### 为什么一篇论文要译一两分钟？

每一句都在你的 Mac 上生成。目录、标题、摘要和引言最先翻译，所以马上就能开始读；想先看别的部分，双击它就会排到前面。把“设置 › 模型 › 同时翻译几段”调成 2 或 3，整篇用时大约减半，代价是多占几百 MB 内存。

### 支持扫描版 PDF 吗？

不支持。扫描件没有文字层，PaperDuet 能打开它，但只能阅读和标注原文。

### 图里的文字被译了，或者某一段没有译

在那一块上右键，选“翻译此块”或“不翻译此块”，选择会跟着这篇论文保存。脚注、图表标题和表注也可以在“设置 › 翻译”里整类关掉。

### macOS 提示翻译引擎无法运行

把 PaperDuet 拖进“应用程序”，从那里重新打开（见[下载安装](#下载安装)）。

### 怎么彻底删除？

把 PaperDuet 从“应用程序”里删掉，再删除 `~/Library/Application Support/io.github.paperduet.app/`（译文、标注、设置，以及 PaperDuet 自己下载的模型）和 `~/Library/Logs/io.github.paperduet.app/`。保存在论文旁边的 `_zh.pdf` 文件会留在原处，不需要的话自己删除。

### 能在公司里用吗？

个人学习和科研可以免费使用，在大学、科研院所、学校和其他非营利机构里也可以。在公司里使用或者用于商业目的需要商业授权，请写信到 [junystugh@gmail.com](mailto:junystugh@gmail.com)。详见[许可证](#许可证)。

## 后续计划

- 用 arXiv 源码重新排版：对 arXiv 上的论文，翻译 LaTeX 源码后用中文字体重新编译，让译文有真正的排版，而不是把文字塞进原来的方框。这样两边的分页会不同，改为按段落对应。
- 英文界面。

## 许可证

PaperDuet 按 [PolyForm Noncommercial License 1.0.0](LICENSE) 发布，非商业用途免费。简单说：

- 可以出于任何非商业目的使用和分享，比如个人使用、学习、科研和业余项目；学校、大学、科研机构、公益组织和政府机构也可以使用。
- 分享给别人时，要一并附上许可证条款和 `Required Notice: Copyright (c) 2026 Kalen Yongda Wei` 这一行。
- 不得用于商业用途。需要商业授权，请写信到 [junystugh@gmail.com](mailto:junystugh@gmail.com)。

以上只是概括，以[许可证原文](LICENSE)为准。PaperDuet 用到的软件和翻译模型各自遵循自己的许可证。

版权所有 © 2026 Kalen Yongda Wei。

## 致谢

PaperDuet 基于 [Tauri](https://tauri.app)、[pdf.js](https://mozilla.github.io/pdf.js/)、[pdf-lib](https://pdf-lib.js.org)、[llama.cpp](https://github.com/ggml-org/llama.cpp)、[React](https://react.dev)、[Zustand](https://github.com/pmndrs/zustand) 和 [Lucide](https://lucide.dev)，翻译用的是哔哩哔哩 Index 团队的 [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B)。它们的许可证全文已经包含在应用里（设置 › 关于 › 第三方许可证）。

动图里的论文是 Vaswani 等人的 [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762)，仅作示例。
