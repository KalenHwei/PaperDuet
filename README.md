<p align="center">
  <img src="docs/images/icon.png" width="160" alt="PaperDuet icon">
</p>

<h1 align="center">PaperDuet</h1>

<p align="center">
  <em>The Best Lightweight Paper Translator for Researchers!</em>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/github/v/release/KalenHwei/PaperDuet?style=flat-square&color=111111&label=release" alt="Latest release"></a>
  <img src="https://img.shields.io/badge/macOS-13.3%2B%20%C2%B7%20Apple%20silicon-111111?style=flat-square" alt="macOS 13.3 or later on Apple silicon">
  <img src="https://img.shields.io/badge/translation-on%20your%20Mac-111111?style=flat-square" alt="The translation runs on your Mac">
  <img src="https://img.shields.io/badge/models-5_to_choose_from-111111?style=flat-square" alt="Models: 5 to choose from">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-PolyForm%20Noncommercial-111111?style=flat-square" alt="License: PolyForm Noncommercial 1.0.0"></a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" width="880" alt="PaperDuet translating Attention Is All You Need from scratch: the outline in the sidebar turns Chinese first, then the title and the abstract appear on the right page, in the same place as on the original">
</p>

<p align="center">
  <strong>An English paper on the left, its Chinese translation on the right, page for page.</strong><br>
  The translation runs on your Mac and takes about 2 minutes for a 15-page paper.<br>
  The outline is in Chinese within seconds and the abstract within half a minute.<br>
  <sub>Attention Is All You Need (15 pages) translated from scratch on a MacBook Pro with M5 Pro, default settings. The animation runs at 1.3x speed. <a href="#speed-and-memory">Details</a>.</sub>
</p>

<p align="center">
  <a href="https://github.com/KalenHwei/PaperDuet/releases/latest"><img src="https://img.shields.io/badge/Download%20for%20Mac-Apple%20silicon-111111?style=for-the-badge&logo=apple&logoColor=white" alt="Download for Mac (Apple silicon)" height="36"></a>
</p>

<p align="center">
  <sub><b>English</b> &middot; <a href="README.zh-CN.md">简体中文</a></sub>
</p>

Reading a paper in a second language usually means switching between a translator and the PDF, then finding your place and the figure again. PaperDuet shows the original and a Chinese translation side by side, page for page. A small model on your Mac does the translation, so you don't need an account or an API key, and the paper stays on your computer.

## Same layout on both sides

<p align="center">
  <img src="docs/images/layout.gif" width="880" alt="Scrolling through pages 3 to 5: the Transformer diagram, the attention diagrams and the formulas sit in the same place on both sides, with the English text replaced by Chinese on the right">
</p>

The right side is the original page with the English replaced by Chinese in the same places. Formulas, figures and tables are left as they are. Both sides scroll and zoom together, so Figure 2 sits next to Figure 2 and equation (1) next to equation (1). PaperDuet recognises columns, headings, captions, footnotes and references, and it joins paragraphs that continue in the next column or on the next page.

## A progress ring you can pause

<p align="center">
  <img src="docs/images/progress-ring.gif" width="880" alt="The camera moves in on the progress ring in the toolbar while a paper is being translated: pointing at it shows a red stop button, a click pauses and shows a blue play button, another click goes on">
</p>

The ring in the toolbar shows how much of the paper is translated. When you point at it, it turns into a stop button. Click once to pause and again to go on. Paragraphs are saved as soon as they are translated, so when you open the paper again the translation is already there.

## Double-click to read ahead

<p align="center">
  <img src="docs/images/double-click.gif" width="880" alt="On page 9, section 6.3 is not translated yet; a double-click on its first paragraph moves the section to the front, the status bar says so, and its paragraphs appear in Chinese one after another while the rest of the page waits">
</p>

PaperDuet translates the headings first, so the outline is in Chinese right away. The title, abstract and introduction come next, and then the rest of the paper from start to end. To read a later part first, double-click it. In the animation, a double-click on section 6.3 moves its paragraphs to the front of the queue, and the status bar shows how many were moved.

## Highlights on both sides

<p align="center">
  <img src="docs/images/highlights.gif" width="880" alt="Two sentences of the abstract are selected on the original and highlighted yellow; the same sentences turn yellow in the translation. Then part of the last Chinese sentence is highlighted green, and the matching English sentence turns green on the left">
</p>

A highlight, underline or note made on one side appears on the other side at the matching sentence. You can also correct a translation by hand, and undo and redo work for all of these changes.

## Other features

