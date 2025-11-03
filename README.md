# Portfolio Jhon Gonzalez 💻🚀

Portfolio profesional de **Jhon Gonzalez** - Full Stack Developer & AI Specialist

## 🌐 [Live Demo](https://jhongo22.github.io/portafolio) | [Repository](https://github.com/jhongo22/portafolio)

---

## ✨ Características

### 🎨 Diseño Profesional
- **Tema Oscuro Elegante**: Fondo negro con tarjetas grises y acentos azules
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **Sidebar Fijo**: Navegación profesional con scroll elegante
- **Animaciones Suaves**: Transiciones y efectos hover modernos
- **Gradientes Modernos**: Gradientes azul-cyan en elementos clave

### 🚀 Tecnología
- **Next.js 16** con App Router
- **React 19** con TypeScript
- **Tailwind CSS v3** para estilos
- **shadcn/ui** component library
- **Lucide React** icons
- **SEO Optimizado** con metadata completa

### 📱 Secciones del Portfolio
1. **Inicio** - Hero section con avatar y CTAs
2. **Agentes IA** - Proyectos de inteligencia artificial
3. **Scripts** - Automatización y código
4. **Páginas Web** - Desarrollo web completo
5. **APIs** - Integraciones y backend
6. **Automatizaciones** - Procesos automáticos
7. **Proyectos** - Portfolio completo

---

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jhongo22/portafolio.git

# Navegar al proyecto
cd portafolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── app/                    # Páginas del portfolio
│   │   ├── agentes/           # Agentes IA
│   │   ├── apis/              # APIs
│   │   ├── automatizaciones/  # Automatizaciones
│   │   ├── paginas/           # Páginas Web
│   │   ├── proyectos/         # Todos los proyectos
│   │   ├── scripts/           # Scripts
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   └── globals.css        # Estilos globales
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes shadcn/ui
│   │   ├── hero-section.tsx  # Hero section
│   │   ├── sidebar.tsx       # Navegación lateral
│   │   └── ...              # Otros componentes
│   └── lib/
│       └── utils.ts          # Utilidades
├── public/                   # Assets estáticos
├── components.json           # Configuración shadcn/ui
├── tailwind.config.ts        # Configuración Tailwind
├── tsconfig.json            # Configuración TypeScript
└── package.json             # Dependencias
```

---

## 🎨 Personalización

### 🎨 Colores del Tema
El tema se define en `src/app/globals.css` con variables CSS:

```css
:root {
  --primary: 217 91% 60%;     /* Azul primario */
  --card: 0 0% 8%;           /* Gris para tarjetas */
  --background: 0 0% 0%;     /* Negro */
  --foreground: 0 0% 98%;    /* Blanco */
}
```

### 👤 Perfil
Actualiza tu información en `src/components/sidebar.tsx`:
- Nombre y email
- Enlaces sociales
- Avatar (reemplaza `/avatars/jhon.png`)

### 📂 Proyectos
Modifica los proyectos en cada página `src/app/[categoria]/page.tsx`:
- Títulos y descripciones
- Tecnologías utilizadas
- URLs de demostración
- Estados de desarrollo

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages
```bash
# Configurar en package.json
{
  "homepage": "https://username.github.io/repository"
}

# Build
npm run build

# Deploy a la carpeta dist
```

---

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móvil**: ≥ 320px (320px - 767px)
- **Tablet**: ≥ 768px (768px - 1023px)
- **Desktop**: ≥ 1024px (1024px+)

### Features Responsivas
- **Mobile-first approach**
- **Touch-friendly navigation**
- **Optimizado para pantallas táctiles**
- **Lazy loading para imágenes**
- **Performance optimizada**

---

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Jhon Gonzalez**
*Full Stack Developer & AI Specialist*

- 📧 [Email](mailto:contacto@jhon.dev)
- 💼 [LinkedIn](https://linkedin.com/in/jhongo22)
- 🐙 [GitHub](https://github.com/jhongo22)
- 🌐 [Portfolio](https://jhongo22.github.io/portafolio)

---

## ⭐ Créditos

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **TypeScript**: [TypeScript](https://www.typescriptlang.org/)

---

<div align="center">

**Hecho con ❤️ por Jhon Gonzalez**

[![GitHub followers](https://img.shields.io/github/followers/jhongo22?style=social)](https://github.com/jhongo22)
[![GitHub stars](https://img.shields.io/github/stars/jhongo22/portafolio?style=social)](https://github.com/jhongo22/portafolio)

</div>