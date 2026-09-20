# Leadbox Design System

The design system for **Leadbox OS** — an automotive dealership platform for Canadian and US dealer groups. One authenticated web app, five product modules, all sharing a dark navigation rail and dense, data-first screens.

Everything here was derived by reading the product source, not from screenshots.

## Sources

- **Primary repo:** [`Leadbox-Inc/leadbox-os`](https://github.com/Leadbox-Inc/leadbox-os) (private) — Laravel 11 + Vue 3 + Tailwind CSS 4 + HeadlessUI + Heroicons. Design truth lives in:
  - `resources/css/app.css` — the `@theme` token block and the `.dark` overrides (all colour tokens here come from it verbatim)
  - `tailwind.config.js` — font families and brand colour aliases
  - `resources/js/components/ui/` and `resources/js/components/utils/` — the reusable primitives
  - `resources/js/layouts/Authenticated.vue` + `resources/js/components/PrimaryNavigation.vue` — the app shell
  - `resources/js/views/**` — product screens
  - `scripts/check-theme-tokens.sh` — the enforced legacy-class → semantic-token map
- **Also visible to this connection but not used:** [`Leadbox-Inc/leadbox-mobile`](https://github.com/Leadbox-Inc/leadbox-mobile) (no mobile surfaces were recreated).
- **Help content lives elsewhere:** [`Leadbox-Inc/leadbox-help-content`](https://github.com/Leadbox-Inc/leadbox-help-content) — the source for dealer-facing voice and terminology if you need more copy examples.

If you have repo access, read those paths directly — they will always be richer than this summary, and this system is deliberately a faithful subset.

## Products / modules

| Module | What it does | Key views |
| --- | --- | --- |
| **Lena** | Call tracking: inbound/outbound calls, lead scoring ("CLEAR Score"), missed connections, voicemail, transcripts with sentiment | `views/Lena/` |
| **CRM** | Customers, Conversations (sales opportunities with stage + value), Activities, and a unified SMS/email Inbox | `views/Crm/` |
| **IMS** | Vehicle inventory: specs, media, rebates, feed imports (HomeNet, AutoTrader, Boost, Shift Digital), inventory health | `views/InventoryView*`, `views/VehiclesView/` |
| **Digital Ads** | Campaign management, budget pacing, AI recommendations | `views/DigitalAds/` |
| **Admin** | Tenants (dealer groups), locations (dealerships), users, segments, service runner, tools | `views/Admin/` |
| **Market Intelligence** | Competitor analysis, price-to-market | `views/MarketIntelligence/` |

Domain vocabulary that shows up in the UI: **Tenant** = dealer group, **Location** = a single dealership, **Segment** = a group of locations, **Conversation** = a CRM sales opportunity, **Opportunity** = a missed call needing follow-up, **Lena** = the call-tracking module. Everything is scoped by selected locations.

## Index

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `colors.css`, `semantic.css` (+ `.dark`), `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `assets/` — brand marks and app glyphs (see Iconography).
- `components/` — the reusable primitives, grouped by concern.
- `ui_kits/leadbox_os/` — click-through recreation of Lena, CRM and IMS screens. Start at `ui_kits/leadbox_os/index.html`; see its README for what is deliberately missing.
- `guidelines/` — the foundation specimen cards shown in the Design System tab.
- `SKILL.md` — makes this folder usable as an Agent Skill.
- `github.md` — upstream source association for one-click sync.

### Components

`components/core/` — **Button**, **TagBadge**, **Avatar**, **Icon**, **Spinner**
`components/forms/` — **Input**, **Select**, **Checkbox**, **ToggleSwitch**
`components/data/` — **DataTable**, **StatCard**, **Pagination**, **EmptyDataCard**
`components/navigation/` — **Tabs**, **SubTabs**
`components/feedback/` — **Tooltip**, **Notification**, **ConfirmModal**, **Drawer**
`components/shell/` — **AppSidebar**, **Topbar**

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what/when + usage). Every one maps to a real Vue component:

| Here | Upstream |
| --- | --- |
| Button | `components/ui/Button.vue` |
| Input | `components/ui/BaseInput.vue` |
| Select | `components/ui/BaseSelect.vue` |
| Checkbox | `components/ui/BaseCheckbox.vue` |
| Avatar | `components/ui/UserAvatar.vue` |
| TagBadge | `components/utils/TagBadge.vue` |
| Spinner | `components/utils/BaseSpinner.vue` |
| ToggleSwitch | `components/utils/GenericToggleSwitch.vue` |
| DataTable | `components/utils/DataTable.vue` |
| StatCard | `components/utils/StatCard.vue` |
| Pagination | `components/utils/Pagination.vue` |
| EmptyDataCard | `components/utils/EmptyDataCard.vue` |
| Tabs | `components/utils/LbxTabs.vue` |
| SubTabs | `components/utils/LbxSubTabs.vue` |
| Tooltip | `components/utils/Tooltip.vue` |
| Notification | `components/utils/AppNotification.vue` |
| ConfirmModal | `components/utils/BaseConfirmModal.vue` |
| Drawer | `components/utils/BaseDrawer.vue` |
| AppSidebar | `layouts/Authenticated.vue` + `components/PrimaryNavigation.vue` |
| Topbar | header block of `layouts/Authenticated.vue` |

**Intentional additions:** `Icon` (the app imports glyphs straight from `@heroicons/vue`, which has no static analogue here — this is a thin Heroicons wrapper). `AppSidebar` / `Topbar` are extracted from the single `Authenticated.vue` layout so screens can compose the shell.

**Not built** (present upstream, left out on purpose rather than approximated): MoneyInput, BaseComboBox, ComboboxMultiTag, MultiSelectDropdown / SingleSelectDropdown, DateRangeSelector, BasePlayer (call waveform), SyncedTranscript, WysiwygEditor, MediaDragAndDrop, ChatComponent, SkeletonLoader, BulkActionsDropdown, ButtonGroupDropdown, GeneralStats, GlobalSearchDialog, LocationSelector, DarkModeToggle. Ask if you need one and it can be added from source.

---

## Content fundamentals

**Voice: plain, operational, second person.** The app talks to a dealership employee mid-task. It states what a thing is, then what to do about it. No marketing language, no exclamation marks, no jokes.

- **Titles are nouns, in Title Case:** "Inventory", "Calls Overview", "Missed connections", "Pipeline Overview", "Quick Actions", "Recent Conversations". Section headers inside cards are Title Case; some KPI labels are sentence case ("Total calls", "Connected calls", "Appointments set") — the codebase is not perfectly consistent, and that's acceptable.
- **Buttons are imperative verb phrases:** "Add Vehicle", "Import Vehicles", "Restore Vehicle", "Export Vehicles", "Start import", "Confirm", "Cancel", "Log out". Link-style actions get an arrow: "View all conversations →".
- **Empty and unavailable states name the fact, then the remedy, then who to ask:** "Call Tracking not available" / "This product isn't enabled for the selected location. Contact your administrator to enable it." Also: "No conversations in pipeline", "No funnel data available", "No results found.", "No conversations yet".
- **Toasts pair a Title Case outcome with a specific sentence:** "Vehicle Restored" / `Vehicle with stock number "LB-40182" has been restored.` Failures say what to check: "Restore Failed" / "Could not restore the vehicle. Please check the stock number."
- **Helper text is a fragment, not a sentence:** "Awaiting first contact", "6.2% of total calls", "39% of missed", "$3,139,000 pipeline value", "+64 this month".
- **Numbers are always contextualised.** A count rarely stands alone; it comes with a ratio ("70.6 %"), a delta ("+8.2% MoM"), or a denominator ("19.2/25"). Currency is whole dollars, no cents (`Intl.NumberFormat`, `maximumFractionDigits: 0`).
- **"I" is never used.** "You/your" appears in overview copy ("Overview of your customers, conversations, and activities."). System actors are named literally in activity feeds ("System created a conversation from an inbound call").
- **Domain words are used as-is, capitalised as product nouns:** Conversation, Location, Segment, Tenant, Opportunity, CLEAR Score, Lena, IMS, Digital Ads. Never soften them into generic synonyms ("deal", "store") in UI copy.
- **Emoji: never.** Not in the UI, not in copy. (Warning glyphs are Heroicons, not emoji.)
- **Placeholders are literal examples:** "Filter by keywords...", "Search calls, customers...", "Select an option", "All Users". Ellipses are three dots, and search placeholders are per-module.
- **Sentence-ending periods** appear in descriptions and toasts, not in labels, table headers, badges or button text.
- **i18n is not enforced.** Hardcoded English is the de facto pattern; a handful of views use `vue-i18n`. Write English strings unless you are inside an already-localised view.

## Visual foundations

**The vibe:** an operations console, not a marketing site. Dense, quiet, high-information; colour is used for status, never for decoration. Two structural surfaces (`--color-page` behind, `--color-surface` cards on top) plus one near-black chrome (`--color-dark`) — that's the whole background system.

### Colour
- One brand blue, `--color-primary` #0053BA, hovering to `--color-primary-variant` #004498. It marks the single primary action, the active tab underline, the active page in pagination and the focus ring. Navy `--color-secondary` #090F4B is the tooltip fill and body-text brand tone.
- Neutrals come from two ramps: `--color-dark-*` (chrome, dark mode) and `--color-gray-*` (legacy tables). **New work should use the semantic roles only** — `surface / page / subtle / soft / soft-2 / soft-3 / ink / ink-2 / ink-3 / ink-4 / ink-brand / line / line-soft / line-strong`. `scripts/check-theme-tokens.sh` upstream blocks `bg-white`, `text-gray-900`, `border-gray-200` and friends.
- Status colour is a fixed vocabulary: green = connected/sold/success, red = missed/lost/destructive, yellow-orange = warning/pacing/aging, cyan = informational, purple/pink/teal = chart series only.
- CRM stages break that rule deliberately with a warm **amber → lime → green** progression (`bg-amber-100` → `bg-green-700`), safelisted in `tailwind.config.js`. Use those exact stage colours for pipeline UI.
- Dark mode is real and first-class: the same semantic tokens flip under `.dark`. Brand blue is lightened to `#66A3E8` for text and `#4D7CC7` for borders on dark surfaces, and tinted panels become deep muted fills (`#1D2C4F`, `#33290F`, `#2D1414`, `#16261C`) rather than light washes.

### Type
Figtree (`--font-sans`) for interface, Roboto (`--font-primary`) for data tables, sidebar nav labels and pagination — the split is real and worth preserving. Weights: 400 body, 500 labels/menu, 600 page + dialog titles, 700 section titles + KPI values + nav items. Sizes stay on the Tailwind scale: 30px page title, 24px section, 18px card title, 16px dialog title, 14px body/labels, 12px meta and **all table rows**. `font-variant-numeric: tabular-nums` on every `table`, so numeric columns don't jitter.

### Backgrounds and imagery
No photography, no illustration, no gradients, no textures, no patterns anywhere in the app chrome. The only "images" are vehicle photos inside inventory records and the brand SVGs. If a mock needs an image, it's a vehicle photo in a rounded 8px frame — nothing else.

### Cards, borders, elevation
A card is: `--color-surface`, `--radius-lg` (8px), a **1px `--color-stroke` / `--color-line-soft` border**, and either no shadow or `--shadow-sm`. The border does the work; shadows are shallow and rare (`--shadow-xs` on buttons and the topbar, `--shadow-md` on the white page-header strip and on hovered stat cards, `--shadow-lg` on menus and toasts, `--shadow-xl` on modals and drawers). Empty states swap the solid border for a **2px dashed** `--color-line-strong`. There is no colored-left-border card pattern in light mode — the one place a left accent appears is dark-mode activity tints (3px red/green edge), and that is a dark-mode-only substitution for a tinted fill.

### Radii
Four values only: 2px checkbox, **6px for everything interactive** (buttons, inputs, selects, badges, kbd, chips), 8px for cards and panels, full for avatars, pills, progress tracks and stage bars.

### Interaction states
- **Hover:** a background step, not an opacity trick. Filled primary → `--color-primary-variant`; secondary → `--color-page` fill + `--color-dark-7` border; ghost/rows → `--color-page` / `--color-soft`; sidebar items → `rgba(255,255,255,0.1)` (children `0.05`); plain buttons and links → underline. Clickable stat cards swap their border to brand blue and gain `--shadow-md`. Whole-card hover targets use `opacity: 0.8` (the missed-connections cluster).
- **Press:** a darker fill and the shadow drops (`active:bg-primary-variant active:shadow-none`) — nothing scales or moves.
- **Focus:** keyboard only. Interactive non-inputs get `outline: 2px solid var(--color-primary)` with a 2px offset; form controls instead get a soft `--color-new-outline` (#A4D5F8) 2px inset outline, and invalid fields `--color-red-light-3`.
- **Disabled:** gray fill (`--color-dark-6` / `--color-dark-8`), `--color-ink-4` text, shadow removed, `cursor: not-allowed`; ghost variants just drop to muted text.
- **Selected:** `--color-soft` row fill plus a 2px `--color-dark` bar on the left edge of the row (tables), or a `--color-stroke` fill (tabs).

### Motion
Fast and unshowy. 100ms for tooltip/menu fades, **200ms is the default** for hover, tab indicators and the sidebar collapse, 300ms for stat-card hover and the sub-tab accent, 700ms for the drawer slide on ≥sm. Easing is `cubic-bezier(.4,0,.2,1)`. Only `opacity`, `transform`, colour and `max-height` animate. Tab indicators and switch knobs slide; nothing bounces, springs or overshoots. The one flourish in the product is a confetti burst on a completed sale (`canvas-confetti`) and a delivery animation in CRM — otherwise motion is purely functional. Loading is a pulsing `--color-soft-2` skeleton bar (tables, KPI values) or the teal arc `Spinner`.

### Transparency & blur
Used in exactly three places: sidebar item hover/active fills (`rgba(255,255,255,0.1)` / `0.05`), overlays (`bg-gray-500/75` for modals, `bg-dark/80` for the mobile sidebar, `black/30` **plus `backdrop-blur-sm`** for drawers), and hairline dividers in the topbar (`rgba(17,24,39,0.1)`). Nothing else is translucent — no frosted cards, no glassmorphism.

### Layout rules
Fixed 17rem sidebar (80px collapsed) + sticky 64px topbar; content scrolls beneath on `--color-page`. Page titles sit in a white strip with `--shadow-md` that also holds the tab row and page-level actions (actions right-aligned). Content lives in `m-4` / `px-4 sm:px-6 lg:px-8 py-6` regions. Dashboards are 4- or 5-column KPI grids with `gap-4`, then a 2:1 two-column body. Tables span full width inside a bordered card. Toasts are fixed bottom-right; drawers are fixed right; modals are centred. Responsive breakpoints are Tailwind's, plus container queries (`@container`, `@sm`, `@4xl`) on dashboards and tab rows — below `@sm` a tab row collapses into a `Select`.

---

## Iconography

- **Heroicons v2 is the primary set** (`@heroicons/vue`), **Lucide Vue Next is secondary** (used sparingly — e.g. `PanelLeft` for the sidebar collapse). 24px outline is the default in nav, buttons and empty states; 20px solid (`/20/solid`) for chevrons, dismiss ✕, and inline status glyphs. Stroke weight is Heroicons' own (~1.5); never mix in another stroke weight.
- Icons inherit `currentColor`. Muted icons are `#9CA3AF` going `--color-ink-4` on hover; status icons take the status colour.
- **In this design system**, use the `Icon` component — it loads the Heroicons SVG from jsdelivr and tints it via CSS mask, so `currentColor` still works. **Flagged substitution:** the app bundles Heroicons from npm; here it is CDN-loaded, so icons need network access and there is no offline copy.
- **Brand and module marks are real SVGs copied from the repo** and live in `assets/`:
  - `leadbox-logotipo.svg` — full lockup (218×43): "lead" in #F9FAFB, "box" in #64748B, then a six-block colour bracket. From `components/assets/Logotipo.vue`.
  - `leadbox-isotipo.svg` — the bracket mark alone (43×43), used as the collapsed-sidebar mark. From `components/assets/Isotipo.vue`.
  - `app-icon-lena.svg` (phone-and-check, #599FBB accent), `app-icon-ims.svg` (monitor-and-car, #599FBB), `app-icon-admin.svg` (person, #C1404C) — from `components/icons/`.
  - Also in `assets/`: `lena.svg`, `leadbox-logo.png`, `leadbox-isotipo.png`, `favicon-logo.svg`, and the PWA icons `icon-192.png` / `icon-512.png` / `apple-touch-icon.png`.
  - CRM and Digital Ads have no bespoke glyph — they use Heroicons `user-group` and `megaphone`.
- The logotype is designed for dark backgrounds (its wordmark is near-white). On light surfaces use the isotype, or the isotype plus live text.
- **No emoji, ever.** A few unicode characters are used as glyphs in copy: `→` in "View all …" links, `·` and `middot` as separators, `⌘K` in the search hint, `*` for required fields.

## Fonts — substitution note

Leadbox OS self-hosts nothing: `resources/css/app.css` pulls **Roboto** from Google Fonts and Tailwind declares **Figtree** as `font-sans` (also a Google Font, loaded by the host page). `tokens/fonts.css` therefore uses the same Google Fonts imports and there are no font binaries in this project. **If Leadbox has licensed/self-hosted WOFF2 files, send them and they'll be swapped in as real `@font-face` rules.**

## Known gaps / things to confirm

1. No Digital Ads, Admin, Market Intelligence, CRM Inbox, call-detail or Settings screens in the UI kit (see the kit README).
2. Dark mode tokens are defined but no card demonstrates a full screen in dark mode.
3. The upstream primitives listed under "Not built" are unrepresented.
4. Charts: only `LenaDashboardView/CallsChart.vue` was read and recreated (grouped bar, Connected `#22AD5C` / Total `#D1D5DB`, 4px bar radius, `#E5E7EB` gridlines, `#9CA3AF` ticks, datalabels off). Other charts across Digital Ads, Website Analytics and Reports use Chart.js with `chartjs-plugin-datalabels` and were not read — don't assume this styling generalises.
