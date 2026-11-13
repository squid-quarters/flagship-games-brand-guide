---
version: 0.2-proposal
name: Flagship Games
description: A recognisable paper-and-ink shop frame with flexible game expression
colors:
  primary: '#B6A27A'
  ink: '#303C38'
  paper: '#F7F5EF'
  surface: '#FFFEF9'
  muted: '#626A62'
  border: '#858A7F'
  line: '#D6D2C7'
  soft: '#ECE8DE'
  success: '#285B3D'
  warning: '#715013'
  danger: '#943D32'
  focus: '#254B62'
  focus-inverse: '#F8E9C6'
  ink-hover: '#43544C'
  clay: '#9B5945'
  logo-gold: '#BAAC7F'
  campaign-fantasy: '#CDD7AE'
  campaign-future: '#C8D9E5'
  campaign-community: '#E7C7AF'
typography:
  display:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 56px
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: -0.025em
  heading:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.12
  subheading:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 24px
    fontWeight: 650
    lineHeight: 1.2
  feature:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
  caption:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  badge:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 12px
    fontWeight: 650
    lineHeight: 1.5
  body:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
  campaign:
    fontFamily: '''Barlow Condensed'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 54px
    fontWeight: 700
    lineHeight: 1.02
  control:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  mobile-title:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
  mobile-display:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 48px
    fontWeight: 750
    lineHeight: 1.2
  specimen:
    fontFamily: '''Source Sans 3'', ui-sans-serif, system-ui, sans-serif'
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.2
  code:
    fontFamily: ui-monospace, SFMono-Regular, Consolas, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.surface}'
    rounded: '{rounded.sm}'
  input:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.sm}'
---
# Flagship Games

## Overview

**Creative North Star: “One shop. Many games.”**

Flagship is a dependable host for many different game worlds. The boat, paper, green ink, typography and information order form a recognisable shop frame. Game illustration and campaign colour supply atmosphere inside it. The frame must remain useful when the artwork disappears: at the counter, in checkout and on an event record.

The supplied name and unchanged logo, accepted paper/origami retail direction, and latest accepted Choose Your Game composition are established inputs. Exact values, typography, clear space and component refinements in this v0.2 specification are **proposed for owner review**. The user confirmed the private reference collection as direction evidence on 13 November 2026; those posts do not establish typeface provenance, commercial rules or publisher-art rights.

**Key characteristics:** warm without nostalgia; precise without severity; adaptable without anonymity. The guide is a reference application, not a retail sales page.

## Colors

Green ink, warm paper, warm-white sheet and muted brass reconcile the accepted retail direction with the shared brand source. The frontmatter is the single proposed token authority. UI brass and the sampled original logo gold are distinct roles; never recolour the original to match a token. The raster sample is not a Pantone or CMYK specification.

**The shop frame rule.** Paper and sheet carry information, ink carries type and primary actions, brass supplies restrained emphasis. Game-specific colour belongs in the expression window rather than the whole interface. Campaign examples are not exclusive game-to-colour assignments.

Decorative line and accessible control border have separate jobs. Use the stronger border token on inputs and boundaries needed to identify a control. Ink on paper, sheet or brass and sheet on ink are intended text pairings. Small white text on brass is prohibited. Status has words as well as colour, and never inherits a game's campaign colour. Focus uses the focus token on light surfaces and focus-inverse on ink. Generated contrast evidence is in the public download kit.

## Typography

**Core family:** Source Sans 3, self-hosted, variable weights. Use it for interface, reference prose, dates, prices and ordinary headings. **Campaign family:** Barlow Condensed Bold, self-hosted, for a single high-impact promotional headline; never for body copy, form labels or transaction status. Both are SIL Open Font License 1.1 assets. Neither is represented as the logo's original font.

Use the frontmatter hierarchy. Keep body measure near 65–70 characters; use sentence case and readable labels. Tabular numerals align prices, counts and totals. Short organisational labels can use capitals; paragraphs do not. One headline voice at a time, with no outlines or stacked effects. On narrow layouts, wrap long names and stack content before shrinking useful information. System sans is the functional fallback when fonts fail.

## Layout

Use the shared 4px rhythm: tighter within groups, more space between them. The public reference has persistent chapter navigation and a readable main column; on narrow screens the contents collapse into a native disclosure. Sections remain reachable through anchors without JavaScript. Public examples use comparable image windows, clean information sheets and a stable shop signature. This preserves the accepted category-navigation composition rather than replacing its imagery.

A campaign's reading order is title, date/time, entry conditions, next action, shop signature. Responsive arrangements preserve DOM reading order. At least 44px for primary touch controls. A catalogue compares products; the counter keeps search, line items and totals easy to scan. They do not inherit campaign typography or decoration.

## Elevation & Depth

Paper is expressed through alignment, edges, overlaps and negative space. The reference defaults to flat surfaces and quiet divisions. A restrained folded corner can identify an editorial sheet; it is not a required component decoration. Keep texture out of dense reading, forms and operating surfaces. No fake torn receipts, boat fleets, ornamental grids or glow shadows.

## Shapes

Rectangular sheets and consistent image windows provide the material language. Softly eased small-radius controls stay familiar. The original boat is the only literal boat motif; original abstract studies may use independent flat planes, without tracing the mark. Preserve the supplied square PNG canvas and aspect ratio.

Proposed digital logo image minimum: 64px width. Proposed clear space on each side: one quarter of the displayed image width, measured from its square canvas. This is a practical screen rule, not an original logo construction specification. Test physical reproduction separately; no vector or print master was supplied.

## Components

Primary actions use sheet text on ink; secondary actions use an accessible ink/border treatment on a light surface. A descriptive verb names the action. Provide hover, keyboard focus, active, disabled, pending and error states where meaningful. Disabled examples explain their prerequisite nearby.

Inputs have persistent labels, 16px or larger text, visible boundaries, associated help and inline errors. Focus uses a 3px outline and 4px offset. Status labels are text, not action chips. Navigation indicates current location through contrast and weight, not colour alone.

Prevent duplicate payment submissions while checking a provider result. Confirm only a verified result. Registration, payment, attendance and giveaway prize collection remain independent records. A toast supplements persistent state; it never replaces it. No operational layout or specimen bypasses authorization or application validation.

## Do's and Don'ts

### Do

- Preserve the unchanged official logo and a stable information/signature area.
- Allow expressive, rights-cleared campaign imagery within the shared frame.
- Make the same foundations serve the catalogue, checkout, event record and counter.
- Label illustrative products, prices, dates and states as examples.
- Keep generated CSS, JSON, application adapter and sidecar derived from this source.

### Don't

- Recolour, filter, trace, rotate, stretch or replace the official mark.
- Treat historic poster styling or prices as an approved specification.
- Put busy art behind event conditions or use several competing headline styles.
- Turn every control into a folded-paper decoration.
- Treat payment, registration, attendance or prize collection as one state.
- Publish private reference media, member data or unlicensed game illustration.
