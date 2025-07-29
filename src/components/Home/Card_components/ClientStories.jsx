import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModalPortal from '../../../lib/ImageModalPortal';
import policy1 from '../../../assets/privacyPolicy/quality-privacy.jpg';
import policy2 from '../../../assets/privacyPolicy/Health.jpg';
import policy3 from '../../../assets/privacyPolicy/codeofethics.jpg';

// Import PDF versions for better quality viewing
import policy1Pdf from '../../../assets/privacyPolicy/QualityPolicy.pdf';
import policy2Pdf from '../../../assets/privacyPolicy/Health.pdf';
import policy3Pdf from '../../../assets/privacyPolicy/codeofethics.pdf';

const images = [policy1, policy2, policy3];
const pdfs = [policy1Pdf, policy2Pdf, policy3Pdf];

function ClientStories() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (!selectedImage) return;

    const handleScroll = () => {
      setSelectedImage(null);
      setZoomLevel(1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedImage]);



  return (
    <div>
      <section className="px-4 sm:px-6 pt-28 pb-12 bg-white font-questrial rounded-t-[3rem] h-fit mb-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
              Our Policies
            </h2>
            <p className="text-green-600 text-lg sm:text-xl">
              Click a policy image to view it in full screen.
            </p>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:flex md:justify-end md:gap-2">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Policy ${index + 1}`}
                className="w-full h-auto md:w-[14rem] lg:w-[18rem] cursor-pointer rounded-xl shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(pdfs[index])}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModalPortal>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-white rounded-lg shadow-xl fixed inset-0 w-screen h-screen max-w-none max-h-none overflow-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-700 z-10"
                >
                  ×
                </button>

                {/* Document */}
                <iframe
                  src={selectedImage}
                  title="Policy PDF"
                  className="w-full h-full rounded-lg border-0"
                  style={{ background: 'white' }}
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          </ImageModalPortal>
        )}
      </AnimatePresence>

    </div>
  );
}

export default ClientStories;
