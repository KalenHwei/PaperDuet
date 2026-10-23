<p align="center">
  <img src="docs/images/icon.png" width="160" alt="PaperDuet icon">
</p>

<h1 align="center">PaperDuet</h1>

<p align="center">
  <em>The paper on the left. The same paper, in Chinese, on the right.</em>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/github/v/release/KalenHwei/PaperDuet?style=flat-square&color=111111&label=release" alt="Latest release"></a>
  <img src="https://img.shields.io/badge/macOS-13.3%2B%20%C2%B7%20Apple%20silicon-111111?style=flat-square" alt="macOS 13.3 or later on Apple silicon">
  <img src="https://img.shields.io/badge/translation-on%20your%20Mac-111111?style=flat-square" alt="The translation runs on your Mac">
  <img src="https://img.shields.io/badge/model-Index--Translate--2B-111111?style=flat-square" alt="Model: Index-Translate-2B">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-PolyForm%20Noncommercial-111111?style=flat-square" alt="License: PolyForm Noncommercial 1.0.0"></a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" width="880" alt="PaperDuet translating Attention Is All You Need from scratch: the outline in the sidebar turns Chinese first, then the title and the abstract appear on the right page, in the same place as on the original">
</p>

<p align="center">
  <strong>Read English papers next to a Chinese translation in the same layout.</strong><br>
  <strong>Translated on your Mac &middot; about 2 minutes for 15 pages &middot; nothing to set up</strong><br>
  The outline is in Chinese within seconds and the abstract within half a minute; the rest follows while you read.<br>
  <sub>Attention Is All You Need (15 pages) translated from scratch on a MacBook Pro with M5 Pro, default settings. The animation runs at 1.3&times; speed. <a href="#speed-and-memory">Details</a>.</sub>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/badge/Download%20for%20Mac-Apple%20silicon-111111?style=for-the-badge&logo=apple&logoColor=white" alt="Download for Mac (Apple silicon)" height="36"></a>
</p>

<p align="center">
  <sub><b>English</b> &middot; <a href="README.zh-CN.md">简体中文</a></sub>
</p>

---

Reading a paper in a second language means going back and forth: paste a sentence into a translator, go back to the PDF, find your place again, look for the figure. PaperDuet keeps the original and a Chinese translation next to each other, page for page, so your eyes only move across. The translation is made by a small model that runs on your Mac: no account, no API key, and the paper never leaves your computer.

## Same layout on both sides

<p align="center">
  <img src="docs/images/layout.gif" width="880" alt="Scrolling through pages 3 to 5: the Transformer diagram, the attention diagrams and the formulas sit in the same place on both sides, with the English text replaced by Chinese on the right">
</p>

The right side is the original page with the English replaced by Chinese in the same places. Formulas, figures and tables stay exactly as they are, and both sides scroll and zoom together, so Figure 2 sits next to Figure 2 and equation (1) next to equation (1). PaperDuet recognises columns, headings, captions, footnotes and references, and joins paragraphs that continue in the next column or on the next page.

## A progress ring you can pause

<p align="center">
  <img src="docs/images/progress-ring.gif" width="880" alt="The camera moves in on the progress ring in the toolbar while a paper is being translated: pointing at it shows a red stop button, a click pauses and shows a blue play button, another click goes on">
</p>

The ring in the toolbar shows how much of the paper is translated. Point at it and it turns into a stop button; click to pause, click the play button to go on. Everything translated so far is kept: close the paper, open it again tomorrow, and the translation is there at once. A paper is never translated twice.

## Double-click to read ahead

<p align="center">
  <img src="docs/images/double-click.gif" width="880" alt="On page 9, section 6.3 is not translated yet; a double-click on its first paragraph moves the section to the front, the status bar says so, and its paragraphs appear in Chinese one after another while the rest of the page waits">
</p>

Headings go first, so the outline reads in Chinese right away; then the title, the abstract and the introduction; then the rest from start to end. Want section 6.3 now? Double-click it. Its paragraphs go to the front of the queue, and the status bar tells you how many.

## Highlights on both sides

<p align="center">
  <img src="docs/images/highlights.gif" width="880" alt="Two sentences of the abstract are selected on the original and highlighted yellow; the same sentences turn yellow in the translation. Then part of the last Chinese sentence is highlighted green, and the matching English sentence turns green on the left">
</p>

Highlight, underline or add a note on either side, and it shows on the other side at the matching sentence. Not happy with a translation? Correct it by hand. Undo and redo work for all of it.

