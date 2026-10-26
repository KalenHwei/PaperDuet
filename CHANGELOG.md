# Changelog

All notable changes to PaperDuet are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.5.6] - 2026-10-25

### Added

- Italian: papers can be translated into Italian, and the interface is
  available in Italian (chosen by default on a Mac or PC set to Italian).
- Error reports: when something goes wrong, PaperDuet sends the developer what
  went wrong (the kind of error, its message and where in the code it
  happened) with the version, the system, the interface language and the
  model. File paths, file names, web and e-mail addresses and quoted text are
  taken out first, and nothing of a paper is sent. On by default; Settings ›
  Data turns it off.

## [0.5.5] - 2026-10-25

### Fixed

- Journal papers set loosely, where justification stretches the spaces of a
  line well beyond a word space, no longer have such lines broken into stray
  words. Those words used to be translated one by one and drawn on top of the
  paragraph, the paragraph's translation lacked them, and reference links
  landed in the wrong place.
- The abstract is translated right after the title, ahead of the
  introduction, also when its heading is set as spaced-out small capitals
  ("a b s t r a c t"). It used to wait until the whole introduction was done
  and stayed blank in the meantime.
- When the background reader cannot read a paper on a computer, the paper is
  read the way the reader displays it and analysed there, instead of showing
  "Layout analysis failed".
- Dashes in Elsevier papers no longer reach the translation as the letter "e".
- A small translation model that repeats the prompt's example before its
  answer no longer has to be asked again.
- In the library, a paper whose detected title begins with punctuation no
  longer shows it.

### Changed

- The note popover no longer has the line about positions being approximate
  to the sentence.

## [0.5.4] - 2026-10-24

### Changed

- Explanatory hints are gone from the interface: the line under AI Organize,
  the tooltips of the library and its search, the hints under import and
  export menu items and the right-click block menu, the empty-panel hints and
  most of the notes under settings. Settings notes that matter for a choice
  (model memory, temperature, context, clearing translations, the license)
  stay.
- The AI search field reads "Search with AI".

## [0.5.3] - 2026-10-24

### Added

- PaperDuet asks once, after a paper is open and the model is ready, whether
  you would like to share anonymous usage and diagnostic data to help improve
  it. Only after you agree, at most one record a day is sent: the version, the
  system, the interface language, the model, the kinds of errors and how often
  they happened, and a random install ID that tells computers apart. Never
  paper content, file names or personal information. "See exactly what" in the
  card lists the values from your computer, and Settings › Data turns sharing
  on or off.

## [0.5.2] - 2026-10-24

### Added

- AI Search at the top of the library, above AI Organize. It finds papers
  read before by their title, original text, translations, summaries and
  tags. With a translation model ready, the query is also put into the other
  language (a query in English into the translation language, any other into
  English), so a Chinese query finds the English original and the reverse.
  Under each paper found, a line shows where it was found, with the words
  marked. Enter opens the first paper, Escape clears the search.

### Changed

- Searching and choosing tags in AI Organize reorder the library instead of
  hiding papers: the papers found move to the top, the others move below and
  turn grey, with a short animation.

## [0.5.1] - 2026-10-24

### Added

- Library. The folder panel is now a list of every paper read or imported,
  most recent first. A paper opens to its translations (language and
  progress), and a translation opens the paper in that language, both sides.
  A paper is called by its title; the pencil renames it in place and the
  light bulb shows its summary. Right-click shows the file in Finder (File
  Explorer on Windows) or removes the paper from the list.
- Import button next to the panel buttons: several PDFs at once, or a folder
  with its sub-folders. PDFs or folders dropped on the window are imported
  too. Imported papers are analysed in the background and translated once
  they are opened; the same file twice is one paper.
- AI Organize at the top of the library. Each paper gets a field and, for AI
  papers, a subfield from fixed lists, plus a few topics (the paper's own
  keywords, its arXiv category when it has one, and the translation model's
  reading). Choosing tags shows only the papers that have all of them.

