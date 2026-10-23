<p align="center">
  <img src="docs/images/icon.png" width="160" alt="PaperDuet 图标">
</p>

<h1 align="center">PaperDuet</h1>

<p align="center">
  <em>为科研人员打造的最佳轻量级论文翻译器！</em>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/github/v/release/KalenHwei/PaperDuet?style=flat-square&color=111111&label=release" alt="最新版本"></a>
  <img src="https://img.shields.io/badge/macOS-13.3%2B%20%C2%B7%20Apple%20silicon-111111?style=flat-square" alt="macOS 13.3 及以上，Apple 芯片">
  <img src="https://img.shields.io/badge/translation-on%20your%20Mac-111111?style=flat-square" alt="在本机翻译">
  <img src="https://img.shields.io/badge/models-5_to_choose_from-111111?style=flat-square" alt="模型：五个可选">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-PolyForm%20Noncommercial-111111?style=flat-square" alt="许可证：PolyForm Noncommercial 1.0.0"></a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" width="880" alt="PaperDuet 从零开始翻译 Attention Is All You Need：侧栏目录先变成中文，接着右边那一页的标题和摘要在原来的位置出现中文">
</p>

<p align="center">
  <strong>这是一款能保留格式的轻量级镜像论文翻译器。</strong><br>
  可选五种开源 AI 翻译模型。<br>
  无需登录，无需付费，完全本地。<br>
  <sub>在 M5 Pro 的 MacBook Pro 上从零翻译 Attention Is All You Need（15 页）的实录，动图 1.3 倍速。</sub>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/badge/%E4%B8%8B%E8%BD%BD-Mac%20%C2%B7%20Apple%20%E8%8A%AF%E7%89%87-111111?style=for-the-badge&logo=apple&logoColor=white" alt="下载 Mac 版（Apple 芯片）" height="36"></a>
</p>

<p align="center">
  <sub><a href="README.md">English</a> &middot; <b>简体中文</b></sub>
</p>

不用再在翻译软件和 PDF 之间来回切换。PaperDuet 把论文原文和中文译文并排摆好，一页对一页，公式、图片、表格都在原来的位置。翻译在你的 Mac 上完成：不用注册，不用 API 密钥，不用订阅，论文不会离开你的电脑。

## 每一页，都是镜像

<p align="center">
  <img src="docs/images/layout.gif" width="880" alt="滚动浏览第 3 到 5 页：Transformer 结构图、注意力示意图和公式在两边的位置完全一样，右边的英文换成了中文">
</p>

右边就是原来那一页，只是英文换成了中文，位置分毫不差。公式、图片和表格原样保留，两边一起滚动、一起缩放，图 2 永远挨着图 2。分栏、标题、图注、脚注和参考文献都能自动识别，跨栏、跨页的段落也会自动接上。

## 几秒钟就能开始读

<p align="center">
  <img src="docs/images/double-click.gif" width="880" alt="第 9 页的 6.3 节还没有翻译；双击它的第一段，这一节就排到最前面，状态栏给出提示，各段依次变成中文，页面上其余部分稍后再译">
</p>

各级标题最先翻译，目录几乎立刻变成中文；接着是论文标题、摘要和引言，然后是其余部分。想先看后面的章节？双击它，马上排到最前面。

## 两边同步的高亮

<p align="center">
  <img src="docs/images/highlights.gif" width="880" alt="在原文里选中摘要的两句话并标成黄色，译文里对应的两句也变成黄色；接着在译文最后一句里标出一段绿色，左边对应的英文句子也变成绿色">
</p>

在任意一边高亮、划线或写批注，另一边对应的句子会同步标出来。哪句想译得更好，可以直接改，随时撤销、重做。

## 随时暂停，随时继续

<p align="center">
  <img src="docs/images/progress-ring.gif" width="880" alt="镜头推近工具栏上正在转动的进度圆环：鼠标移上去出现红色停止按钮，点一下暂停并变成蓝色播放按钮，再点一下继续翻译">
</p>

工具栏上的圆环显示翻译进度。鼠标移上去就能停，点一下暂停，再点一下继续。每段译完立刻保存，下次打开论文，译文已经在那里等你。

## 还有这些

- **自动生成中文 PDF**：整篇译完后，按原版式在论文旁边保存 `<文件名>_zh.pdf`，文字可以选中复制，改了译文它也跟着更新。
- **内置质量检查**：每次回复都核对公式、数字和句子顺序，出错自动重试；每篇论文自动整理术语表，前后译法一致。
- **翻译什么你说了算**：右键任意一块，选择翻译它或者保留英文。
- **怎么读都顺手**：中英文同时搜索、双语目录、鼠标指向一段就能找到另一边对应的段落，可以只看原文、只看译文或者两边都看。PaperDuet 会记住你读到哪儿。
- **导出到任何地方**：带标注的原文 PDF（标准 PDF 批注，其他阅读器也能看）、中文 PDF、Markdown 笔记。
- **一键更新**：新版本直接在应用里提示，带签名校验，点一下就装好。
- **为 Mac 而做**：系统原生毛玻璃材质，浅色、深色和夜间阅读模式，动画遵从“减弱动态效果”设置。

