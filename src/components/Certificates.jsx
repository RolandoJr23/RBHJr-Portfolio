import React, { useState } from 'react';
import { certificates } from '../Files/Certificates'; // Assuming this path is correct
import CertificateModal from './CertificateModal';

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Recent Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white/10 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
              onClick={() => handleCertificateClick(certificate)}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
              <p className="text-white/75 text-sm">Issuer: {certificate.issuer}</p>
              <p className="text-white/75 text-sm">Issued: {certificate.issueDate}</p>
              {/* You might want to display a thumbnail here if available */}
              {certificate.image && (
                <img src={certificate.image} alt={certificate.title} className="mt-4 w-full h-32 object-cover rounded-md" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Render the modal if showModal is true and a certificate is selected */}
      {showModal && selectedCertificate && (
        <CertificateModal certificate={selectedCertificate} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Certificates;
