
const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-float">
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden transform -rotate-6">
        <div className="bg-gray-800 h-10 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-3">
              <div className="font-bold">Security Dashboard</div>
              <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Protected</div>
            </div>
            <div className="h-2 bg-green-200 rounded-full mb-2 relative">
              <div className="absolute top-0 left-0 h-2 bg-green-500 rounded-full w-3/4"></div>
            </div>
            <div className="text-xs text-gray-500">System Health: 98%</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <div className="text-xs font-medium mb-1">Threats</div>
              <div className="text-xl font-bold text-primary-500">0</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-xs font-medium mb-1">Monitored</div>
              <div className="text-xl font-bold text-blue-500">24</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-xs font-medium mb-1">Protected</div>
              <div className="text-xl font-bold text-green-500">18</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="text-xs font-medium mb-1">Alerts</div>
              <div className="text-xl font-bold text-yellow-500">2</div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-3">
            <div className="text-xs font-medium mb-1">Recent Activity</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Firewall updated</span>
                </div>
                <span className="text-gray-500">2m ago</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>User login</span>
                </div>
                <span className="text-gray-500">10m ago</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Scan complete</span>
                </div>
                <span className="text-gray-500">1h ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
