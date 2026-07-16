import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// import RaidNavigation supprimé
import { ArrowRight, Clock, Users, MapPin, Calendar, Euro, Trophy, AlertCircle, Thermometer, Backpack, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import rdnImage from '@/assets/images/rdn_fond.jpg';


const ChristmasRaidPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  

  const checklist = [
    '1 casque VTT en bon état et aux normes CE (obligatoire)',
    '1 VTT en bon état',
    '1 frontale',
    '1 feu arrière VTT rouge',
    '1 L d\'eau minimum',
    'Vivres de course',
    '1 sifflet par équipe',
    '1 couverture de survie par équipe',
    '1 téléphone portable chargé',
    '1 puce électronique (fournie contre chèque de caution de 50€)',
    'Boussole (recommandée)',
    'Porte carte VTT et étanche (recommandé)',
    'Coupe-vent (recommandé)',
    'Gants (recommandé)',
  ];

  const faqs = [
    {
      question: 'Puis-je participer seul(e) ?',
      answer: 'Non, le raid se déroule obligatoirement en équipe de 2 personnes. Cependant, nous pouvons vous mettre en relation avec d\'autres participants cherchant une équipe.',
    },
    {
      question: 'Quel est le niveau requis ?',
      answer: 'Le raid est accessible au plus grand nombre. Il s\'agit d\'un raid au score où vous choisissez les balises à faire selon votre niveau. Pour le raid court, prévoyez environ 2h30 d\'effort. Pour le raid long, environ 5h.',
    },
    {
      question: 'Y a-t-il des ravitaillements ?',
      answer: 'Les épreuves sont en autonomie totale. Un grand ravitaillement est fourni lors de l\'arrivée. Prévoyez votre propre ravitaillement pour la course.',
    },
    {
      question: 'Que se passe-t-il en cas de mauvais temps ?',
      answer: 'Si le Comité d\'Organisation juge que les conditions climatiques sont trop défavorables, il procédera aux modifications nécessaires du parcours, à l\'arrêt ou au besoin à son annulation.',
    },
    {
      question: 'Puis-je annuler mon inscription ?',
      answer: 'En cas de forfait d\'une équipe, celle-ci doit avertir l\'organisation au plus tard 15 jours avant l\'épreuve. Après ce délai, aucun remboursement pour annulation ne sera accepté quel que soit le motif invoqué.',
    },
    {
      question: 'Puis-je utiliser un VTT à assistance électrique ?',
      answer: 'Les VAE sont autorisés à participer à la course mais doivent le signaler lors de l\'inscription à l\'organisation. Les équipes utilisant 1 ou 2 VAE durant le raid seront hors classement.',
    },
  ];

  return (
    <>
      <Helmet>
      <title>Baragnas - RdN</title>
      <meta
          name="description"
          content="Participez au Raid de Noël organisé par Baragnas. Une aventure unique en pleine nature."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" style={{ marginTop: '60px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${rdnImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 
              className="text-4xl md:text-6xl lg:text-7xl text-white mb-2 logo-titre-style"
            style={{
              fontFamily: "'River Adventurer', 'Montserrat', sans-serif",
              fontWeight: 'normal',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '3px 3px 0px rgba(0, 0, 0, 0.4), 1px 1px 0px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            Raid de Noël 2026
          </h1>
            <p className="text-sm md:text-lg text-white/90 mb-1 font-poppins flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 md:w-6 md:h-6" />
            Samedi 5 décembre 2026
          </p>
            <p className="text-sm md:text-lg text-white/80 font-poppins flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            Saint-Etienne-des-Sorts, Gard (30)
          </p>

        </motion.div>
      </section>

      {/* Sub Navigation supprimé */}

      {/* Intro Section */}
      <section className="py-16 px-4 bg-topo">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#2D5016] font-montserrat">
              De retour en 2026 !
            </h2>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4 max-w-4xl mx-auto">
              La commune de Saint-Etienne-des-Sorts nous accueille une nouvelle fois pour ce raid qui s'annonce ludique et accessible au plus grand nombre.
            </p>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Venez pédaler, courir et orienter avec votre coéquipier(e) préféré(e). Dans un cadre unique, partez pour une aventure d'environ 2h30 ou 5h en autonomie et en orientation !
            </p>
          </motion.div>

          {/* Formats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
              <div className="bg-gradient-to-br from-[#2D5016] to-green-800 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 mr-3" />
                <h3 className="text-xl md:text-2xl font-bold font-montserrat">Raid Court</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-sm md:text-base"><strong>Horaires :</strong> 13h à 15h30</p>
                <p className="text-sm md:text-base"><strong>Tarif :</strong> 40€ / équipe</p>
                <p className="text-sm md:text-base"><strong>Places :</strong> 75 équipes de 2 max</p>
                <p className="text-sm md:text-base"><strong>Distance :</strong> ~10km à pieds + ~20km à VTT</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-[#2D5016] rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 mr-3" />
                <h3 className="text-xl md:text-2xl font-bold font-montserrat">Raid Long</h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-sm md:text-base"><strong>Horaires :</strong> 12h à 17h</p>
                <p className="text-sm md:text-base"><strong>Tarif :</strong> 60€ / équipe</p>
                <p className="text-sm md:text-base"><strong>Places :</strong> 75 équipes de 2 max</p>
                <p className="text-sm md:text-base"><strong>Distance :</strong> ~15km à pieds + 30-40km à VTT</p>
              </div>
            </div>
          </motion.div>

          {/* Principe du raid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-50 rounded-xl shadow-lg p-8 mb-12"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 font-montserrat">Principe du raid</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Il s'agit d'un raid au <strong>« SCORE »</strong> en équipe de 2. Le but est de ramasser un max de balises dans un temps limité (2h30 pour le court et 5h pour le long). 
              Chaque balise manquante entraînera une pénalité en temps sur votre chrono, à vous de choisir les balises que vous voulez faire en fonction de votre niveau, 
              sa pénalité, sa difficulté, le temps qu'il vous reste…
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              <strong>Pour les sections comment ça se passe ?</strong> Vous aurez une carte principale regroupant toutes les balises VTT et les départs des courses à pieds 
              en orientation (2 pour le court et 3 pour le long), toutes les cartes seront distribuées dès le début de la course pour vous permettre de définir votre stratégie de course. 
              À vous de choisir dans quel ordre vous faites les balises VTT et les sections à pieds.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              <strong>À savoir :</strong> Le raid sera fait pour que personne (ou très peu) ne boucle le parcours complet, il va falloir faire des choix ! À vous de faire les bons !
            </p>
          </motion.div>

          {/* Programme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-[#2D5016] text-white rounded-xl shadow-lg p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 mr-3" />
              <h3 className="text-xl md:text-2xl font-bold font-montserrat">Programme : Samedi 5 Décembre 2026</h3>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <p><strong>10:30</strong> – Accueil des participants, retrait des dossards</p>
              <p><strong>11:30</strong> – Fin retrait des dossards raid long</p>
              <p><strong>11:50</strong> – Briefing raid long</p>
              <p><strong>12:00</strong> – Départ du raid long</p>
              <p><strong>12:30</strong> – Fin retrait des dossards raid court</p>
              <p><strong>12:50</strong> – Briefing raid court</p>
              <p><strong>13:00</strong> – Départ raid court</p>
              <p><strong>15:30</strong> – Porte horaire arrivée raid court</p>
              <p><strong>16:15</strong> – Remise des prix raid court</p>
              <p><strong>17:00</strong> – Porte horaire arrivée raid long</p>
              <p><strong>18:00</strong> – Remise des prix raid long</p>
            </div>
          </motion.div>

          {/* Informations importantes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl shadow-lg p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center mb-4 gap-2 text-center md:text-left">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="text-lg md:text-xl font-bold text-yellow-900 font-montserrat">Le jour de la course</h3>
            </div>
            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li>• Pensez à préparer un chèque de caution de 50€ à l'ordre de Baragnas Raid Team pour le prêt de la puce SportIdent, si vous n'en avez pas, sinon pensez à donner votre numéro de puce lors de l'inscription.</li>
              <li>• N'oubliez pas votre certificat médical ou licence FFtri</li>
              <li>• Pour éviter de faire trop de déchets inutilement lors de la collation à l'arrivée, nous vous invitons à venir avec de quoi manger un peu de soupe, charcuterie, fromage et boire un canon.</li>
            </ul>
          </motion.div>

          {/* Checklist matériel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-[#2D5016] rounded-xl shadow-lg p-6 mb-12 text-white"
          >
            <div className="flex flex-col md:flex-row items-center mb-6 gap-2 text-center md:text-left">
              <Backpack className="w-8 h-8 text-white" />
              <h3 className="text-xl md:text-2xl font-bold font-montserrat">Liste de matériels à prévoir</h3>
            </div>

            <div className="space-y-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-white mr-2 mt-1">✓</span>
                  <span className="text-sm md:text-base text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Informations pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-12"
          >
            

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-montserrat flex items-center">
                <MapPin className="w-6 h-6 text-[#2D5016] mr-3" />
                Localisation
              </h3>
              <p className="text-gray-700 mb-4">
                Salle communale de Saint-Etienne-des-Sorts, Gard (30)
              </p>
              <div className="w-full h-56 md:h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Saint-Etienne-des-Sorts,+centre,+socioculturel,+Gard,+France&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Saint-Etienne-des-Sorts"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

         



          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 font-montserrat border-l-4 border-[#2D5016] pl-4">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-left">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#2D5016]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#2D5016]" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-sm md:text-base text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

         
        </div>
      </section>
    </>
  );
};

export default ChristmasRaidPage;