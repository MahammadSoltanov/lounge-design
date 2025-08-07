# Menu

This section features the “Our Menu” header, a set of three menu-selection tabs, and a dynamic container that displays the available drinks for the selected tab.


## Desktop

### Layout

- Two-column grid  
  - Left column:  
    - “Our Menu” header  
    - Vertical menu-tab list  
  - Right column:  
    - Container showing menu items for the active tab  

### Typography

- Menu tab labels: 20px  
- Section header: 80px  
- Menu item titles: 28px  
- Menu item descriptions: 16px  

### Visual Behavior

- Active tab highlighted with a green background  
- Left column remains fixed (`position: sticky`) until right column’s scroll is exhausted  
- When switching tabs, items fade in from below with a smooth animation  


## Tablet

### Layout

- Single-column flow:  
  1. “Our Menu” header  
  2. Menu tabs in a horizontal flex row (`flex-direction: row`)  
  3. Menu items container below  

### Typography

- Inherits all font-sizes from the desktop version  

### Visual Behavior

- Identical to desktop; no sticky behavior or layout-specific scroll quirks  


## Mobile

### Layout

- Matches tablet’s single-column order  
- Menu tabs wrap onto new lines when container width is exceeded  

### Typography

- Same sizes as desktop and tablet  

### Visual Behavior

- Same as tablet (horizontal tabs wrap, unified scroll)  