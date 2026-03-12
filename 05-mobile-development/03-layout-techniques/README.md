# Layout Techniques

- Flow layout, responsive layout, and rem/vw layout can be used to build mobile web.
- Flex layout and grid layout is more like a tool.
- A project can sometimes uses the mix of these techniques.

> Mobile Screen Size: 320 (min) - 480 (max) 
> - When doing media query, we can do something like 320 - 375, 375 - 480
> - Usually we won't consider 500 as the max screen width is 480px.
> - Do not use absolute unit (px) to develop mobile site.

## 01 Flow Layout (%)

- Use % and `box-sizing: border-box;`
- Downside: Extra media queries to adjust font-size and gaps.
- Some techniques:
  - 1. Proportional scaling of squared element - keeping width and height equal as the screen size changes.
  - 2. Image scaling - handling aspect ratio mismatch between the container and image inside.
  - 3. Horizontal gap - uses padding.
  - 4. Vertical gap - uses padding / margin.


**Iphone Safe Area:**

- Standard tabbar height: 100px

1. Add `<meta name="viewport" content="width=device-width,viewport-fit=cover,initial-scale=1.0"/>` to fill the safe area / home indicator area.
2. To prevent tabbar content covered by the navigation bar (Iphone black line at the bottom), add the following CSS:

**Method 1:**
- Make sure the element is not a border-box, otherwise, the element content reduces.

```css
/* IOS<11.2 */
padding-bottom: constant(safe-area-inset-bottom);
/* IOS>11.2 */
padding-bottom: env(safe-area-inset-bottom);
```
**Method 2:**

```css
/* IOS>11.2 */
height: calc(50px+ constant(safe-area-inset-bottom));
/* IOS>11.2 */
height: calc(50px + env(safe-area-inset-bottom));
```

## 02 Rem Layout

> Recommend testing using real device.

- Mobile web only.

**Work Flow:**
1. Ask the designer to create the mobile design mockup at 750px width.
2. Develop normally using px based on 750px-wide design mockup.
3. Decide how many parts to divide the page into. Standard: `10 parts`
4. Calculate the size of 1 rem `clientWidth / parts`
5. Set the html font-size
6. Update the tool setting with the size of 1rem (Must be integer) and convert px to rem using tool.

```js
/* Dynamic font-size calculation across all mobile device width */
function initPage() {
  // Obtain the device client width
  const clientWidth = document.documentElement.clientWidth;
  // How many parts to divide the page into
  const parts = 10; // 10 parts (e.g)
  // Calculate the font-size for this screen size
  const fontSize = clientWidth / parts;
  // Set the html font-size
  document.documentElement.style.fontSize = `${fontSize}px`;
}

initPage();

// Recalibrate on screen resize
window.addEventListener("resize", initPage);
```


> Some defensive CSS techniques to prevent text overflow:

**Single-line Ellipsis**

```css
/* Keep text in a single line */
white-space: nowrap;

/* Hide overflowed text */
overflow: hidden;

/* Show … for overflowing text */
text-overflow: ellipsis;   
```

**Multi-line Ellipsis**

```css
/* Hide the overflowing part */
overflow: hidden;

/* Show ellipsis (...) when text overflows */
text-overflow: ellipsis;

/* Display the element as a flexible box (old WebKit flexbox model) */
display: -webkit-box;

/* Limit the content inside the block container to a specified number of lines */
-webkit-line-clamp: 2;

/* Arrange the children of the flexbox vertically */
-webkit-box-orient: vertical;
```

## 03 Vw Layout