import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Users, Euro, AlertCircle } from 'lucide-react';
// import RaidNavigation supprimé

const InscriptionPage = () => {


  return (
    <>
      <Helmet>
        <title>Baragnas - RdN</title>
        <meta
          name="description"
          content="Inscrivez votre équipe au Raid de Noël. Tarifs, modalités et accès au formulaire d'inscription."
        />
      </Helmet>

      <div className="min-h-screen bg-topo">
        {/* RaidNavigation supprimé */}
        
        <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center page-title-river">
              Inscription
            </h1>
            <p className="text-sm md:text-lg text-gray-600 text-center">
              Préparez votre équipe pour l'aventure !
            </p>
          </motion.div>

          {/* Event Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-[#2D5016] to-green-800 rounded-xl shadow-lg p-8 mb-8 text-white"
          >
            <h2 className="text-xl md:text-2xl text-center font-bold mb-6 font-montserrat">Aperçu de l'événement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Calendar className="w-5 md:w-6 h-5 md:h-6 mr-3 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-semibold">Date</p>
                  <p className="text-xs md:text-sm">Samedi 5 décembre 2026</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 md:w-6 h-5 md:h-6 mr-3 mt-1" />
                <div>
                  <p className="text-sm md:text-base font-semibold">Équipes</p>
                  <p className="text-xs md:text-sm">2 participants par équipe</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
              <div className="text-center mb-8">
              <Euro className="w-12 h-12 text-[#2D5016] mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-montserrat">Tarifs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-[#2D5016]/30 rounded-xl p-6 text-center bg-gray-50/50">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-2">Raid court</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4">~2h30 de course</p>
                <div className="text-xl md:text-3xl font-bold text-[#2D5016] mb-1">20€</div>
                <p className="text-gray-600 text-sm">par personne</p>
              </div>
              <div className="border-2 border-[#2D5016]/30 rounded-xl p-6 text-center bg-gray-50/50">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-2">Raid long</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-4">~5h de course</p>
                <div className="text-xl md:text-3xl font-bold text-[#2D5016] mb-1">30€</div>
                <p className="text-gray-600 text-xs md:text-sm">par personne</p>
              </div>
            </div>
          </motion.div>

          {/* Registration Options */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl shadow-lg p-8 mb-12"
          >
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
               <h3 className="text-sm md:text-xl font-bold text-yellow-900 font-montserrat">Date limite d'inscription - 1er décembre 2026</h3>
            </div>
             <ul className="space-y-2 text-xs md:text-base text-gray-700">
              <li>Places limitées !</li>
              <li>Pas d'inscription sur place</li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center bg-gray-300 text-gray-700 font-bold py-3 px-6 md:py-5 md:px-12 rounded-lg text-sm md:text-xl shadow-lg cursor-not-allowed" aria-disabled="true">
              <span>Inscriptions pas encore ouvertes</span>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mt-4">
              Le formulaire d'inscription sera mis en ligne prochainement.
            </p>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 bg-gray-100 rounded-xl p-6 text-center"
          >
            <p className="text-xs md:text-base text-gray-700">
              Des questions sur l'inscription ? Contactez-nous à{' '}
              <a
                href="mailto:baragnasraidteam@yahoo.fr"
                className="text-[#2D5016] font-semibold hover:underline text-xs md:text-base"
              >
                baragnasraidteam@yahoo.fr
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InscriptionPage;