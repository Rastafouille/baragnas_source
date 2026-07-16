import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mountain, Users, Heart, Trophy, Mail, MapPin, Facebook, Instagram, ArrowRight, FileText, Calendar, Camera, Trophy as TrophyIcon, ExternalLink, Activity } from 'lucide-react';
import logoTitre from '@/assets/images/logo-titre.png';
import ventouxImage from '@/assets/images/ventoux.png';
import cimalpLogo from '@/assets/images/partenaire/Cimalp.webp';
import fftriLogo from '@/assets/images/partenaire/fftri.webp';
import inverseLogo from '@/assets/images/partenaire/Inverse.webp';
import comedienneLogo from '@/assets/images/partenaire/la-comedienne.webp';
import saintEtienneLogo from '@/assets/images/partenaire/LOGO-SAINT-ETIENNE-DES-SORTS.webp';
import mielLogo from '@/assets/images/partenaire/LogoMielDuJonquier.webp';

const HomePage = () => {
  const values = [
    {
      icon: Mountain,
      title: 'Aventure',
      description: 'Repousser ses limites et explorer de nouveaux horizons en pleine nature.',
    },
    {
      icon: Users,
      title: 'Esprit d\'équipe',
      description: 'La force du collectif et la solidarité pour surmonter tous les défis.',
    },
    {
      icon: Heart,
      title: 'Passion Nature',
      description: 'Le respect et l\'amour de l\'environnement au cœur de nos activités.',
    },
    {
      icon: Trophy,
      title: 'Challenge',
      description: 'Se dépasser physiquement et mentalement pour atteindre ses objectifs.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Baragnas</title>
        <meta
          name="description"
          content="Baragnas est une association dédiée aux raids aventure en pleine nature. Rejoignez-nous pour vivre des expériences inoubliables."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ventouxImage})`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
          style={{ position: 'absolute', bottom: '20%', left: '0%', width: '100%' }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={logoTitre}
            alt="Baragnas Raid Team"
            className="w-full max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] h-auto mx-auto"
            style={{ 
              filter: 'brightness(0) invert(1)',
              WebkitFilter: 'brightness(0) invert(1)',
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
{/*            <a
              href="/raid-noel"
              className="inline-block bg-[#2D5016] hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Raid de Noël
            </a>*/}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-16 px-4 bg-topo">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-4 md:mb-8 text-gray-900 font-montserrat">
              À propos de nous
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                « Baragnas Raid Team » est une association de loi 1901 de raid aventures, trail, VTT, enduro… basée dans le Gard du côté d’Avignon.
              </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
              Officielle depuis 2012, l’association est avant tout un collectif de raideurs multi-sport ayant l’envie de courir sous la même entité tout en proposant différents événements. L’équipe souhaite également promouvoir les différents sports nature et en particulier ceux pratiquer en orientation.
              </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              Sur ce site vous y découvrirez les informations de l'association ainsi que tout ce qu'il faut savoir pour participer au Raid de Noel que nous organisons depuis plus de 10 ans.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Raid de Noël Section */}
      <section className="py-6 md:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12 text-gray-900 font-montserrat">
              Raid de Noël
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <Link
                to="/raid-noel"
                className="group bg-white border-2 border-[#2D5016] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <FileText className="w-6 h-6 text-[#2D5016]" />
                    <h3 className="text-base md:text-xl font-bold text-gray-900 font-montserrat text-center md:text-left">Présentation</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2D5016] group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm md:text-base text-gray-700">Découvrez le Raid de Noël et toutes ses informations</p>
              </Link>

              <Link
                to="/raid-noel/reglement"
                className="group bg-white border-2 border-[#2D5016] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <FileText className="w-6 h-6 text-[#2D5016]" />
                    <h3 className="text-base md:text-xl font-bold text-gray-900 font-montserrat text-center md:text-left">Règlement</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2D5016] group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm md:text-base text-gray-700">Consultez le règlement complet du raid</p>
              </Link>


              <Link
                to="/raid-noel/inscription"
                className="group bg-white border-2 border-[#2D5016] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <Calendar className="w-6 h-6 text-[#2D5016]" />
                    <h3 className="text-base md:text-xl font-bold text-gray-900 font-montserrat text-center md:text-left">Inscription</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2D5016] group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm md:text-base text-gray-700">Inscrivez votre équipe au raid</p>
              </Link>

              <Link
                to="/raid-noel/resultats"
                className="group bg-white border-2 border-[#2D5016] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <TrophyIcon className="w-6 h-6 text-[#2D5016]" />
                    <h3 className="text-base md:text-xl font-bold text-gray-900 font-montserrat text-center md:text-left">Résultats</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2D5016] group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm md:text-base text-gray-700">Consultez les résultats des éditions précédentes</p>
              </Link>

              <Link
                to="/raid-noel/photos"
                className="group bg-white border-2 border-[#2D5016] rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                    <Camera className="w-6 h-6 text-[#2D5016]" />
                    <h3 className="text-base md:text-xl font-bold text-gray-900 font-montserrat text-center md:text-left">Photos</h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2D5016] group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-sm md:text-base text-gray-700">Galerie photos des raids précédents</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-6 md:py-12 px-4 adventure-gradient">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12 text-white font-montserrat"
          >
            Nos Valeurs
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <value.icon className="w-8 h-8 md:w-10 md:h-10 p-1 md:p-2 text-[#2D5016] bg-white rounded-full shadow-md mb-2" />
                <h3 className="text-base md:text-lg font-bold text-white mb-2 font-montserrat">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-6 md:py-12 px-4 bg-topo">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            {/* Common Title */}


            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 font-montserrat">
                  Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-[#2D5016] flex-shrink-0" />
                    <div>
                      <a
                        href="mailto:contact@baragnas.fr"
                        className="text-sm md:text-lg font-semibold text-gray-900 hover:text-[#2D5016] transition-colors"
                      >
                        baragnasraidteam@yahoo.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-[#2D5016] flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-lg font-semibold text-gray-900">Dans la région d'Avignon, France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 font-montserrat">
                  Réseaux sociaux
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center space-x-6"
                >
                  <a
                    href="https://www.facebook.com/BaragnasRaidTeam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] hover:bg-[#166FE5] p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                  >
                    <Facebook className="w-8 h-8 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/baragnasraidteam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FCAF45] hover:from-[#D32E4D] hover:via-[#E04F2F] hover:to-[#E89E35] p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                  >
                    <Instagram className="w-8 h-8 text-white" />
                  </a>
                  <a
                    href="https://www.strava.com/clubs/113840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FC4C02] hover:bg-orange-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                    title="Strava Club Baragnas"
                  >
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7.02 13.828h4.169"/>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-6 md:py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12 text-gray-900 font-montserrat"
          >
            Nos Partenaires
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
          >
            <motion.a
              href="https://www.cimalp.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={cimalpLogo}
                alt="Cimalp"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement Cimalp:', e)}
              />
            </motion.a>
            <motion.a
              href="https://www.fftri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={fftriLogo}
                alt="FFTRI"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement FFTRI:', e)}
              />
            </motion.a>
            <motion.a
              href="https://www.inverseteams.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={inverseLogo}
                alt="Inverse"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement Inverse:', e)}
              />
            </motion.a>
            <motion.a
              href="https://www.lacomedienne.beer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={comedienneLogo}
                alt="La Comédienne"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement La Comédienne:', e)}
              />
            </motion.a>
            <motion.a
              href="https://www.saintetiennedessorts.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={saintEtienneLogo}
                alt="Saint-Etienne-des-Sorts"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement Saint-Etienne:', e)}
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/rastafouille/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-24"
            >
              <img
                src={mielLogo}
                alt="Miel du Jonquier"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={(e) => console.error('Erreur chargement Miel:', e)}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;