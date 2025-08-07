# Gallery

This section features the “Gallery” header followed by eight uniformly sized images arranged in a 4-column, 2-row grid.


## Desktop

### Layout

- Container with two rows:  
  1. Header row  
  2. Gallery row  
- Gallery is a flexbox: `display: flex; flex-wrap: wrap;` with fixed image widths  

### Typography

- Header font-size: 80px  
- Line-height: 1.1  

### Visual Behavior

- Clicking any image opens a fullscreen slider overlay  
- Slider controls:  
  - Left/right arrows to navigate through images  
  - “×” close button fixed at top-right of the overlay  


## Tablet

### Layout

- Identical header + gallery structure  
- Images automatically wrap to fit the narrower width (e.g., 3 then 2 columns)

### Typography

- Header font-size remains 80px  

### Visual Behavior

- Same slider behavior as desktop  


## Mobile

### Layout

- Follows tablet structure  
- Images wrap further (e.g., 2 columns or single column based on available width)

### Typography

- Header font-size remains 80px  

### Visual Behavior

- Same slider behavior as desktop and tablet  