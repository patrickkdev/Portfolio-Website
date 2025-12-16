import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <h3 className="text-4xl font-bold">{children}</h3>
    </div>
  );
};

export default SectionTitle;
