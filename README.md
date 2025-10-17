# PixelDraw

A modern, feature-rich pixel art editor. Create stunning pixel art with an intuitive interface, powerful tools, and flexible export options.

## Features

- **Multiple Drawing Tools**: Draw, erase, fill, shapes (rectangle, ellipse, line)
- **Layer System**: Work with multiple layers for complex compositions
- **Undo/Redo**: Full history support with 50-step memory
- **Symmetry Tools**: Horizontal, vertical, and rotational symmetry modes
- **Customizable Canvas**: Flexible grid sizes from 8×8 to 64×64, plus custom dimensions
- **Grid Styles**: Choose between lines, dots, alpha checkerboard, or no grid
- **Color Palette**: Extensive color palette with custom color support
- **Zoom & Pan**: Navigate large canvases with zoom (25%-300%) and hand tool
- **Export Options**: Save as PNG or SVG, with copy-to-clipboard support
- **Project Management**: Save and load complete projects with all layers
- **Theme Support**: Light and dark themes
- **Keyboard Shortcuts**: Efficient workflow with hotkeys

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Start creating pixel art!

No build process or dependencies required - it's pure HTML, CSS, and JavaScript.

### Quick Start Guide

1. **Select a Tool**: Click a tool from the left sidebar or use keyboard shortcuts
2. **Choose a Color**: Pick from the color palette or add custom colors
3. **Draw on Canvas**: Click and drag to create your pixel art
4. **Export Your Work**: Use the export panel to save as PNG or SVG

## User Guide

### Drawing Tools

#### Basic Tools

- **Draw (D)**: Paint pixels with the selected color
  - Click and drag to draw
  - Hold Cmd/Ctrl while drawing to temporarily switch to Erase
  
- **Erase (E)**: Remove pixels
  - Click and drag to erase
  - Hold Cmd/Ctrl while erasing to temporarily switch to Draw

- **Fill (F)**: Flood fill an area with the selected color
  - Click any pixel to fill connected pixels of the same color

- **Clear (C)**: Clear all pixels on the active layer
  - Removes all content from the current layer

#### Shape Tools

- **Rectangle (R)**: Draw rectangular shapes
  - Click and drag to define the rectangle
  - Hold Shift for perfect squares
  - Hold Alt/Option to draw from center

- **Ellipse (O)**: Draw circular and oval shapes
  - Click and drag to define the ellipse
  - Hold Shift for perfect circles
  - Hold Alt/Option to draw from center

- **Line (L)**: Draw straight lines
  - Click and drag to define start and end points
  - Hold Shift to constrain to 45° angles

### Navigation Tools

- **Hand (H)**: Pan around the canvas
  - Click and drag to move the viewport
  - Also works by holding Space + Left Click with any tool

- **Zoom Tool**: Zoom in and out of the canvas
  - Click the zoom button in the sidebar
  - Use the zoom controls (bottom right) to adjust level
  - Zoom range: 25% to 300%
  - Click "Reset" to return to 100%

### Canvas Settings

#### Grid Size
Choose from preset sizes or create custom dimensions:
- **Presets**: 8×8, 16×16, 24×24 (default), 32×32, 48×48, 64×64
- **Custom**: Enter any width and height up to your needs

#### Grid Style
Select how the grid appears:
- **Lines**: Traditional grid lines between pixels
- **Dots**: Subtle dots at pixel corners
- **Alpha**: Checkerboard pattern (useful for transparency)
- **None**: No grid overlay

#### Symmetry Mode
Create symmetrical designs automatically:
- **None**: Standard drawing
- **Horizontal**: Mirror across vertical axis
- **Vertical**: Mirror across horizontal axis
- **Both**: Mirror across both axes
- **Rotational**: 4-way rotational symmetry

### Color Palette

#### Selecting Colors
- Click any color swatch to select it
- The selected color is highlighted with a white border
- Current color is shown in the color swatch button (sidebar)

#### Adding Custom Colors
1. Click the "+" button in the color palette
2. Enter a hex color code in the input field
3. Press Enter or click the "+" again to add

#### Editing Colors
- Double-click any color swatch to open the color picker
- Choose a new color and it will update in the palette

#### Hex Color Input
- Type hex codes directly in the input field (#RRGGBB format)
- Press Enter to apply the color

### Layer System

#### Managing Layers
- **Add Layer**: Click the "+" button in the Layers panel
- **Add Image Layer**: Import an image as a new layer
- **Select Layer**: Click a layer to make it active
- **Toggle Visibility**: Click the eye icon to show/hide layers
- **Lock Layer**: Click the lock icon to prevent editing
- **Delete Layer**: Click the trash icon to remove a layer
- **Reorder Layers**: Drag layers to change their stacking order

#### Layer Properties
- Each layer has a thumbnail preview
- Active layer is highlighted
- Locked layers cannot be edited
- Hidden layers don't appear in exports

### Undo/Redo

- **Undo (Ctrl+Z / Cmd+Z)**: Revert the last action
- **Redo (Ctrl+Y / Cmd+Y)**: Restore an undone action
- History supports up to 50 actions
- Works across all tools and operations

### Export Options

#### Export as PNG
- Click "Export as PNG" to download
- Click the copy icon to copy to clipboard
- Exports only visible layers
- Transparent background preserved

#### Export as SVG
- Click "Export as SVG" to download
- Click the copy icon to copy to clipboard
- Vector format, scales perfectly
- Ideal for further editing or web use

### Project Management

#### Save Project
1. Click the save icon in the sidebar
2. Project saves as a `.pixeldraw` JSON file
3. Includes all layers, colors, and settings

#### Load Project
1. Click the load icon in the sidebar
2. Select a `.pixeldraw` file
3. All layers and settings are restored

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| D | Draw tool |
| E | Erase tool |
| F | Fill tool |
| C | Clear layer |
| R | Rectangle tool |
| O | Ellipse tool |
| L | Line tool |
| H | Hand tool |
| Ctrl+Z / Cmd+Z | Undo |
| Ctrl+Y / Cmd+Y | Redo |
| Shift | Constrain shapes (square/circle) or angles (45°) |
| Alt/Option | Draw shapes from center |
| Space + Drag | Pan canvas (with any tool) |
| Cmd/Ctrl + Draw | Temporarily switch to Erase |
| Cmd/Ctrl + Erase | Temporarily switch to Draw |

### Theme Toggle

Switch between light and dark themes:
- Click the theme toggle switch in the header
- Theme preference is saved automatically
- Both themes are optimized for comfortable use

## Tips & Tricks

1. **Precise Drawing**: Use the coordinate display (bottom) to track exact pixel positions

2. **Quick Color Selection**: Use the hex input field for precise color values

3. **Efficient Workflow**: Learn keyboard shortcuts to speed up your work

4. **Layer Organization**: Use multiple layers to separate different elements of your artwork

5. **Symmetry for Icons**: Use symmetry modes to create balanced icons and sprites

6. **Zoom for Detail**: Zoom in for precise pixel placement, zoom out to see the full picture

7. **Save Often**: Use the project save feature to preserve your work with all layers intact

8. **Export Formats**: 
   - Use PNG for final artwork and sharing
   - Use SVG when you need scalable graphics or further editing

## Browser Compatibility

PixelDraw works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Version

Current version: 0.8.5


## Credits

Created with ❤️ for pixel art enthusiasts everywhere.
