# Changelog

All notable changes to PaperDuet are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.8.6] - 2026-11-13

### Fixed

- Known issues.

## [0.8.5] - 2026-11-13

### Added

- The Knowledge Space as galaxies: each field a galaxy, its papers planets going round its star, subfields smaller stars with planets of their own; the more papers, the larger and brighter the star, a black hole with a great many. Stars can be dragged and take their planets along.
- Your own categories: a right-click on a category on the shelf or in the Knowledge Space adds one under it (two levels down at most), and on “All” on the shelf a field; papers are filed by dragging them onto a category or from “Move to” in their right-click menu.
- “Subdivide Automatically” in a category's right-click menu: its papers are grouped by content into named subcategories, which can be renamed, or undone from the same menu (needs AI search).

### Changed

- A cleaner Knowledge Space: topic stars' names and the links between papers show only under the pointer.
- Page layout: papers whose abstract is wider than a column, with the other column set around it, are read correctly.

### Fixed

- Garbled or missing translations for PDFs whose fonts give only glyph numbers.

## [0.8.4] - 2026-11-12

### Added

- Tabs: several papers open at once; hovering over a tab previews it, dragging reorders the tabs, and a right-click opens the paper's menu with ways to close tabs.
- Sleeping tabs: beyond the number set in Settings › Appearance (6 by default), tabs sleep to save memory and come back when clicked.
- Selecting papers: click to select, ⌘/Ctrl-click for several, double-click to open; a right-click tags, moves, exports citations for or removes them together.
- Exporting citations in BibTeX, EndNote, RefMan and RefWorks, copied or saved to a file; in the Knowledge Map, for a whole field, subfield or topic star from its right-click menu.
- AI Search and a switch for the topics' stars in the Knowledge Map.
- “Retranslate” in a paper's right-click menu: the whole paper is translated again from the start with the selected model.
- Translation of PDFs whose text is drawn as shapes (such as some CVPR papers): on Mac and Windows the system's own text recognition reads the text.
- A hint the first two times the highlighter is turned on: hold Shift to pick a colour.

### Changed

- Faster switching between papers, with a fade, and less memory used.
- The “whole paper translated” save prompt comes up by itself only the first time; after that it opens from the green check.

### Fixed

- Translations not shown after zooming with synced scrolling on older macOS.
- TranslateGemma's prompt appearing in translations.
- On Mac, translation not starting after the first paper was opened, and failing after the system closed the database connection.

## [0.8.2] - 2026-11-11

### Added

- A bar at the bottom right of the Knowledge Map for adjusting which levels are visible: one step up fades the papers, the next their topics' stars, and at the top only the fields are left.

## [0.8.1] - 2026-11-11

### Fixed

- Known bugs.

## [0.8.0] - 2026-11-11

### Added

- An AI component (EmbeddingGemma, about 330 MB, set up in the background after the update): the library is sorted by what papers are about, AI Search finds papers by meaning and shows the most relevant passage, and similar papers are linked in the Knowledge Space.
- A bell at the bottom right for announcements, polls and each update's notes.
- Alias titles for papers: shown before a paper's name in the lists, and alone on its sphere in the Knowledge Space.
- First use starts with the language (for the interface and the translation) on the title screen; the home page's tour shows a sample library.
- Until the first paper is in, the drop box ripples; a progress bar while papers are imported.

### Changed

- Importing reads only each paper's first pages, so the Shelf and the Knowledge Space sort papers almost at once; reading them in full and the finer sorting happen in the background and pause while a paper is translated.
- The Knowledge Space holds every paper in the library and shows only field and subfield names; a paper's title shows when it is pointed at.
- A dropped folder brings in the PDFs in it and only asks whether to keep it up to date.
- A paper's right-click menu is the same on the home page, in the library, the timeline and the Knowledge Space; a second right-click closes it.
- Shorter tours that dim the rest of the window instead of blurring it.

### Fixed

- Flicker on the home page when its tour began and ended, and in the Knowledge Space card while papers were imported.
- A crash while a tour played.
- A paper closed while it was still opening came back by itself.
- Papers that failed to translate as soon as the translation started: a failure is tried again, and the library's database is opened again when its files are closed unexpectedly.