<p align="center">
  <img src="docs/images/screenshot-dark.png" width="880" alt="深色外观下的 PaperDuet：两边都是第 3 页的 Transformer 结构图，原文和译文上各有一处黄色和绿色高亮，侧栏是中英双语目录">
</p>

## 五个模型，全在你的 Mac 上

第一次打开时选一个，之后随时在“设置 › 模型 › 更换模型”里换。五个都是专门做翻译的模型，下载好以后完全离线运行。

| 模型 | 来自 | 大小 | 适合 |
| --- | --- | --- | --- |
| [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B)**（推荐）** | 哔哩哔哩 Index 团队 | 2.1 GB | 综合最好，PaperDuet 的检查和术语表专门为它调过 |
| [Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF) | 腾讯混元 | 1.9 GB | 追求速度，最快也最轻 |
| [LMT-60-4B](https://huggingface.co/NiuTrans/LMT-60-4B) | 小牛翻译 NiuTrans | 4.7 GB | 贴近原文的译法 |
| [Hy-MT2-7B](https://huggingface.co/tencent/Hy-MT2-7B-GGUF) | 腾讯混元 | 8.0 GB | 中文最通顺，适合 16 GB 以上内存的 Mac |
| [TranslateGemma-4B](https://huggingface.co/mradermacher/translategemma-4b-it-GGUF)（实验性） | Google | 4.1 GB | 想试试 Google 的翻译模型 |

用推荐的模型，15 页的论文在 M5 Pro 上大约 2 分钟译完；在“设置 › 模型”里把“同时翻译几段”调到 2 或 3，大约 1 分钟。

已经用 LM Studio、llama.cpp 或 Hugging Face 下过这些模型？PaperDuet 会自动找到并直接使用，不用再下一遍。

## 隐私

- 论文、译文和笔记都留在你的 Mac 上。
- 不用注册账号，不收集使用数据，也不上传崩溃报告。
- 只在下载模型和检查更新时联网，检查更新也可以关掉。

## 开始使用

需要 Apple 芯片的 Mac（M1 及以后）和 macOS 13.3 及以上。

1. 从 [Releases](https://github.com/KalenHwei/PaperDuet/releases/latest) 下载最新的 `.dmg`。
2. 把 PaperDuet 拖进“应用程序”，从那里打开。
3. 仅第一次：PaperDuet 还没有经过 Apple 公证，macOS 会让你确认一下。打开“系统设置 › 隐私与安全性”，点 **仍要打开**。（也可以在终端里运行 `xattr -dr com.apple.quarantine /Applications/PaperDuet.app`。）
4. 选一个模型。PaperDuet 会下载它，或者直接用你已有的那份，然后马上开始翻译。

就这么简单。翻译引擎已经打包在应用里，以后的新版本在应用里一键升级。

<details>
<summary><b>快捷键</b></summary>

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

H、N、1 到 5 作用于选中的文字。

</details>

## 常见问题

### 选哪个模型好？

先用 Index-Translate-2B。想要更快，选 Hy-MT2-1.8B；想要最通顺的中文，并且 Mac 有 16 GB 以上内存，选 Hy-MT2-7B。

### 收费吗？

个人学习、科研免费，高校、中小学、科研院所和其他非营利机构使用也免费。在公司里或为公司使用需要商业授权，请写信到 [junystugh@gmail.com](mailto:junystugh@gmail.com)。

## 后续计划

- **arXiv 论文重新排版**：直接翻译论文的 LaTeX 源码，用中文字体重新编译，得到真正排版好的中文版。
- **英文界面**。

## 许可证

PaperDuet 按 [PolyForm Noncommercial 1.0.0](LICENSE) 许可证免费用于非商业用途：个人、学习、科研和非营利用途都可以使用和分享；分享时请附上许可证和这一行 `Required Notice: Copyright (c) 2026 Kalen Yongda Wei`。商业使用请写信到 [junystugh@gmail.com](mailto:junystugh@gmail.com)。

Copyright © 2026 Kalen Yongda Wei.

## 致谢

PaperDuet 基于 [Tauri](https://tauri.app)、[pdf.js](https://mozilla.github.io/pdf.js/)、[pdf-lib](https://pdf-lib.js.org)、[llama.cpp](https://github.com/ggml-org/llama.cpp)、[React](https://react.dev)、[Zustand](https://github.com/pmndrs/zustand) 和 [Lucide](https://lucide.dev) 构建。翻译模型来自哔哩哔哩 Index 团队（Index-Translate-2B）、腾讯混元（Hy-MT2）、小牛翻译（LMT）和 Google（TranslateGemma），除 TranslateGemma 遵循 [Gemma 使用条款](https://ai.google.dev/gemma/terms) 外均为 Apache-2.0 许可证。完整的许可证文本见应用内“设置 › 关于 › 第三方许可证”。

动图里的论文是 Vaswani 等人的 [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762)。