- When the whole paper is translated, a Chinese PDF in the original layout is saved next to it as `<name>_zh.pdf`. Its text can be selected and copied, and the file is updated when you change the translation. You can turn this off.
- Every reply from the model is checked for sentence numbers, formulas and numbers. Sentences that fail are retried, and with Index-Translate-2B a glossary built for each paper keeps terms consistent.
- If a figure label was translated or a paragraph was skipped, right-click the block to translate it or to leave it in English.
- You can search both sides at once, follow a bilingual outline, hover over a paragraph to see its match on the other side, and choose to show the original, the translation or both. PaperDuet remembers where you stopped reading.
- Exports: the original PDF with your marks as standard PDF annotations that other PDF readers show, the Chinese PDF, and your notes as Markdown.
- PaperDuet checks GitHub for new versions. When one is out, a card shows what changed, and one click downloads and installs it; the new version starts after a restart. Update packages are signed, and PaperDuet installs only packages whose signature checks out.
- The app uses the system's glass materials and has light and dark appearance and a night reading mode. Its animations are short and switch off with Reduce Motion. The interface is in Simplified Chinese.

<p align="center">
  <img src="docs/images/screenshot-dark.png" width="880" alt="PaperDuet in dark appearance: page 3 with the Transformer diagram on both sides, a yellow and a green highlight on the original and on the translation, and the bilingual outline in the sidebar">
</p>

## Install

You need a Mac with Apple silicon (M1 or later), macOS 13.3 or later, and 2 to 8 GB of disk space for the translation model, depending on which one you choose (2.1 GB for the recommended one).

### Download

