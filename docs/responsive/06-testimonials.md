# Testimonials

This section includes the “Testimonials” header and a drag-scrollable slider that displays four customer testimonials. Navigation buttons beneath the slider paginate the visible items.


## Breakpoints

| Device   | Viewport Width | Visible Items | Nav Buttons           |
|-- |-- |- | |
| Desktop  | > 1024px       | 3 per view    | 2 (1–3, 2–4)          |
| Tablet   | 600px–1024px   | 2 per view    | 3 (1–2, 2–3, 3–4)     |
| Mobile   | < 600px        | 1 per view    | 4 (1, 2, 3, 4)        |


## Desktop

### Layout

- Vertical flow: header on top, slider underneath  
- Slider is a flex container of four `<article>` items  
- Each testimonial item:  
  - Circular profile image on the left  
  - On the right, a block with full name (above) and city (below)  
  - Description text below the image+meta block  

### Typography

- Header: `font-size: 40px;`  
- Name: `font-size: 16px; font-weight: 600;`  
- City: `font-size: 15px; muted gray`  
- Testimonial text: `font-size: 20px; line-height: 1.5;`

### Visual Behavior

- Slider is drag-scrollable (mouse or touch)  
- Clicking nav buttons programmatically scrolls to the corresponding item range  
- No additional animations beyond smooth scrolling  


## Tablet

### Layout Adjustments

- Slider now shows 2 items side by side  
- Nav buttons expand to three: “1–2”, “2–3”, “3–4”  

### Typography

- Inherits all desktop font sizes and weights  

### Visual Behavior

- Same drag-scroll and nav-button behavior as desktop  


## Mobile

### Layout

- Slider displays a single testimonial per view  
- Nav buttons increase to four: “1”, “2”, “3”, “4”  

### Typography

- Header reduces to `font-size: 35px;`  
- All other text sizes remain as tablet/desktop  

### Visual Behavior

- Same smooth scrolling and button-driven pagination  

