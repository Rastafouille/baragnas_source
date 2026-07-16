import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Video2019 = () => {
  return (
    <>
      <Helmet>
        <title>Raid de Noël - Vidéo 2019</title>
      </Helmet>
      

      <div className="min-h-screen bg-topo">
        <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-8 md:w-12 h-8 md:h-12 text-[#2D5016] mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center page-title-river">
                Vidéo 2019
              </h1>
            </div>
            <p className="text-sm md:text-lg text-gray-600 text-center">
              Retour en images sur le Raid de Noël 2019
            </p>
          </motion.div>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fkudkmnnOLw?si=z20TTbDPbP7uMjfr"
              title="Vidéo Raid de Noël 2019"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video2019;
