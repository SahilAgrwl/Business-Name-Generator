import { useState } from 'react';

const BusinessNameForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    industry: '',
    keywords: '',
    style: 'modern', // default style
    nameLength: 'medium', // default length
    count: 5, // default number of results
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="industry" className="block font-medium text-gray-700">
            Industry
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="e.g. Technology, Food, Fashion"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="keywords" className="block font-medium text-gray-700">
            Keywords
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="e.g. innovative, sustainable, premium"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-1">
          <label htmlFor="style" className="block font-medium text-gray-700">
            Naming Style
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <select
              id="style"
              name="style"
              value={formData.style}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 appearance-none bg-none transition-colors"
            >
              <option value="modern">Modern</option>
              <option value="classic">Classic</option>
              <option value="playful">Playful</option>
              <option value="technical">Technical</option>
              <option value="abstract">Abstract</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="nameLength" className="block font-medium text-gray-700">
            Name Length
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
            </div>
            <select
              id="nameLength"
              name="nameLength"
              value={formData.nameLength}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 appearance-none bg-none transition-colors"
            >
              <option value="short">Short (1-2 words)</option>
              <option value="medium">Medium (2-3 words)</option>
              <option value="long">Long (3+ words)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="count" className="block font-medium text-gray-700">
            Number of Names
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <select
              id="count"
              name="count"
              value={formData.count}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 appearance-none bg-none transition-colors"
            >
              {[3, 5, 10, 15].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Generate Business Names
        </button>
      </div>
    </form>
  );
};

export default BusinessNameForm;