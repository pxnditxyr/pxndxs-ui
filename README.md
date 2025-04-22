<p align="center">
  <h1 align="center"> 🐈  Pxndxs UI 🐼 </h1>
</p>
</br>

## 🐈 Pxndxs UI 🐼

✨ **A minimalist and adorable Web Components library built with TypeScript.** ✨

![Version](https://img.shields.io/badge/version-0.1.0-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-success?style=flat-square)
[![npm](https://img.shields.io/badge/npm-pxndxs--ui-crimson?style=flat-square)](https://www.npmjs.com/package/pxndxs-ui)

## 🚀 Features
- 📅 **DatePicker** - Modern date selection component
- 🧩 **Native Web Components** (Custom Elements v1)
- ⚡ **Zero dependencies** - Pure Vanilla JS/TS!
- 🎨 **Customizable** with CSS variables
- 📦 **Ultra-lightweight** (< 5KB gzipped)
- 🌈 **Accessibility** (ARIA-compatible)

## 📦 Installation

```bash
npm install pxndxs-ui
```

or use directly via CDN:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/pxndxs-ui@latest/dist/main.js"></script>
```

## 🛠 Basic Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="node_modules/pxndxs-ui/dist/main.js"></script>
  </head>
  <body>
    <!-- DatePicker Component -->
    <date-picker id="my-date" theme="modern"></date-picker>
  </body>
</html>
```

### 🎛 Custom Attributes
| Attribute  | Description                      | Values           |
|------------|----------------------------------|------------------|
| `id`       | Unique identifier                | Any string       |
| `theme`    | Visual style                     | `modern` (default) |

## 🏗 Project Structure
```
pxndxs-ui/
├── src/
│   ├── presentation/
│   │   └── web/
│   │       └── components/
│   │           └── date-pickers/      🗂 Core components
│   ├── main.ts                        🚀 Entry point
├── dist/                              📦 Production build
├── public/                            🖼 Static assets
└── index.html                         🧪 Development demo`
```

## 🧪 Development

1. Clone the repository:

```bash
git clone https://github.com/pxnditxyr/pxndxs-ui.git
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🤝 Contributions
Your contributions are welcome! 🎉
Follow these steps:
1. 🍴 Fork the project
2. 🌿 Create a branch (`git checkout -b feature/awesome-feature`)
3. 💾 Commit your changes (`git commit -m 'Add awesome feature'`)
4. 🚀 Push to the branch (`git push origin feature/awesome-feature`)
5. 🔀 Open a Pull Request

## 📄 License
This project is licensed under **MIT** - see the [LICENSE](LICENSE) file for details.

---

Made by [**Pxndxs**](https://github.com/pxnditxyr) 🐼
Questions? Open an [issue](https://github.com/pxnditxyr/pxndxs-ui/issues)! 🐈
