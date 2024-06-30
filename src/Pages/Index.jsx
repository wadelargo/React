import Card from "../Components/Card"
import Sidebar from "../Components/Sidebar"

function Index() {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar />
      </div>
      <div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Main Content</h1>
          <div className="grid grid-cols-8 gap-4">
            <div className="border border-gray-100 p-2">
              <Card name="John Meward" age="24" address="Buenos Aires" status="single" />
            </div>
            <div className="border border-gray-100 p-2">
              <Card name="Juanita" age="57" address="Buenos Aires" status="single" />
            </div>
            <div className="border border-gray-100 p-2">
              <Card name="Apolinario" age="60" address="Buenos Aires" status="single" />
            </div>
            <div className="border border-gray-100 p-2">
              <Card name="Jane april" age="32" address="Buenos Aires" status="single" />
            </div>
            <div className="border border-gray-100 p-2">
              <Card name="John Menard" age="30" address="Buenos Aires" status="single" />
            </div>
            <div className="border border-gray-100 p-2">
              <Card name="Baste And Jacket" age="11 and 4" address="Buenos Aires" status="single" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
