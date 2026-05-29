import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    // Prevent scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the modal closes
      document.body.style.overflow = '';
    };
  }, [onClose]); // Re-run effect if onClose changes, though it likely won't

  if (!certificate) {
    return null; // Don't render if no certificate is provided
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/25 backdrop-blur-md px-4 py-8"
      aria-hidden={false}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/25 bg-white/15 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/80 pointer-events-none" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center text-white transition hover:scale-105 cursor-pointer"
          aria-label="Close certificate modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-6 md:p-8 text-white">
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            {certificate.title}
          </h2>
          <p className="mt-2 text-lg text-white/75">
            Issued by: {certificate.issuer} on {certificate.issueDate}
          </p>
          {certificate.image && (
            <div className="mt-6 flex justify-center">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
          {certificate.credentialUrl && (
            <div className="mt-6 text-center">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25 hover:scale-105"
              >
                View Credential
              </a>
            </div>
          )}
          {certificate.description && (
            <p className="mt-4 text-sm leading-6 text-white/75">
              {certificate.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;