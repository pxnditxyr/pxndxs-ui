<h1 align="center">🐈 Pxndxs UI 🐼</h1>

<p align="center">
  <strong>Un experimento temprano de Web Components en TypeScript.</strong><br />
  <a href="./README.md">Read in English</a>
</p>

<p align="center">
  <img alt="Versión" src="https://img.shields.io/badge/versi%C3%B3n-0.1.0-blueviolet?style=for-the-badge" />
  <img alt="Estado" src="https://img.shields.io/badge/estado-experimento_temprano-yellow?style=for-the-badge" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Licencia" src="https://img.shields.io/badge/licencia-MIT-success?style=for-the-badge" />
</p>

---

## ✨ ¿Qué es esto?

Pxndxs UI es un pequeño laboratorio para construir componentes de interfaz sin frameworks, con las APIs nativas de [Custom Elements](https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_custom_elements) y [Shadow DOM](https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_shadow_DOM).

Hoy incluye **un componente**, `<date-picker>`. No tiene dependencias en tiempo de ejecución.

## 📅 `<date-picker>`

Un custom element que renderiza un `<input type="date">` nativo dentro de un Shadow DOM, con un `aria-label` para que los lectores de pantalla lo anuncien.

```html
<date-picker id="cumple"></date-picker>
```

| Atributo | Qué hace |
| --- | --- |
| `id` | Se reenvía al input interno como `date-picker-<id>` |

Esa es toda la superficie pública por ahora.

## 🗺️ Hoja de ruta

Ideas, no promesas:

- [ ] Leer y asignar el valor, y emitir un evento `change`
- [ ] Temas mediante propiedades CSS personalizadas
- [ ] Un calendario propio en lugar del input nativo
- [ ] Pruebas
- [ ] Publicar en npm

## 🧪 Probarlo en local

```bash
git clone https://github.com/pxnditxyr/pxndxs-ui.git
cd pxndxs-ui
npm install
npm run dev
```

`index.html` y `src/main.ts` son la página de demostración. `npm run build` ejecuta `tsc` y `vite build`.

## 🗂️ Estructura del proyecto

```text
src/
├── presentation/web/components/date-pickers/   El elemento <date-picker>
├── index.ts                                    Exportaciones públicas
├── main.ts                                     Punto de entrada de la demo
└── style.css                                   Estilos de la demo
index.html                                      Página de demo
```

## 📄 Licencia

MIT. Mira [LICENSE](./LICENSE).

---

Hecho por [**Pxndxs**](https://github.com/pxnditxyr) 🐼
