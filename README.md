<h1 align="center">🐈 Pxndxs UI 🐼</h1>

<p align="center">
  <strong>An early-stage Web Components experiment in TypeScript.</strong><br />
  <a href="./README-es.md">Leer en español</a>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blueviolet?style=for-the-badge" />
  <img alt="Status" src="https://img.shields.io/badge/status-early_experiment-yellow?style=for-the-badge" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-success?style=for-the-badge" />
</p>

---

## ✨ What is this?

Pxndxs UI is a small playground for building framework-free UI components with the native [Custom Elements](https://developer.mozilla.org/docs/Web/API/Web_components/Using_custom_elements) and [Shadow DOM](https://developer.mozilla.org/docs/Web/API/Web_components/Using_shadow_DOM) APIs.

Today it ships **one component**, `<date-picker>`. It has no runtime dependencies.

## 📅 `<date-picker>`

A custom element that renders a native `<input type="date">` inside a Shadow DOM, with an `aria-label` so screen readers announce it.

```html
<date-picker id="birthday"></date-picker>
```

| Attribute | What it does |
| --- | --- |
| `id` | Forwarded to the inner input as `date-picker-<id>` |

That is the whole public surface for now.

## 🗺️ Roadmap

Ideas, not promises:

- [ ] Read and set the value, and emit a `change` event
- [ ] Theming through CSS custom properties
- [ ] A custom calendar UI instead of the native input
- [ ] Tests
- [ ] Publish to npm

## 🧪 Try it locally

```bash
git clone https://github.com/pxnditxyr/pxndxs-ui.git
cd pxndxs-ui
npm install
npm run dev
```

`index.html` and `src/main.ts` are the demo page. `npm run build` runs `tsc` and `vite build`.

## 🗂️ Project structure

```text
src/
├── presentation/web/components/date-pickers/   The <date-picker> element
├── index.ts                                    Public exports
├── main.ts                                     Demo entry point
└── style.css                                   Demo styles
index.html                                      Demo page
```

## 📄 License

MIT. See [LICENSE](./LICENSE).

---

Made by [**Pxndxs**](https://github.com/pxnditxyr) 🐼
