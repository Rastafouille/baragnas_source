import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';
// import RaidNavigation supprimé

const PhotosPage = () => {
  // Configuration des albums Flickr
  const albums = {
    '2023': {
      url: 'https://www.flickr.com/photos/144152995@N02/albums/72177720313452815',
      title: 'Raid de Noel 2023',
      thumbnail: 'https://live.staticflickr.com/65535/53405738390_d165840c11_b.jpg',
      type: 'flickr'
    },
    '2019': {
      url: 'https://www.flickr.com/photos/144152995@N02/albums/72157712227876087',
      title: 'Raid de Noel 2019',
      thumbnail: 'https://live.staticflickr.com/65535/49227731641_1f139388e0_h.jpg',
      type: 'flickr'
    },
    '2018': {
      url: 'https://www.flickr.com/photos/144152995@N02/albums/72157704757266494',
      title: 'Raid de Noël 2018',
      thumbnail: 'https://live.staticflickr.com/4805/31425231947_5bf560ba80_h.jpg',
      type: 'flickr'
    },
    '2017': {
      url: 'https://www.flickr.com/photos/204140943@N03/albums/72177720331677920',
      title: 'Raid de Noël 2017',
      thumbnail: 'https://live.staticflickr.com/65535/55063911573_56b39d4d1e_h.jpg',
      type: 'flickr'
    },
    '2015': {
      url: 'https://www.flickr.com/photos/204140943@N03/albums/72177720331682872',
      title: 'Raid de Noel 2015',
      thumbnail: 'https://live.staticflickr.com/65535/55064082680_9ccf0e1ffb_h.jpg',
      type: 'flickr'
    }
  };

  return (
    <>
      <Helmet>
      <title>Baragnas - RdN</title>
      <meta
          name="description"
          content="Revivez les meilleurs moments du Raid de Noël à travers notre galerie photos."
        />
      </Helmet>

      <div className="min-h-screen bg-topo">
        {/* RaidNavigation supprimé */}
        
        <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-4"
          >
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center page-title-river">
                Galerie Photos
              </h1>
            </div>
            <p className="text-sm md:text-lg text-gray-600 text-center">
              Les meilleurs moments capturés lors de nos raids
            </p>
          </motion.div>

          {/* Videos Section */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              <a href="/raid-noel/photos/video-2019" className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://img.youtube.com/vi/fkudkmnnOLw/hqdefault.jpg" alt="Vidéo 2019" className="w-full h-32 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-sm md:text-xl text-white font-bold">Vidéo 2019</h3>
                  </div>
                </div>
              </a>

              <a href="/raid-noel/photos/video-2021" className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://img.youtube.com/vi/nCYx1FHRNps/hqdefault.jpg" alt="Vidéo 2021" className="w-full h-32 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-sm md:text-xl text-white font-bold">Vidéo 2021</h3>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Flickr Albums Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(albums).map(([year, album]) => (
              <motion.a
                key={year}
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                  <img
                    src={album.thumbnail}
                    alt={album.title}
                    className="w-full h-32 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                      <h3 className="text-xs md:text-2xl font-bold text-white mb-1 md:mb-2">{album.title}</h3>
                    <div className="flex items-center gap-2 text-white">
                      <span>Voir l'album</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PhotosPage;