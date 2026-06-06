---
name: Obsidian Flux
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c6c4df'
  on-secondary: '#2f2e43'
  secondary-container: '#47475d'
  on-secondary-container: '#b8b6d0'
  tertiary: '#bbc5eb'
  on-tertiary: '#252f4d'
  tertiary-container: '#8590b3'
  on-tertiary-container: '#1e2946'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e2e0fc'
  secondary-fixed-dim: '#c6c4df'
  on-secondary-fixed: '#1a1a2e'
  on-secondary-fixed-variant: '#45455b'
  tertiary-fixed: '#dae1ff'
  tertiary-fixed-dim: '#bbc5eb'
  on-tertiary-fixed: '#0f1a37'
  on-tertiary-fixed-variant: '#3b4665'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-glass: '#09090B99'
  border-subtle: '#27272A'
  text-muted: '#A1A1AA'
  mesh-indigo: '#1A1A2E'
  mesh-violet: '#16213E'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for a premium, high-performance documentation experience. It utilizes an "OLED Black" aesthetic that prioritizes visual comfort, focus, and technical sophistication. The target audience consists of developers and power users who value clarity and a high-end digital environment.

The design style is a hybrid of **Minimalism** and **Glassmorphism**. By grounding the interface in a true black (#000000) environment, we eliminate visual noise and leverage the physical properties of modern displays. Depth is not achieved through traditional shadows, but through luminous "organic" mesh gradients that shift beneath semi-transparent layers, creating a sense of a vast, fluid digital space.

## Colors

The palette is anchored by a pure `#000000` background to maximize contrast and battery efficiency on OLED panels. 

- **Primary Action**: Electric Blue (#3B82F6) is used sparingly for links, buttons, and active states to provide a high-energy focal point.
- **Surface Strategy**: Secondary and Tertiary colors are reserved for background mesh gradients. These should be rendered as large, soft-edged radial blurs (30-50% viewport width) positioned at the edges of the layout to provide "atmospheric" lighting without interfering with text legibility.
- **Typography Hierarchy**: Use pure #FFFFFF for primary content and #A1A1AA for metadata, captions, and secondary navigation elements.

## Typography

The typography system balances technical precision with high-end editorial flair. 

- **Headlines**: Hanken Grotesk provides a sharp, contemporary look with tight letter-spacing for large-scale displays.
- **Body**: Inter is utilized for long-form documentation due to its exceptional legibility and neutral character.
- **Monospace**: JetBrains Mono is assigned to labels, badges, and code blocks to maintain a developer-centric feel. 

All headings should remain pure white (#FFFFFF) to ensure they "pop" against the dark background. Body text should maintain high contrast but can drop to #A1A1AA for tertiary descriptions.

## Layout & Spacing

This design system uses a **Fixed Grid** for documentation content to ensure optimal line lengths for reading, while navigation sidebars remain fluid.

- **Desktop (1280px+):** A 12-column grid. Documentation content is centered and capped at 800px width. Sidebars (Navigation and Table of Contents) flank the central column.
- **Tablet (768px - 1279px):** Content expands to fill the screen with 40px margins. The secondary sidebar is hidden into a drawer.
- **Mobile (< 767px):** Single column layout with 16px horizontal margins. 

Spacing follows a linear 8px scale. Use wider vertical "Stack" spacing between sections to maintain the minimalist, airy feel despite the dark palette.

## Elevation & Depth

Elevation is achieved through transparency and light rather than shadows.

- **Level 0 (Base):** Pure #000000. This is the "void" layer where background mesh gradients reside.
- **Level 1 (Navigation/Sidebars):** Subtle dividers (#27272A) separate these areas from the main content. No background fill is required for sidebars; they sit directly on the void.
- **Level 2 (Containers/Cards):** Glassmorphism is applied here. Use a background fill of `#09090B` at 60% opacity with a `20px` backdrop blur. 
- **Borders:** Containers must feature a "hairline" border of `#FFFFFF` at 10% opacity. This simulates light catching the edge of a glass pane.

## Shapes

The shape language is "Soft" yet precise. Elements use a 0.25rem (4px) base radius to maintain a professional, slightly architectural feel. 

- **Standard Elements (Inputs, Buttons):** 4px radius.
- **Cards & Modals:** 8px (rounded-lg) to 12px (rounded-xl) for a more distinct container feel.
- **Interactive States:** On hover, rounded corners remain fixed; do not animate border-radius.

## Components

- **Buttons (Primary):** Solid Electric Blue (#3B82F6) with white text. On hover, apply a subtle blue outer glow (`0 0 15px rgba(59, 130, 246, 0.4)`) and slightly increase saturation.
- **Buttons (Secondary):** Transparent background with the 10% white border. On hover, background becomes 15% white.
- **Input Fields:** Dark fill (#09090B) with a subtle 1px border (#27272A). On focus, the border transitions to Electric Blue and gains a subtle inner glow.
- **Chips/Badges:** Use JetBrains Mono for text. Background should be #27272A with 40% opacity. For "Success" or "Warning" badges, use a tinted version of the accent color at low opacity.
- **Code Blocks:** Deep black background with a slightly brighter border than standard containers. Use syntax highlighting that favors neon/saturated hues against the dark background.
- **Navigation Links:** Muted gray (#A1A1AA) by default. Transition to #FFFFFF on hover with a 2px vertical blue line on the left of the active item.