### Changed

- Summaries, in the toolbar and in the library, are written in the interface
  language.
- The toolbar shows the paper's name instead of the file name.

### Fixed

- Tables set in fonts with tall line metrics (Charis SIL and the like) no
  longer run their rows together, and their cells keep the original. Tables
  labelled "Table 3" on a line of its own are recognised.
- A raised character such as the 2 of R² no longer lands in the line above,
  which made the paragraph fail to translate.
- On two-column pages whose left column is mostly a table, the right column
  stays in whole paragraphs.
- A sentence the model cannot translate faithfully stays in English inside
  its translated paragraph, instead of the whole paragraph staying in English.
- A section number such as "4.2." at the start of a translated heading keeps
  its dot.

## [0.5.0] - 2026-10-24

### Added

- Paper summary. Once the whole paper is translated, a light bulb appears next
  to the progress ring. It opens a short summary written by the translation
  model in the language of the translation: the field and subfield, the
  question, the method and experiments, what the results show and the
  conclusion. The summary is kept with the paper, and Regenerate asks the
  model again.
- A folder button in the folder panel, next to Refresh, opens the folder in
  Finder (File Explorer on Windows).
- Windows version (Windows 10 and 11, 64-bit), with an installer. A dedicated
  graphics card (NVIDIA or AMD) is used through Vulkan; without one,
  PaperDuet asks before translating on the CPU.

## [0.4.1] - 2026-10-23

### Changed

- Shorter, clearer descriptions in the model list and in Settings, in every
  interface language.

## [0.4.0] - 2026-10-23

### Added

