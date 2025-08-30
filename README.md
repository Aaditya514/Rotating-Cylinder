# 🎴 Rotating Cylinder  

A **React + Three.js** project that displays a **rotating 3D cylinder** with a custom texture, glowing effects, and smooth controls. Built with **React Three Fiber**, **TailwindCSS**, and **postprocessing** for cinematic visuals.  

---

## ✨ Features
- 🌀 **Rotating Cylinder** — continuously spins with smooth animation.  
- 🎨 **Custom Texture Mapping** — wrap any image (`image.png`) around the cylinder.  
- 🌟 **Bloom & Tone Mapping** — glowing anime-style visual effects.  
- 🎮 **Orbit Controls** — drag to rotate the camera around the scene.  
- ⚡ **Vite + Tailwind** — fast development and modern styling.  

---

## 🚀 Demo
When you run the project, you’ll see:
- A 3D glowing rotating cylinder with your image.  
- A neon-styled banner text: **“Strongest Anime Characters.”**  

---

## 📂 Project Structure
```
Rotating-Cylinder/
├── public/
│   └── image.png           # Texture applied to the cylinder
├── src/
│   ├── App.jsx             # Main app with Canvas, effects, and title
│   ├── Scene.jsx           # Cylinder geometry, material, and animation
│   └── style.css           # Custom styles
├── index.html              # Root HTML file
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind setup
├── vite.config.js          # Vite setup
```

---

## 🛠️ Installation & Setup
Make sure you have **Node.js (>=16)** installed.  

```bash
# Clone the repository
git clone https://github.com/Aaditya514/Rotating-Cylinder.git

# Navigate into the project
cd Rotating-Cylinder

# Install dependencies
npm install

# Run in development mode
npm run dev
```

Then open **http://localhost:5173/** in your browser.  

---

## 🖼️ Customization
- Replace `public/image.png` with any image you want to wrap around the cylinder.  
- Edit `src/Scene.jsx` to adjust cylinder dimensions or rotation speed. Example:
  ```jsx
  cyl.current.rotation.y += delta * 0.5; // slower rotation
  ```
- Update `App.jsx` to change glow intensity:
  ```jsx
  <Bloom intensity={3.0} luminanceThreshold={0.3} />
  ```

---

## 📦 Dependencies
- [React](https://reactjs.org/)  
- [Three.js](https://threejs.org/)  
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)  
- [drei](https://github.com/pmndrs/drei)  
- [Postprocessing](https://github.com/pmndrs/react-postprocessing)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Vite](https://vitejs.dev/)  

---

## 🌟 Future Ideas
- Add multiple rotating cylinders (carousel style).  
- Allow clicking cylinder faces to reveal info about characters.  
- Add dynamic image loading (e.g., from an API).  
- Improve lighting with spotlights or HDRI environments.  

---

## 📜 License
MIT License — feel free to use and modify this project!  
