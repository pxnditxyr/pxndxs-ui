<p align="center">
  <h1 align="center"> 🐈  Pxndxs UI 🐼 </h1>
</p>

</br>

## 🐈 Pxndxs UI 🐼

✨ **Una librería de Web Components minimalista y adorable, construida con TypeScript.** ✨

![Version](https://img.shields.io/badge/version-0.1.0-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-success?style=flat-square)
[![npm](https://img.shields.io/badge/npm-pxndxs--ui-crimson?style=flat-square)](https://www.npmjs.com/package/pxndxs-ui)

## 🚀 Características
- 📅 **DatePicker** - Componente de selección de fechas moderno
- 🧩 **Web Components nativos** (Custom Elements v1)
- ⚡ **Cero dependencias** - ¡Vanilla JS/TS puro!
- 🎨 **Personalizable** con CSS variables
- 📦 **Tamaño ultra ligero** (< 5KB gzipped)
- 🌈 **Accesibilidad** (ARIA compatible)

## 📦 Instalación
```bash
npm install pxndxs-ui
```

o usa directamente vía CDN:
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/pxndxs-ui@latest/dist/main.js"></script>
```

## 🛠 Uso básico
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="node_modules/pxndxs-ui/dist/main.js"></script>
  </head>
  <body>
    <!-- Componente DatePicker -->
    <date-picker id="mi-fecha" theme="modern"></date-picker>
  </body>
</html>
```

### 🎛 Atributos personalizados
| Atributo   | Descripción                          | Valores           |
|------------|--------------------------------------|-------------------|
| `id`       | Identificador único                  | Cualquier string  |
| `theme`    | Estilo visual                        | `modern` (default) |

## 🏗 Estructura del proyecto
```
pxndxs-ui/
├── src/
│   ├── presentation/
│   │   └── web/
│   │       └── components/
│   │           └── date-pickers/      🗂 Componentes principales
│   ├── main.ts                        🚀 Punto de entrada
├── dist/                              📦 Build de producción
├── public/                            🖼 Assets estáticos
└── index.html                         🧪 Demo de desarrollo`
```

## 🧪 Desarrollo
1. Clona el repositorio:

```bash
git clone https://github.com/pxnditxyr/pxndxs-ui.git
```

2. Instala dependencias:

```bash
npm install
```

3. Inicia servidor de desarrollo:

```bash
npm run dev
```

4. Construye para producción:
```bash
npm run build
```

## 🤝 Contribuciones
¡Tus contribuciones son bienvenidas! 🎉
Sigue estos pasos:
1. 🍴 Haz un fork del proyecto
2. 🌿 Crea una rama (`git checkout -b feature/awesome-feature`)
3. 💾 Haz commit de tus cambios (`git commit -m 'Add awesome feature'`)
4. 🚀 Haz push a la rama (`git push origin feature/awesome-feature`)
5. 🔀 Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la licencia **MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho por [**Pxndxs**](https://github.com/pxnditxyr) 🐼
¿Preguntas? ¡Ábreme un [issue](https://github.com/pxnditxyr/pxndxs-ui/issues)! 🐈
