# Three.js Basic Example

This project demonstrates a basic setup for a Three.js application.

## Project Structure

```
basic/
  index.html
  main.js
  style.css
```

- `index.html`: The main HTML file that loads the Three.js app and sets up the import map for Three.js via CDN.
- `main.js`: The JavaScript entry point. Add your Three.js code here to create and render 3D scenes. Note: Do not use TypeScript type annotations in this file; use plain JavaScript syntax.
- `style.css`: Basic CSS reset for the app.

## Getting Started

1. Open `index.html` in your browser to view the app.
2. Add your Three.js code to `main.js`.
   - Example: The provided `main.js` creates a sky blue scene, adds a camera, a rotating cube, a directional light, and renders everything with an animation loop.

## Common Mistake

- Do not assign `THREE.Scene = new THREE.Scene();` in your code. Instead, use `const scene = new THREE.Scene();`.

## Requirements

- No build tools required. Just open the HTML file in a browser that supports ES modules.
- [Three.js](https://threejs.org/) is loaded via CDN using an import map. Update `<version>` in the import map in `index.html` to the desired Three.js version (e.g., `0.155.0`).

Example import map in `index.html`:

```html
<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/"
    }
  }
</script>
```

Replace `<version>` with the actual version number, e.g., `0.155.0`.

## License

This project is for learning and demonstration purposes.