## [0.7.9] - 2026-11-10

### Added

- Custom glossary terms: the Glossary tab can add a term, and change or remove one; a term marked “Use in All Papers” goes into every paper it occurs in (Settings › Translate lists these and can remove them). Hy-MT2 now gets the terms too.
- Settings › Data › Clear Cache: every paper’s translations and collected terms in one click (your own edits, terms, annotations and notes stay), and the database is compacted.
- Settings › About › Shortcuts: every shortcut, with the library, the knowledge space, ⌘↩ and Escape added.

### Changed

- The library panel shows the shelf right above the papers; the knowledge space button takes the whole row.
- A paper with labels shows the first one put on it in front of its name, the others after it.
- In the list by time each paper is only where it was read last; group heads are capsules.
- Glass a little more opaque; lighter text at night; more motion (the paper menu, new label rows on the shelf, the glossary editor, Settings).

### Fixed

- On a Mac, Control with the wheel zoomed and Control with a drag turned the knowledge space; it is ⌘ on a Mac and Ctrl on Windows and Linux.
- Right-clicking a paper again could close its menu instead of opening it there.
- Single past participles and adverbs (equipped, efficiently) are no longer collected as terms.

## [0.7.8] - 2026-11-10

### Added

- Keeping a folder up to date: a folder dragged in or chosen is offered once; kept, it gets a label of its own (an emoji and the folder’s name to start from), and the PDFs added to it later are imported by themselves at launch and when the window comes to the front. Settings › Data lists these folders and can stop them.
- Settings › Data › Keep PDF File Names: papers are called by their PDF’s file name instead of the title found in it.

### Changed

