function Navbar() {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <div className="text-2xl font-bold">WOLF 🐺</div>
        <ul className="flex gap-6">
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;
  