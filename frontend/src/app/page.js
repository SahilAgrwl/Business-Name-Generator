"use client";

import { useState } from 'react';
import BusinessNameForm from '../components/BusinessNameForm';
import NameResult from '../components/NameResult';
import LoadingSpinner from '../components/LoadingSpinner';
import { generateNames } from '../lib/api';

export default function Home() {
  const [nameResults, setNameResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateNames = async (formData) => {
    try {
      setLoading(true);
      setError('');
      
      const results = await generateNames(formData);
      setNameResults(results);
    } catch (err) {
      console.error('Error generating names:', err);
      setError('Failed to generate names. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Create Your Perfect Business Name</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about your business and let our AI generate unique and memorable names tailored to your vision.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="bg-primary-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold ml-3 text-gray-800">Define Your Brand</h2>
        </div>
        <BusinessNameForm onSubmit={handleGenerateNames} />
      </section>

      {loading && (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-5 rounded-lg border border-red-100 shadow-sm">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {nameResults.length > 0 && (
        <section className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold ml-3 text-gray-800">Your Name Ideas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nameResults.map((name, index) => (
              <NameResult key={index} name={name} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}