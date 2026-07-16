import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Trophy } from 'lucide-react';
// import RaidNavigation supprimé
import { podiumsData, podiumsYear } from '@/data/podiumsData';

const resultsPdf = [
  { year: 2025, label: 'Raid long 2025', file: 'RAID-de-NOEL-LONG-2025.pdf' },
  { year: 2025, label: 'Raid court 2025', file: 'RAID-de-NOEL-2025-court.pdf' },
  { year: 2024, label: 'Raid long 2024', file: 'long2024.pdf' },
  { year: 2024, label: 'Raid court 2024', file: 'court2024.pdf' },
  { year: 2023, label: 'Raid long 2023', file: 'resultat-long-2023.pdf' },
  { year: 2023, label: 'Raid court 2023', file: 'resultat-court-2023.pdf' },
  { year: 2021, label: 'Raid long 2021', file: 'résultats-raid-long-2021.pdf' },
  { year: 2021, label: 'Raid court 2021', file: 'résultats-raid-court-2021.pdf' },
  { year: 2019, label: 'Raid 2019', file: 'Résultats-complets-RdN-2019.pdf' },
  { year: 2018, label: 'Raid 2018', file: 'résultats-raid-de-noel-2018.pdf' },
  { year: 2017, label: 'Raid 2017', file: 'Resultat_Raid_2017.pdf' },
  { year: 2016, label: 'Raid 2016', file: 'Résultat-Raid-2016.pdf' },
  { year: 2015, label: 'Raid 2015', file: 'Résultat-raid-2015.pdf' },
  { year: 2014, label: 'Raid 2014', file: 'Résultat-raid-2014.pdf' },
  { year: 2013, label: 'Raid 2013', file: 'Résultat-raid-2013.pdf' },
];

const getPdfUrl = (file) => `/resultats/${encodeURIComponent(file)}`;

const ResultsPage = () => {
  const [selected, setSelected] = useState(resultsPdf[0]);

  return (
    <>
      <Helmet>
        <title>Baragnas - RdN</title>
        <meta
          name="description"
          content="Consultez les résultats du Raid de Noël. Classements par équipe, catégorie et année."
        />
      </Helmet>

      <div className="min-h-screen bg-topo">
        {/* RaidNavigation supprimé */}

        <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 text-center page-title-river">
              Résultats
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center">
              Consultez les classements du Raid de Noël par année
            </p>
          </motion.div>

          {/* 6 podiums : Raid court (H/F/M) + Raid long (H/F/M) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-8 mb-12"
          >
            {/* Raid court – 3 podiums Homme / Femme / Mixte (données dans src/data/podiumsData.js) */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-montserrat mb-4 flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <Trophy className="w-6 h-6 text-[#2D5016]" />
                Podiums Raid court {podiumsYear}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Homme', 'Femme', 'Mixte'].map((categorie) => {
                  const data = podiumsData.court[categorie];
                  return (
                    <div
                      key={`court-${categorie}`}
                      className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-5 text-white"
                    >
                      <h3 className="text-center font-bold font-montserrat mb-4 text-lg">{categorie}</h3>
                      <div className="grid grid-cols-3 gap-2 items-end">
                        <div className="text-center order-2 md:order-1 min-w-0 px-0.5">
                          <div className="text-4xl mb-1">🥈</div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-xs sm:text-sm break-words leading-tight">{data[2].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[2].temps || ''}</p>
                          </div>
                        </div>
                        <div className="text-center order-1 md:order-2 transform md:scale-110 min-w-0 px-0.5">
                          <div className="text-5xl mb-1">🥇</div>
                          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 border-2 border-white min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-sm sm:text-base break-words leading-tight">{data[1].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[1].temps || ''}</p>
                          </div>
                        </div>
                        <div className="text-center order-3 min-w-0 px-0.5">
                          <div className="text-4xl mb-1">🥉</div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-xs sm:text-sm break-words leading-tight">{data[3].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[3].temps || ''}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Raid long – 3 podiums Homme / Femme / Mixte */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-montserrat mb-4 flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <Trophy className="w-6 h-6 text-[#2D5016]" />
                Podiums Raid long {podiumsYear}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Homme', 'Femme', 'Mixte'].map((categorie) => {
                  const data = podiumsData.long[categorie];
                  return (
                    <div
                      key={`long-${categorie}`}
                      className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl shadow-lg p-5 text-white"
                    >
                      <h3 className="text-center font-bold font-montserrat mb-4 text-lg">{categorie}</h3>
                      <div className="grid grid-cols-3 gap-2 items-end">
                        <div className="text-center order-2 md:order-1 min-w-0 px-0.5">
                          <div className="text-4xl mb-1">🥈</div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-xs sm:text-sm break-words leading-tight">{data[2].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[2].temps || ''}</p>
                          </div>
                        </div>
                        <div className="text-center order-1 md:order-2 transform md:scale-110 min-w-0 px-0.5">
                          <div className="text-5xl mb-1">🥇</div>
                          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 border-2 border-white min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-sm sm:text-base break-words leading-tight">{data[1].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[1].temps || ''}</p>
                          </div>
                        </div>
                        <div className="text-center order-3 min-w-0 px-0.5">
                          <div className="text-4xl mb-1">🥉</div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-h-[3.5rem] flex flex-col justify-center min-w-0">
                            <p className="font-bold text-xs sm:text-sm break-words leading-tight">{data[3].equipe || '—'}</p>
                            <p className="text-xs opacity-90">{data[3].temps || ''}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Liste des PDF */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
                <div className="bg-[#2D5016] text-white px-6 py-4 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  <h2 className="text-xl font-bold font-montserrat">Résultats par année</h2>
                </div>
                <div className="max-h-[70vh] overflow-y-auto divide-y divide-gray-100">
                  {resultsPdf.map((item) => (
                    <button
                      key={`${item.year}-${item.label}`}
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`w-full text-left px-6 py-4 transition-colors flex items-center justify-between gap-2 ${
                        selected?.file === item.file
                          ? 'bg-[#2D5016]/10 text-[#2D5016] font-semibold'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="truncate">{item.label}</span>
                      <Download className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Zone d'affichage PDF / image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[80vh] min-h-[500px]">
                <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 font-montserrat truncate">
                    {selected?.label}
                  </h3>
                  <a
                    href={selected ? getPdfUrl(selected.file) : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2D5016] hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ouvrir dans un nouvel onglet
                  </a>
                </div>
                <div className="flex-1 min-h-0 bg-gray-100 overflow-auto">
                  {selected && (
                    <iframe
                      key={selected.file}
                      src={getPdfUrl(selected.file)}
                      title={selected.label}
                      className="w-full h-full min-h-[500px] border-0"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
