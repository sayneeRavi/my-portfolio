const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Athmi.dev</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:underline cursor-pointer">About</a></li>
        <li><a href="#education" className="hover:underline cursor-pointer">Education</a></li>
        <li><a href="#projects" className="hover:underline cursor-pointer">Projects</a></li>
        <li><a href="#contact" className="hover:underline cursor-pointer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
