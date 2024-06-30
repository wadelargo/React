function Sidebar() {
    return (
      <div className="flex h-full">
        <div className="bg-gray-500 text-white w-64">
          <div className="flex flex-col h-full">
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4 m-5 text-center">Sidebar</h2>
              <ul>
                <li className="mb-4 p-2">
                  <a href="#" className="home">
                    Home
                  </a>
                </li>
                <li className="mb-4 p-2">
                  <a href="#" className="feedback">
                    Feedback
                  </a>
                </li>
                <li className="mb-4 p-2">
                  <a href="#" className="about">
                    About
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="flex-grow"></div>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default Sidebar;