# About

This section comprises the “Our Story” header, a long narrative paragraph, and an accompanying image.


## Desktop

### Layout

- Two-column grid with a consistent gap  
- Left column  
  - “Our Story” heading  
  - Image directly below  
- Right column  
  - Long text block that scrolls independently  

### Typography

- Heading: font-size 80px; line-height 1.1  
- Body text: font-size 20px; line-height 1.6  

### Visual Behavior

- Left column uses `position: sticky; top: 0;`  
- Right column set to `overflow-y: auto; max-height: 80vh;` so the text scrolls first  



## Tablet

### Layout

- One vertical column overall  
- Header and image grouped in a flex container  
  - `flex-direction: row; align-items: center;`  
- Paragraph wraps below that flex group  

### Typography

- Inherits desktop font sizes for both heading and body  

### Visual Behavior

- All elements scroll together (no sticky behavior)  

## Mobile

### Layout

- Fully stacked flow:  
  1. Heading  
  2. Image (now below the header)  
  3. Paragraph  

### Typography

- Heading: font-size 52.5px; line-height 1.1  
- Body text: font-size 17.5px; line-height 1.5  

### Visual Behavior

- Uniform scrolling as on tablet  
- Image fluidly scales to container width (`width: 100%; height: auto;`)  


