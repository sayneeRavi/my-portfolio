const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Athmi.dev</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