- Custom (OpenAI-compatible) APIs: an address with only a host gets /v1, and a service on this computer or the local network needs no key (Ollama works with http://localhost:11434); a 404 that is not about the model now says the address is wrong; a model’s <think>…</think> is taken out of its answer.
- A sentence whose only fault, after every try, is a number is kept instead of failed.

### Fixed

- Scanned papers: pages whose scan covered the page were taken for one big figure and left untranslated; the cover over the original now follows the scan’s words, and wide-spaced titles are read as one line.
- Forms and boxed tables: words on either side of a cell border are no longer run together, and the layout model no longer leaves a form made of sentences untranslated.
- Text could go back to English when the layout model’s results came in (for example while resizing the window); translations now stay, and a translation the reader started goes on.
- The layout model failed for the rest of the session after being unloaded when idle.
- Block colours of one paper could be used for another.

## [0.7.7] - 2026-11-09

### Fixed

- Known issues in the interaction logic.

## [0.7.6] - 2026-11-09

### Added

- A tour of the home page (the Shelf, AI Search, By date / By topic, a paper’s right-click menu, the Knowledge Space), shown once the first time the home page has its shelf; someone new sees it after the reading view’s tour. With “Play the Welcome Tour After Every Update” on, it comes after each update too.

## [0.7.5] - 2026-11-09

### Added

- A new home page built around the Shelf: rows for all papers, your main fields (with their AI subfields), unsorted papers and your labels, each with a strip of weekly reading time. Click a row or a week to see just those papers; the Knowledge Space card follows what you pick and point at. Drag a paper onto a label to add it.
- AI Search on the home page: ask in your own words (“a paper I once read about Transformers”). It looks through names, notes, labels, categories, topics, summaries and the full text, and shows where each paper matched.
- Right-click a paper on the home page: labels, Move To (another field or subfield; your choice is kept when papers are re-tagged), Rename, Add Note, Show in Finder.
- The Knowledge Space as a universe: fields are suns, papers are planets, AI subfields are ringed planets; in dark mode the Milky Way (NASA SVS Deep Star Maps 2020) is behind them.
- Saving after a translation puts the translated PDF, the translated Markdown and the annotated original into one folder, “PaperDuet - <paper>”.

### Changed

- By Time shows this week by day, then weeks, months and years; any group, or the whole view, folds up.
- The Markdown export is now the translation (in reading order, with headings, captions and footnotes) and replaces the notes export.
- Outline: uses the PDF’s bookmarks when they are good; numbers in their own column, the translation above the original.
- Home page: the logo before the title, a light/dark switch next to Settings, and a drop area above the Knowledge Space card.

### Fixed

- Paragraphs with lists of numbers (“BMPs 2, 4, 6, 7 & 9”) no longer fail to translate.
- A translated paper no longer shows a translation error for a heading every time it is opened.

## [0.7.4] - 2026-11-08

### Fixed

- A phrase marked in a sentence is now marked on the other side too, not the whole sentence: text kept as it is and glossary terms are found directly, and the model finds the rest (an online service copies it out of the sentence; local models translate the phrase with its sentence and look for it). Until it is found, and when it is not, the other side marks the whole sentence, lighter. Works both ways; earlier annotations are narrowed when the paper is opened.

## [0.7.3] - 2026-11-08

### Added

- Highlighter: the glass brush button in the lower right of each pane (named after a second with its key, ⇧H). While it is on, text dragged over, a sentence double-clicked or a paragraph triple-clicked is highlighted at once; hold Shift to bring up a fan of colors at the pointer and move onto one to pick it. The marker pointer takes the color.
- A sun/moon button right of Settings switches between light and dark; night reading (darker pages) now follows the theme.
- Feedback: a field for the paper's title, and up to three screenshots (pasted, dropped or chosen). The e-mail field says we will reply.
- The tour shows the highlighter and the light/dark button; someone who saw the earlier tour sees only these two.

### Changed

- A double click selects the sentence and a triple click the paragraph, on either side. A selection shows its bar on a right-click; a right-click on a highlight opens its note (a left click does nothing there).

### Fixed

- Translation no longer stops partway through a paper when a request fails: a passing failure (the translation engine restarting, the network) is tried again a little later, and a paragraph the model refuses (too long, for example) is translated sentence by sentence. A plain translation model that answers nothing is asked again, and a heading whose number the model drops keeps its translation.

## [0.7.2] - 2026-11-05

### Added

- Settings › About: Play the Welcome Tour After Every Update (off unless turned on).

### Changed

- Knowledge Space: moved or zoomed past its edges it springs back, the wheel zooms smoothly, and left alone for a few seconds the camera slowly turns. ⌘-drag turns it on a Mac (Ctrl-drag on Windows and Linux). It opens out of its button and closes back into it; a paper opens with a double-click (a click shows its card) as the camera dives in.
- Saving moved to the bubble on the finished progress ring: tick the translated PDF, the annotated original and the notes; several are saved into one folder. The translated PDF saved there keeps your highlights and notes.

## [0.7.1] - 2026-11-05

### Changed

- The tour of the reading view now also shows the translation progress ring and the Knowledge Space (it opens the library for it); everyone sees it once more with this version.

## [0.7.0] - 2026-11-05

### Added

- Knowledge Space, under AI Organize in the library: the papers you have studied as spheres in a 3D space, around their fields and subfields and joined by the topics they share. Ctrl-drag turns it, the wheel or a pinch zooms, double-clicking a field goes into it. A timeline shows the days you studied and what you read each day; study time is counted from this version on.
- Your own labels for papers (an emoji and a name; five ready-made), from the right-click menu or by dragging papers onto a label; ⌘-click and Shift-click pick several papers at once. AI Organize lists your labels first, and typing # in AI Search filters by a label or tag.
- Library order as in the Finder: last studied, date added or name, in sections. PDFs and folders dropped on the library are imported.
- Settings › Translation: Translate papers when opened (turn it off to start each translation from the progress ring), and Save Files (the annotated original, the translated PDF, the notes).

### Changed

- The library list is more compact: one line per name, the date and field below it, and a ring for the translation.
- Toolbar: a Home button takes the place of Import (importing is on the start page, and by dropping files on the library); exports moved to Settings › Translation › Save Files.
- Saving the translated PDF from the finished-translation bubble asks where to save it.
- The page layout model also downloads for users whose translation model was installed before models could be chosen.

## [0.6.12] - 2026-11-05

### Changed

- A page layout model (Docling Heron, Apache-2.0, run on your computer with ONNX Runtime) gives a second opinion on each page: blocks it sees as tables, formulas, pictures, page headers and footers or code are no longer translated, and lines of text taken for a table are. It downloads in the background (about 200 MB) with the translation model, or after the app starts if a model was chosen before; until then the layout is as before.

## [0.6.11] - 2026-11-04

### Fixed

- Some papers were not translated at all (an error in the layout analysis on figures with many shapes).
- Single paragraphs left in English when the translation kept names such as reagents or products.
- Table titles left untranslated in IEEE, Science and NEJM papers.

## [0.6.10] - 2026-11-04

### Fixed

- API connection issues.

## [0.6.9] - 2026-11-03

### Fixed

- Laggy scrolling in the Linux version, especially on high-resolution screens.

## [0.6.8] - 2026-11-03

### Added

- LMT-60-0.6B, a sixth translation model: the smallest (805 MB) and fastest, for modest computers; its terms are less precise than the larger models'.

## [0.6.7] - 2026-11-03

### Added

- A Linux version (64-bit): a .deb package for Ubuntu and Debian, and an AppImage that runs without installation.

## [0.6.6] - 2026-11-03

### Fixed

- Journal papers whose layout was misread: the two columns no longer run together, an abstract on a shaded panel is translated, a table ruled column by column stays a table, and the outline lists only the section headings.

## [0.6.5] - 2026-10-31

### Fixed

- Papers with line numbers (manuscripts, for example): the numbers are no longer read into the text, so they stay out of the translation and no longer break paragraphs apart.

## [0.6.4] - 2026-10-30

### Fixed

- Some known formatting issues.

## [0.6.3] - 2026-10-29

### Fixed

- Known issues in the interface logic.

## [0.6.2] - 2026-10-28

### Added

- Windows: choose the folder the translation models are kept in (on another drive, for example); models already downloaded move there.

## [0.6.1] - 2026-10-28

### Fixed

- Some known formatting issues.

## [0.6.0] - 2026-10-28

### Added

- A short tour of the main controls the first time a paper is opened.
- Beta feedback: the Feedback button in the status bar sends your note (and an email address, if you give one) to the developer.

### Changed

- The status bar keeps the shield and drops the slogan next to it.

## [0.5.17] - 2026-10-28

### Fixed

- Some known formatting issues.

## [0.5.16] - 2026-10-28

### Fixed

- A fill behind a line of text (a manuscript's highlight, even in white) is no
  longer taken for a figure: the lines it covered were left in English.
- Double-spaced text (manuscripts) is read in paragraphs instead of line by
  line; a paragraph set without indent or space before it starts after the
  short last line of the one before, and so does one that opens with a run-in
  heading ("Label Smoothing.").
- Figure legends after the references are translated instead of being taken
  for entries of the list; a manuscript's title, set in the face of its
  figures' labels, is translated.

## [0.5.15] - 2026-10-28

### Fixed

- Elsevier's maths fonts (Advent 3B2) are read as their symbols: Greek letters
  ("g" for η), ≤, ≥, ∀, ∈, ≠, →, ∞, the comma of the italic maths font,
  wide hats (Ŝ, q̂) and big sums, brackets and radicals; a glyph that cannot be
  read is cut out of the page with its formula instead of being dropped.
- A superscript set high over a subscript (Ŝ⁻¹ with T under it) stays with its
  letter instead of joining the line above.
- A line with a big radical and no words of text ("RMSFEj = √…") is kept as a
  display formula.

## [0.5.14] - 2026-10-28

### Fixed

- Some known formatting errors.

## [0.5.13] - 2026-10-28

### Fixed

- Display equations set in text fonts (Oxford journals and others): the
  numerators, denominators and limits of a formula with fractions and sums
  are kept as one formula, not translated piece by piece and set over it,
  covering its summation sign.
- A sum from an extension font ("TeX_Times_Math_Extension") set inline sits
  in its line and no longer splits it in two.
- A line of formulas and a few words, set with wide spaces, stays one line.
- A letter under a radical's bar or a wide accent (√N, w̃) is cut out with
  its formula; a word after a subscript, in the subscript's size, is read as
  text.
- Appendix equation numbers such as "(A.5)" are recognised.
- Chinese: the dots of "1, 2, . . . , n" are no longer turned into full
  stops.

## [0.5.12] - 2026-10-27

### Fixed

- Journal papers: a line of statistics run on from the line above
  ("t(75) = 32.74") is no longer taken for a list item; a numbered heading on
  a line of its own keeps apart from its first subsection; a sentence that
  stops after a comma at the foot of a column goes on in the next.
- χ² and other Greek letters in a symbol font come out right, and one set a
  little larger no longer splits its paragraph; accented names (Zoë, Núñez)
  and minus signs in tables come out right too.
- Chinese: hypothesis numbers ("H1."), figure labels and notes keep their
  punctuation, and no block of the translation starts with a full stop.
- A section number the model adds by itself ("4.2. 2 …") is caught and the
  sentence translated again.
- The exported translated PDF has even letter spacing.

### Thanks

- momo on RedNote, for the suggestions.

## [0.5.11] - 2026-10-27

### Changed

- Pseudo-code under an "Algorithm N" caption is translated step by step and
  each step is set where it was: line numbers, indentation, keywords (for, do,
  end for) and formulas stay as they are, and a comment beside a step is
  translated on its own.
- Table cells stay in the original; only table titles and notes are
  translated. Tables are found more reliably: a caption with a table on each
  side takes the one on the side the paper's other captions have theirs, rows
  over a table's first rule, tables with upright rules and grids of rules
  without a caption nearby.

### Fixed

- A sum set inline in a sentence (STIX fonts, Elsevier) no longer goes missing
  from the translation, and no stray piece of it is left above the line.
- The text of a table caption under a label of its own ("Table B.6") is
  translated with it.

## [0.5.10] - 2026-10-27

### Added

- Translation through an online API, for computers too slow for the local
  models: choose Use an API in the model choice and connect OpenAI, Claude,
  DeepSeek, Qwen, Kimi, GLM, Doubao or any OpenAI-compatible service with your
  own API key. The local models fold away while it is chosen, and translation,
  summaries, AI Organize and AI Search all go through that service. The key is
  kept only on this computer.

## [0.5.9] - 2026-10-26

### Fixed

- Fixed existing problems.

## [0.5.8] - 2026-10-26

### Added

- Polish as a translation language and as an interface language.

### Fixed

- On macOS 26 and earlier, the text of papers could not be read, so nothing
  was translated and the text could not be selected or searched.
- On macOS 27, saving the translated PDF failed for papers with sans-serif
  text. PingFang cannot be embedded there; Hiragino Sans GB (Heiti for
  Traditional Chinese) is used instead.

## [0.5.7] - 2026-10-26

### Fixed

Tested paper by paper on highly cited articles from 20 journals across the
sciences, medicine and the social sciences (Nature, Science, Cell, The Lancet,
NEJM, PNAS, JACS, QJE, APSR, Management Science and others):

- Science papers are translated in full. Their thin column rules were taken
  for figures, and most of the text inside them was left in English.
- Columns are read in the right order also when the gutter between them is
  narrow, and a title or author line across both columns stays whole.
- Headings set in capitals, with Roman numerals ("IV. RESULTS") or in heavy
  faces (Cell) are recognised as headings.
- Reference lists without a "References" heading (Nature, Physical Review
  Letters, Science, NEJM) are recognised and left in English, and appendices
  after the references are translated again.
- Tables end where they end: text beside or below a table, a footnote's rule
  or a fraction bar no longer pulls the body text into the table, where it
  was left untranslated.
- Text set around a figure or a table no longer covers it with its translation,
  and a caption set beside the text is kept apart from it.
- Captions: "Fig. 3" and its text on one line, a label on a line of its own
  over its title, and captions set centred line by line are kept together and
  set as in the original; a caption set inside its figure's box is translated.
- Publishers' own symbols read as what they show: Elsevier's and Cell's minus,
  plus, equals and slash signs, quotation marks, primes and list bullets,
  subscripts handed over with the following words, and small capitals.
- Running heads, DOI lines and a journal's cover page are not translated.
- Fewer sentences are left in English: one that fails is tried once more on
  its own; numbers written with a leading zero ("07") or without it,
  "COVID-19" rendered as 新冠 and numbered headings in the translation are
  accepted; a citation after the full stop no longer joins two sentences.

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
