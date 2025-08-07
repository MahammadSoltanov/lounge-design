# Footer

This section contains the site logo with social media icons, company information blocks (location contacts and opening hours), a legal/credits line, and a scroll-up button.

## Desktop

### Layout

- Parent container uses flex wrap:
  - Div 1: logo + social icons
  - Div 2: company info blocks, each with a header and description
- Footer row beneath container:
  - Left: “© Lounge 2025 Design by StyleShout Distributed by ThemeWagon”
  - Right: fully rounded scroll-up button with an upward arrow icon

### Typography

- Company info headers: 13px, uppercase
- Company info descriptions: 16px, different font family for subtler appearance
- Legal/credits text: 14px (or consistent with body copy)

### Visual Behavior

- Scroll-up button fixed at footer row, circular, hover state on background or icon
- Social icons change color or scale on hover

## Tablet

### Layout

- Within the logo+socials div, social icons wrap to a new line under the logo
- Company info and footer row remain unchanged

## Mobile

### Layout

- Social icons stack vertically in their own column beneath the logo
- Company info blocks and footer row remain in document flow
