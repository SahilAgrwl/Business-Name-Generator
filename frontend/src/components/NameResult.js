const NameResult = ({ name }) => {
    const { businessName, description, rating } = name;
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-primary-700 group-hover:text-primary-600 transition-colors">{businessName}</h3>
          <div className="bg-primary-50 text-primary-700 text-xs font-bold rounded-full px-2 py-1">
            {rating}/5
          </div>
        </div>
        
        <div className="mt-3 text-gray-600 text-sm">
          {description}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300'
                } transition-colors`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
          
          <button
            className="flex items-center text-primary-600 hover:text-primary-800 text-sm font-medium bg-primary-50 hover:bg-primary-100 rounded-full px-3 py-1 transition-colors"
            onClick={() => {
              navigator.clipboard.writeText(businessName);
              alert(`"${businessName}" copied to clipboard!`);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            Copy
          </button>
        </div>
      </div>
    );
  };
  
  export default NameResult;