## And also

- **A Chinese copy next to the paper.** When the whole paper is translated, `<name>_zh.pdf` in the original layout is saved beside it, with real, selectable text, and kept up to date when you change the translation. Can be turned off.
- **Checked translations.** Sentence numbers, formulas and numbers are checked in every reply, failed sentences are retried, and a glossary built for each paper keeps terms consistent.
- **Your call, block by block.** If a figure label got translated or a paragraph was skipped, right-click it and choose to translate it or leave it in English.
- **Reading tools.** Search both sides at once, a bilingual outline, hover to see the matching paragraph on the other side, original only / translation only / both, and your reading position is remembered.
- **Exports.** The original PDF with your marks as standard PDF annotations (other PDF readers show them), the Chinese PDF, and your notes as Markdown.
- **A Mac app.** System glass materials, light and dark appearance, night reading, and short animations that switch off with Reduce Motion. The interface is in Simplified Chinese.

<p align="center">
  <img src="docs/images/screenshot-dark.png" width="880" alt="PaperDuet in dark appearance: page 3 with the Transformer diagram on both sides, a yellow and a green highlight on the original and on the translation, and the bilingual outline in the sidebar">
</p>

## Install

**Requirements:** a Mac with Apple silicon (M1 or later), macOS 13.3 or later, and about 2.1 GB of disk space for the translation model.

### Download

