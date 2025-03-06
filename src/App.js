import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import wolfLogo from './assets/wolf-logo.png'; // 👈 استيراد اللوجو الجديد

function App() {
  return (
    <div className="relative bg-gray-900 min-h-screen text-white overflow-hidden">
      {/* لوجو خلفية خافت وناعم */}
      <img
  src={wolfLogo}
  alt="Wolf Logo Background"
  className="absolute opacity-20 blur-sm w-3/4 sm:w-1/2 lg:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
/>


      <Navbar />
      <main className="relative p-8 flex justify-center">
  <div className="bg-black/50 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-2xl text-center">
    <h1 className="text-4xl font-bold mt-4">Hi, I'm Karim 👋</h1>
    <p className="mt-4 text-lg">
      Front-end Developer & Designer | HTML, CSS, JS, Flutter, Python
    </p>
    <p className="mt-2 text-md text-gray-300">
      Computer Science Student at Zagazig University 🎓
    </p>
  </div>
</main>


      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