- The interface comes in English, Simplified Chinese, Traditional Chinese,
  Japanese, Korean, French, German, Spanish and Russian. It follows the macOS
  language (English when macOS uses a language PaperDuet doesn't have), and
  Settings › Appearance › Interface Language picks another one.

## [0.3.2] - 2026-10-23

### Fixed

- Japanese, Korean and Chinese translations that write a large number in 万
  ("10万" for 100,000, "4萬" for 40K) no longer fail the number check.
- When the retries only leave a cross-reference ("section 5.4") or a citation
  out of a sentence, the translation is kept instead of leaving the whole
  paragraph in English. A missing figure such as "3.5 days" still counts as
  a failure.

## [0.3.1] - 2026-10-23

### Changed

- The progress ring shows the number without a percent sign. When the paper
  is done, the ring turns green and closes into a check, which then draws
  itself; the check is the size of the other toolbar icons and lines up with
  them.

## [0.3.0] - 2026-10-23

### Added

- Eight languages to translate into, chosen from a menu in the toolbar:
  简体中文, 繁體中文, 日本語, 한국어, Français, Deutsch, Español and Русский.
  Each language keeps its own translations, edits and glossary, so switching
  back and forth never translates a paper twice. Prompts, checks, sentence
  splitting, typography and fonts (on screen and in the exported PDF) follow
  the language; the translated PDF is named `<name>_<language>.pdf`
  (`_zh.pdf` for Simplified Chinese as before). Traditional Chinese is
  translated as Simplified Chinese and converted with OpenCC.

### Changed

- The translated PDF is no longer saved by itself. When the whole paper is
  translated, the progress ring turns into a green check and a bubble offers to
  save the PDF next to the paper; it is written only when you click. A file of
  that name that PaperDuet did not write is kept, and the PDF gets the next
  free name. The setting for automatic saving is gone.
- Opening the model card from the toolbar switches models without running the
  trial translation again; the trial is part of the first setup only.

## [0.2.1] - 2026-10-23

### Added

- A choice of five translation models when you set up PaperDuet, and later
  under Settings › 模型 › 更换模型: Index-Translate-2B (recommended, the one
  used so far), Hy-MT2-1.8B, Hy-MT2-7B, LMT-60-4B and TranslateGemma-4B
  (experimental, not yet tested with PaperDuet). A model you already have in
  LM Studio, llama.cpp or the Hugging Face cache is used where it is.
  Models other than Index translate a paragraph at a time and do not use the
  glossary. Switching models does not retranslate papers already translated.
- A launch screen with the icon, the name and "Mirror your translations".

## [0.2.0] - 2026-10-23

### Added

- Update check: shortly after launch and every six hours, PaperDuet looks at
  the latest release on GitHub. When there is a newer version, a card shows
  what is new; one click downloads it, installs it and offers to restart.
  Update packages are signed and checked before they are installed. Settings ›
  关于 has a button to check by hand and a switch to turn automatic checks off.
  The check reads version information only; nothing about your papers is sent.

### Changed

- Settings › 关于 describes the license as it applies to the app (free for
  noncommercial use).

## [0.1.0] - 2026-10-22

First release, for Apple silicon Macs with macOS 13.3 or later.

### Added

- Side-by-side reading: the original PDF on the left, a Chinese translation
  drawn over the same layout on the right, with synchronized scrolling and
  zoom (buttons, ⌘ + wheel, trackpad pinch) and ⌘ + drag to move pages.
- Local translation with Index-Translate-2B, run by a bundled llama.cpp
  server. The 2.1 GB model is downloaded on first use (Hugging Face, with
  ModelScope as fallback; pause, resume, SHA-256 check), or an existing copy
  from LM Studio, llama.cpp or the Hugging Face cache is used in place.
- Layout analysis for academic papers: titles, headings, paragraphs across
  columns and pages, captions, footnotes, formulas kept as they are, tables and
  figures left untouched, page furniture skipped. Right-click any block to
  translate it or leave it in English.
- Translation checks and retries (sentence ids, formula placeholders, numbers,
  untranslated sentences), a per-paper glossary, and a translation cache.
- Highlights, underlines and notes that appear on both sides at the matching
  sentences, with undo and redo; editing a translation by hand.
- Search on both sides at once (⌘F), a bilingual outline, hover
  correspondence between the two sides, three view modes, remembered reading
  position and a list of recent papers.
- Exports: the original PDF with your marks as standard PDF annotations
  (so other PDF readers show them), a Chinese PDF with the same layout, and
  notes as Markdown.
- Settings: model (paragraphs translated at once, temperature, context
  length), what to translate, appearance (light, dark, night reading, Chinese
  typeface), and data.
- Light and dark appearance with the system's glass materials, short fades
  that respect Reduce Motion, and messages that say what happened and what to
  do next.
- Opening PDFs from Finder ("Open With", or dropping on the Dock icon).
- Translation order: headings first (the outline reads in Chinese early), then
  the title, abstract and introduction, then the rest from start to end.
  Double-click text that is not translated yet to have its part translated
  next.
- A progress ring in the toolbar with the percentage translated; pointing at
  it shows a stop button, a click pauses, and a click on the play button goes
  on.
- When the whole paper is translated, a Chinese PDF in the original layout is
  saved next to it as `<name>_zh.pdf` and kept up to date when the
  translation changes. A file of that name that PaperDuet did not write is
  never replaced. Can be turned off in Settings.
- Settings › 关于: version, author and copyright, and the full license texts
  of the software inside the app (collected at build time into
  `THIRD_PARTY_NOTICES.txt`).

[Unreleased]: https://github.com/KalenHwei/PaperDuet/compare/v0.5.4...HEAD
[0.5.4]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.5.4
[0.5.3]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.5.3
[0.5.2]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.5.2
[0.5.1]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.5.1
[0.5.0]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.5.0
[0.4.1]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.4.1
[0.4.0]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.4.0
[0.3.2]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.3.2
[0.3.1]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.3.1
[0.3.0]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.3.0
[0.2.1]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.2.1
[0.2.0]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.2.0
[0.1.0]: https://github.com/KalenHwei/PaperDuet/releases/tag/v0.1.0