1. Download `PaperDuet_<version>_aarch64.dmg` from [Releases](https://github.com/KalenHwei/PaperDuet/releases).
2. Open it and drag **PaperDuet** into **Applications**. Open it from there: macOS does not let the translation engine inside the app run from the disk image or the Downloads folder.
3. The app is not notarized by Apple, so the first time macOS says it cannot check it. Open **System Settings › Privacy & Security**, scroll down to the message about PaperDuet, click **Open Anyway** and confirm. This is needed once.
   Alternatively, in Terminal: `xattr -dr com.apple.quarantine /Applications/PaperDuet.app`
4. On first use PaperDuet looks for the translation model on your Mac and, if it is not there, downloads it (2.1 GB). Translation starts by itself as soon as the model is there. See [Translation model](#translation-model).

There is nothing else to set up: no Python, no virtual environment, no other app. The translation engine and its Metal acceleration are inside PaperDuet.

## Translation model

PaperDuet uses one model, made for translation and small enough to run comfortably on a laptop:

| Model                                                                                           | File                           | Size    | License    |
| ----------------------------------------------------------------------------------------------- | ------------------------------ | ------- | ---------- |
| [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B) (bilibili Index team) | `Index-Translate-2B.Q8_0.gguf` | 2.08 GB | Apache-2.0 |

The app runs the model itself with the bundled llama.cpp server; no other program needs to be installed or running. If a copy of the file is already on your Mac, it is checked (SHA-256) and used in place instead of being downloaded again:

- **LM Studio:** `~/.lmstudio/models/IndexTeam/Index-Translate-2B-GGUF/` or `~/.cache/lm-studio/models/IndexTeam/Index-Translate-2B-GGUF/`
- **llama.cpp (`-hf`):** `~/Library/Caches/llama.cpp/`
- **Hugging Face tools:** `~/.cache/huggingface/hub/models--IndexTeam--Index-Translate-2B-GGUF/`

Otherwise it is downloaded from Hugging Face, or from ModelScope when Hugging Face cannot be reached. The download can be paused and resumed.

### Speed and memory

Measured on a MacBook Pro with M5 Pro on the 15-page _Attention Is All You Need_ (106 paragraphs):

| Paragraphs at a time (Settings › Model) | Whole paper | Memory while translating |
| --------------------------------------- | ----------- | ------------------------ |
| 1 (default)                             | 118 s       | about 2.8 GB             |
| 2, then 3 from halfway                  | 67 s        | about 3.0 to 3.2 GB      |

Headings, title, abstract and introduction come first, and any other part can be moved to the front by double-clicking it. Memory includes the 2.1 GB model file; Activity Monitor counts that part as file cache, so it shows a smaller number. The engine stops after ten idle minutes and gives the memory back.

## Privacy

- Papers, translations, annotations and settings stay on your Mac, in `~/Library/Application Support/io.github.paperduet.app/`. The only file PaperDuet writes elsewhere is the Chinese PDF next to a translated paper (`<name>_zh.pdf`), which you can turn off.
- The translation engine listens only on your own Mac (127.0.0.1), on a random port, and accepts requests only with a key made at each launch.
- PaperDuet goes on the network only to download the model (huggingface.co, or modelscope.cn), and to open links you click.
- No usage statistics, no crash reports, no account.

## Keyboard shortcuts

| Action                           | Shortcut                                     |
| -------------------------------- | -------------------------------------------- |
| Open a PDF                       | ⌘O                                           |
| Close the paper                  | ⌘W                                           |
| Search both sides                | ⌘F                                           |
| Next / previous match            | ⌘G / ⇧⌘G                                     |
| Zoom in / out / fit width        | ⌘+ / ⌘− / ⌘0                                 |
| Zoom around the pointer          | ⌘ + scroll, or pinch on the trackpad         |
| Move the pages                   | ⌘ + drag                                     |
| Translate this part next         | Double-click text that is not translated yet |
| Highlight the selection          | H                                            |
| Add a note to the selection      | N                                            |
| Highlight colour                 | 1 to 5                                       |
| Undo / redo                      | ⌘Z / ⇧⌘Z                                     |
| Show or hide the sidebar         | ⌘\                                           |
| Synchronized scrolling on or off | ⌘L                                           |
| All shortcuts                    | ⌘/                                           |

H, N and 1 to 5 work while text is selected and no text field is being typed in.

## Questions

**Can I use another model?**
Not in this version. The prompts, the checks and the glossary handling are tuned for Index-Translate-2B.

**Why does a paper take a couple of minutes?**
Every sentence is generated on your Mac. The outline, title, abstract and introduction go first, so you can start reading at once; double-click any other part to have it next. The rest follows in the background and is kept. Settings › Model › "同时翻译几段" (paragraphs at once) set to 2 or 3 roughly halves the time at the cost of a few hundred MB of memory.

**Scanned PDFs?**
Not supported: they have no text layer. PaperDuet opens them for reading and annotating the original only.

**A figure label got translated, or a paragraph was left in English.**
Right-click the block and choose 翻译此块 (translate this block) or 不翻译此块 (leave this block in English). The choice is kept with the paper. Footnotes, captions and table notes can also be switched off as a group in Settings › 翻译.

**macOS says the translation engine cannot run.**
Move PaperDuet into Applications and open it from there (see [Install](#download)).

**How do I remove everything?**
Delete PaperDuet from Applications, then `~/Library/Application Support/io.github.paperduet.app/` (translations, annotations, settings, and the model if PaperDuet downloaded it) and `~/Library/Logs/io.github.paperduet.app/`. The `_zh.pdf` files saved next to your papers stay where they are.

**Can I use it at work?**
Free for personal study and research, and at universities, research institutes, schools and other non-profit organizations. Use at or for a company needs a commercial license: write to [junystugh@gmail.com](mailto:junystugh@gmail.com). See [License](#license).

## Roadmap

- **Re-typeset from arXiv source.** For papers on arXiv, translate the LaTeX source and compile it with Chinese fonts, so the translation gets a proper typeset layout instead of text fitted into the original boxes. Pages would then differ, and the two sides would be matched paragraph by paragraph.
- An English interface.

## License

PaperDuet is free for noncommercial use under the [PolyForm Noncommercial License 1.0.0](LICENSE). In short:

- You may use it and share it for any noncommercial purpose: personal use, study, research, hobby projects, and use by schools, universities, research institutes, charities and public bodies.
- When you share it, pass on the license terms together with the line `Required Notice: Copyright (c) 2026 Kalen Yongda Wei`.
- Commercial use is not permitted. For a commercial license, write to [junystugh@gmail.com](mailto:junystugh@gmail.com).

This summary is not the license; the [license text](LICENSE) is. The software PaperDuet is built on and the translation model keep their own licenses.

Copyright © 2026 Kalen Yongda Wei.

## Acknowledgments

PaperDuet is built on [Tauri](https://tauri.app), [pdf.js](https://mozilla.github.io/pdf.js/), [pdf-lib](https://pdf-lib.js.org), [llama.cpp](https://github.com/ggml-org/llama.cpp), [React](https://react.dev), [Zustand](https://github.com/pmndrs/zustand) and [Lucide](https://lucide.dev), and translates with [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B) by the bilibili Index team. Their full license texts ship inside the app (Settings › 关于 › 第三方许可证).

The paper in the animations is Vaswani et al., [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762), shown for demonstration.