1. Download `PaperDuet_<version>_aarch64.dmg` from [Releases](https://github.com/KalenHwei/PaperDuet/releases).
2. Open it and drag PaperDuet into Applications, then open it from there. macOS does not let the translation engine inside the app run from the disk image or the Downloads folder.
3. The app is not notarized by Apple, so the first time you open it macOS says it cannot check it. Open System Settings › Privacy & Security, scroll down to the message about PaperDuet, click "Open Anyway" and confirm. You only need to do this once.
   You can also run this in Terminal instead: `xattr -dr com.apple.quarantine /Applications/PaperDuet.app`
4. On first use, PaperDuet asks which translation model to use (Index-Translate-2B is recommended), looks for it on your Mac and downloads it if it is not there. Translation starts as soon as the model is in place. See [Translation model](#translation-model).

Nothing else needs to be installed. The translation engine and its Metal acceleration are part of the app. Later versions install from inside the app, so you only download the disk image once.

## Translation model

When you first open PaperDuet you pick one of five models. All of them were made for translation and run on your Mac. You can switch later in Settings › 模型 › 更换模型.

| Model | From | Size | Memory | License |
| --- | --- | --- | --- | --- |
| [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B) (recommended) | bilibili Index team | 2.08 GB | about 3 GB | Apache-2.0 |
| [Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B-GGUF) | Tencent Hunyuan | 1.91 GB | about 2.5 GB | Apache-2.0 |
| [LMT-60-4B](https://huggingface.co/NiuTrans/LMT-60-4B) | NiuTrans | 4.69 GB | about 5.5 GB | Apache-2.0 |
| [Hy-MT2-7B](https://huggingface.co/tencent/Hy-MT2-7B-GGUF) | Tencent Hunyuan | 7.98 GB | about 9 GB (a Mac with 16 GB or more) | Apache-2.0 |
| [TranslateGemma-4B](https://huggingface.co/mradermacher/translategemma-4b-it-GGUF) (experimental) | Google | 4.13 GB | about 5 GB | [Gemma Terms of Use](https://ai.google.dev/gemma/terms) |

Index-Translate-2B is the recommended one because PaperDuet's prompt, checks and glossary were tuned for it. The other models get the prompt their publishers recommend, one paragraph at a time, and don't use the glossary. TranslateGemma has not been tested with PaperDuet yet. Switching models does not retranslate papers you have already translated.

On the first four pages of _Attention Is All You Need_ (36 paragraphs, MacBook Pro with M5 Pro, engine start included), the four tested models all kept the layout, formulas and citations in place:

| Model | Time | What we saw |
| --- | --- | --- |
| Index-Translate-2B | 68 s | Most consistent terms |
| Hy-MT2-1.8B | 43 to 53 s | Fastest; now and then a loose phrase |
| LMT-60-4B | 107 s | Literal; left an English phrase in the abstract |
| Hy-MT2-7B | 216 s | Most fluent; slowest |

The app runs the model with its own copy of the llama.cpp server, so no other program has to be installed or running. If the model file is already on your Mac, PaperDuet checks it (SHA-256) and uses it where it is instead of downloading it again. It looks in these places:

- LM Studio: `~/.lmstudio/models/` and `~/.cache/lm-studio/models/`
- llama.cpp (`-hf`): `~/Library/Caches/llama.cpp/`
- Hugging Face tools: `~/.cache/huggingface/hub/`

Otherwise the model is downloaded from Hugging Face. Index-Translate-2B also comes from ModelScope when Hugging Face cannot be reached. You can pause and resume the download.

### Speed and memory

For Index-Translate-2B, measured on a MacBook Pro with M5 Pro on the 15-page _Attention Is All You Need_ (106 paragraphs):

| Paragraphs at a time (Settings › Model) | Whole paper | Memory while translating |
| --------------------------------------- | ----------- | ------------------------ |
| 1 (default)                             | 118 s       | about 2.8 GB             |
| 2, then 3 from halfway                  | 67 s        | about 3.0 to 3.2 GB      |

The memory figures include the 2.1 GB model file. Activity Monitor counts that part as file cache, so it shows a smaller number. The engine stops after ten idle minutes and gives the memory back.

## Privacy

- Papers, translations, annotations and settings stay on your Mac, in `~/Library/Application Support/io.github.paperduet.app/`. The only file PaperDuet writes anywhere else is the Chinese PDF next to a translated paper (`<name>_zh.pdf`), and you can turn that off.
- The translation engine listens only on your own Mac (127.0.0.1), on a random port, and accepts requests only with a key created at each launch.
- PaperDuet goes online only to download the model (from huggingface.co or modelscope.cn), to check GitHub for a new version of the app, and to open links you click. The update check reads version information only, and you can turn it off in Settings › 关于.
- It collects no usage statistics or crash reports, and there is no account.

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

H, N and 1 to 5 work while text is selected and you are not typing in a text field.

## Questions

### Can I use another model?

Yes, one of the five in [Translation model](#translation-model). Choose it when you set up PaperDuet, or later in Settings › 模型 › 更换模型. Other GGUF files can't be added yet.

### Why does a paper take a couple of minutes?

Every sentence is generated on your Mac. Because the outline, title, abstract and introduction come first, you can start reading right away, and you can double-click any other part to have it translated next. To roughly halve the time, set Settings › Model › "同时翻译几段" (paragraphs at once) to 2 or 3. This uses a few hundred MB more memory.

### Does it work with scanned PDFs?

No. A scanned PDF has no text layer, so PaperDuet can only show the original for reading and annotating.

### A figure label was translated, or a paragraph was left in English

Right-click the block and choose 翻译此块 (translate this block) or 不翻译此块 (leave this block in English). The choice is saved with the paper. Footnotes, captions and table notes can also be switched off as a group in Settings › 翻译.

### macOS says the translation engine cannot run

Move PaperDuet into Applications and open it from there (see [Download](#download)).

### How do I remove everything?

Delete PaperDuet from Applications, then delete `~/Library/Application Support/io.github.paperduet.app/` (translations, annotations, settings, and the model if PaperDuet downloaded it) and `~/Library/Logs/io.github.paperduet.app/`. The `_zh.pdf` files saved next to your papers stay where they are.

### Can I use it at work?

Personal study and research are free, and so is use at universities, research institutes, schools and other non-profit organizations. Using it at or for a company needs a commercial license; write to [junystugh@gmail.com](mailto:junystugh@gmail.com). See [License](#license).

## Roadmap

- Re-typesetting from arXiv source: for papers on arXiv, translate the LaTeX source and compile it with Chinese fonts, so the translation gets a real typeset layout instead of text fitted into the original boxes. The pages of the two sides would then differ, and they would be matched paragraph by paragraph.
- An English interface.

## License

PaperDuet is free for noncommercial use under the [PolyForm Noncommercial License 1.0.0](LICENSE). In short:

- You may use and share it for any noncommercial purpose, such as personal use, study, research and hobby projects, and it may be used by schools, universities, research institutes, charities and public bodies.
- When you share it, pass on the license terms together with the line `Required Notice: Copyright (c) 2026 Kalen Yongda Wei`.
- Commercial use is not permitted. For a commercial license, write to [junystugh@gmail.com](mailto:junystugh@gmail.com).

The [license text](LICENSE) is what counts; this is only a summary. The software PaperDuet is built on and the translation model keep their own licenses.

Copyright © 2026 Kalen Yongda Wei.

## Acknowledgments

PaperDuet is built on [Tauri](https://tauri.app), [pdf.js](https://mozilla.github.io/pdf.js/), [pdf-lib](https://pdf-lib.js.org), [llama.cpp](https://github.com/ggml-org/llama.cpp), [React](https://react.dev), [Zustand](https://github.com/pmndrs/zustand) and [Lucide](https://lucide.dev), and it translates with [Index-Translate-2B](https://huggingface.co/IndexTeam/Index-Translate-2B) by the bilibili Index team, or with Hy-MT2 (Tencent Hunyuan), LMT (NiuTrans) or TranslateGemma (Google) if you choose one of them. Their full license texts are included in the app (Settings › 关于 › 第三方许可证).

The paper in the animations is [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762) by Vaswani et al., shown as an example.
