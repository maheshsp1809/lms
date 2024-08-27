import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4 fixed">
      <h2 className="text-2xl font-bold mb-8">Sidebar</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-lg hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-lg hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
