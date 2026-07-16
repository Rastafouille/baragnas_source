import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// import RaidNavigation supprimé

const RegulationsPage = () => {
  const articles = [
    {
      number: 1,
      title: 'Organisation',
      content: [
        'Le RAID DE NOEL est organisé par l\'association sportive BARAGNAS RAID TEAM',
        'L\'organisation souscrit une assurance responsabilité civile organisateur.',
        'Les concurrents confirment être pleinement conscients des risques inhérents à la pratique des disciplines sportives en milieu naturel. Les organisateurs ne peuvent être tenus responsables pour tout accident ou dommage subi ou occasionné lors du Raid.',
        'Le Comité d\'Organisation se réserve le droit de modifier, les épreuves, les horaires ainsi que le présent règlement sans préavis. Cependant, il s\'engage à informer les coureurs inscrits de(s) éventuelle(s) modification(s) ou complément(s) de règlement, de parcours, d\'épreuve(s) et d\'horaire(s) avant le début du raid. Les modifications éventuelles seront annoncées sur le site internet : http://www.baragnas.fr/',
        'Si le Comité d\'Organisation juge que les conditions climatiques sont trop défavorables, il procédera aux modifications nécessaires du parcours, à l\'arrêt ou au besoin à son annulation.',
        'En s\'inscrivant, les concurrents renoncent à tout recours contre les organisateurs.',
        'Le départ sera donné à la salle communale de Saint-Etienne-des-Sorts. Le parc VTT sera sur place.',
        'Accueil des participants et remise des dossards à partir de 10h30. Le briefing aura lieu à 11h50 pour le raid long et 12h50 pour le raid court. Départ du raid long à 12h pour 5h de course maximum. Départ du raid court à 13h pour 2h30 de course maximum. Les podiums auront lieu également à la salle communale à 16h30 pour le raid court et 18h00 pour le raid long.',
      ],
    },
    {
      number: 2,
      title: 'Conditions de participation',
      content: [
        'Fournir une licence sportive FFtri de compétition en cours de validité ou remplir et valider le formulaire santé en ligne lors de l\'inscription pour les non licenciés FFtri.',
        'S\'acquitter des droits d\'inscription.',
        'Avoir plus de 8 ans pour le raid court (8-11 et XXS) et 18 ans pour le raid long (XS), pour les mineurs, l\'autorisation parentale est à joindre au dossier d\'inscription.',
      ],
    },
    {
      number: 3,
      title: 'Esprit de l\'épreuve',
      content: [
        'L\'équipe qui réalise le meilleur temps, en comptant les pénalités et bonus, remporte l\'épreuve.',
        'La manifestation se déroule dans le département du Gard (30).',
      ],
    },
    {
      number: 4,
      title: 'Parcours',
      content: [
        'Les parcours sont tracés en milieu naturel. La progression se fait à pied, en VTT, ou par tout autre moyen annoncé préalablement dans les consignes de course, à l\'exclusion de tout engin motorisé.',
        'Le parcours comporte un certain nombre de contrôles de passage qui doivent être passés obligatoirement en équipe, ce qui implique que les deux coéquipiers soient à portée de voix sans crier et à vue.',
        'Tout contrôle de passage « obligatoire » non passé entraînera la pénalisation de l\'équipe.',
        'L\'organisation se réserve le droit d\'arrêter la progression des équipes si le temps maximum de passage fixé par l\'organisation est dépassé (barrière horaire), ceci pour des raisons de sécurité (nuit, circulation, autorisations temporaires…) ou par décision de l\'organisation. Tout est fait cependant pour qu\'un maximum d\'équipes atteignent l\'arrivée.',
        'Les concurrents ne doivent pas emprunter les axes goudronnés non sécurisés sous peine de disqualification immédiate. Les routes interdites seront indiquées sur les cartes.',
        'Les équipes doivent se conformer à l\'itinéraire et aux moyens de progression indiqués sur les cartes.',
        'Les CP à bonus ne sont pas obligatoires, ils donnent aux participants un bonus temps comptabilisé sur le temps réel à l\'arrivée.',
        'Barrière horaire à 17h pour le raid long et 15h30 pour le raid court.',
        'Chaque équipe qui arrivera après l\'heure définie pour leur raid se verra infliger une pénalité de 5 min par minute de retard entamée (ex : 5min20s de retard implique 30 min de pénalité)',
        'Le passage dans les zones hachurées en rouge sur les cartes est interdit et entraînera la disqualification de l\'équipe.',
        'L\'organisation se réserve le droit d\'interdire le départ sur une section à un concurrent en cas de problème de santé ou de fatigue trop importante constaté par un des médecins de l\'organisation.',
        'Les épreuves sont en autonomie totale.',
        'Un grand ravitaillement est fourni lors de l\'arrivée.',
      ],
    },
    {
      number: 5,
      title: 'Les concurrents',
      content: [
        'L\'inscription des équipes se fait sur le site internet http://www.baragnas.fr/.',
        'Composition des équipes : Équipe de deux personnes Homme (2), Femme (2), Mixte(1 Femme + 1 Homme)',
        'Seules les équipes complètes sont autorisées à prendre le départ sauf décision de l\'organisation un équipier seul pourrait être associé à une autre équipe.',
        'L\'interlocuteur de l\'organisation est le capitaine, il doit donner un nom à son équipe, il est le destinataire des documents de course.',
        'Toute équipe qui n\'aura pas présenté son matériel obligatoire et qui sera en retard de plus d\'un quart d\'heure au départ, sera forfait.',
        'Tout concurrent ayant abandonné ou étant hors course devra prévenir obligatoirement un membre de l\'organisation ou un responsable des secours.',
        'Tout concurrent devra porter le matériel fourni par l\'organisation (dossards, plaques vélos…).',
        'Les concurrents sont en autonomie complète pendant toute l\'épreuve (vêtements, eau, nourriture…). Ils sont obligés de transporter eux-mêmes le matériel obligatoire désigné.',
        'Le port du casque est obligatoire sur toute l\'épreuve.',
        'Les concurrents acceptent l\'exploitation par l\'organisateur et leurs partenaires des images et des photos faites sur l\'opération. Ceci sans limitation ni dans le temps, le support ou la quantité ni le mode de diffusion. Ceci comprend le droit d\'utilisation sans frais de toute photo ou image vidéo prise sur chacune des étapes pour toute utilisation commerciale, promotionnelle et publicitaire dans tout type de support (y compris internet).',
        'Il est possible que les équipes utilisent leur propre Puce Sport Ident en le signalant à l\'inscription.',
      ],
    },
    {
      number: 6,
      title: 'Chronométrage',
      content: [
        'Seul le comité de course est habilité à donner le départ.',
        'Les bonifications et pénalités attribuées pendant la course seront comptabilisées par l\'équipe du chronométrage.',
        'Toute réclamation concernant la course devra être faite par écrit et transmise au P.C course dans la demi-heure suivant l\'arrivée.',
        'Un chèque de caution pour le prêt de la puce sport ident d\'un montant de 50 euros devra être fourni avec le dossier d\'inscription. Il vous sera rendu à l\'arrivée en échange de la puce ou servira à la rembourser en cas de perte, casse ou oubli.',
      ],
    },
    {
      number: 7,
      title: 'Contrôle de passage',
      content: [
        'Plusieurs contrôles de passage (C.P) devront être passés.',
        'Ces C.P se présentent sous forme de balises équipées d\'un poinçon et/ou d\'une balise électronique.',
        'En cas d\'absence d\'un ou de plusieurs équipiers à un C.P, les contrôleurs noteront le refus de l\'équipe de passer complet au contrôle.',
        'Si la carte le précise, les C.P pourront être passés dans l\'ordre de préférence des équipes.',
        'La carte de pointage sera remise au C.P d\'arrivée.',
      ],
    },
    {
      number: 8,
      title: 'Causes de pénalités',
      content: [
        'Cette liste n\'est pas limitative.',
        'Toute transgression du présent règlement.',
        'Abandon d\'un équipier : mise hors classement.',
        'Balise CP non poinçonnée, pénalité précisée sur la carte.',
        'Puce électronique perdue, disqualification ou 1 heure si vérification de passage de tous les commissaires aux CP.',
        'Balises pointées dans le mauvais ordre sur CO ordre défini : non prise en compte des balises.',
      ],
    },
    {
      number: 9,
      title: 'Causes de mise hors course',
      content: [
        'Non-respect des consignes données par les signaleurs routiers.',
        'Assistance en dehors des points autorisés à celle-ci.',
        'Utilisation de moyens de déplacement non autorisés.',
        'Utilisation du GPS.',
        'Changement d\'équipier pendant l\'épreuve.',
        'Manquement d\'un matériel obligatoire.',
        'Non-respect des règles de sécurité indiquées dans les consignes de course et lors du briefing.',
        'Non-respect des consignes de propreté du parcours, des lieux d\'accueil, du parc VTT, etc…',
        'Non-respect de l\'article 15 Environnement dont l\'abandon de détritus sur l\'ensemble du parcours.',
      ],
    },
    {
      number: 10,
      title: 'Classement',
      content: [
        'Le classement sera établi à partir du temps du dernier équipier.',
        'Le jury est composé de membres de l\'organisation, il est le seul habilité à recevoir les réclamations.',
        'Plusieurs classements sont proposés (Mixte, Homme et Femme).',
      ],
    },
    {
      number: 11,
      title: 'Annulations / Remboursements',
      content: [
        'En cas de forfait d\'une équipe, celle-ci doit avertir l\'organisation au plus tard 15 jours avant l\'épreuve. Après ce délai, aucun remboursement pour annulation ne sera accepté quel que soit le motif invoqué.',
        'Les équipes ne se présentant pas à l\'épreuve sans avoir averti auparavant l\'organisation, et quelle que soit la raison, ne pourront prétendre à aucun report ni remboursement.',
      ],
    },
    {
      number: 12,
      title: 'Équipement',
      content: [
        'Équipement obligatoire par personne :',
        '• 1 casque VTT en bon état et aux normes CE',
        '• 1 VTT',
        '• 1 frontale',
        '• 1 feu arrière VTT rouge',
        '• 1 L d\'eau',
        '• Vivres de course',
        '',
        'Équipement obligatoire par équipe :',
        '• 1 sifflet',
        '• 1 couverture de survie',
        '• 1 téléphone portable (donner le numéro concerné à l\'inscription)',
        '• 1 puce électronique (fournie par l\'organisation contre chèque de caution si besoin)',
        '',
        'Équipement recommandé :',
        '• 1 boussole par équipe',
        '• 1 porte carte VTT',
        '• 1 porte carte étanche par équipe',
        '• 1 « coupe-vent » par personne',
        '• 1 paire de gant par personne',
      ],
    },
    {
      number: 13,
      title: 'Sécurité',
      content: [
        'Des postes de sécurité seront implantés en plusieurs points du parcours. Ces postes seront en liaison téléphonique avec le point central de la course. Une équipe médicale sera présente pendant toute la durée de l\'épreuve. Elle sera en mesure d\'intervenir sur le parcours par tout moyen approprié dans la limite de l\'accessibilité du lieu de l\'accident, et de faire appel aux services de secours héliportés en cas de besoin. Les routes étant ouvertes à la circulation, les coureurs devront veiller à respecter le code de la route. Des signaleurs de l\'organisation seront présents aux intersections de routes.',
      ],
    },
    {
      number: 14,
      title: 'Droit à l\'image',
      content: [
        'Vu l\'article 18-1 de la loi n°84-610 du 16 juillet 1984 relative à l\'organisation et à la promotion des activités physiques et sportives, en sa rédaction applicable en la cause; l\'organisateur d\'une manifestation sportive est prioritaire des droits d\'exploitation de l\'image de cette manifestation notamment par diffusion de clichés photographiques réalisés à cette occasion.',
      ],
    },
    {
      number: 15,
      title: 'Environnement',
      content: [
        'Afin de préserver l\'environnement, Il est demandé aux concurrents de ramener tous leurs déchets, sous peine de disqualification. L\'organisation veillera à laisser le site de la course aussi propre qu\'elle l\'a trouvé.',
      ],
    },
    {
      number: 16,
      title: 'Assurances et responsabilité',
      content: [
        'Responsabilité civile: l\'organisateur a souscrit pour la durée de l\'épreuve une assurance responsabilité civile, garantissant les conséquences pécuniaires de sa responsabilité, de celle de ses préposées et des participants. Les licenciés bénéficient des garanties accordées par leur licence.',
        'Individuelle accident : Chaque participant sera en possession d\'une assurance individuelle accident couvrant d\'éventuels frais de recherche et d\'évacuation jugés nécessaires par l\'organisme de secours, soit avec la licence FFTRI soit avec la pass compétition souscrit lors de l\'inscription pour les non licenciés FFTRI. L\'organisation décline toute responsabilité en cas d\'accident ou de défaillance consécutif à un mauvais état de santé. La responsabilité de l\'Association sera dégagée dès le retrait du dossard pour abandon, pour disqualification (pointage tardif, dégradation ou non-respect du milieu naturel), par décision médicale ou sur décision du Directeur de course.',
      ],
    },
    {
      number: 17,
      title: 'Vélo à assistance électrique',
      content: [
        'Les VAE sont autorisés à participer à la course mais doivent le signaler lors de l\'inscription à l\'organisation. Les équipes utilisant 1 ou 2 VAE durant le raid seront hors classement. Il n\'y aura pas de classement spécifique VAE.',
      ],
    },
  ];

  return (
    <>
      <Helmet>
      <title>Baragnas - RdN</title>
      <meta
          name="description"
          content="Consultez le règlement complet du Raid de Noël 2026 organisé par Baragnas. Sécurité, équipement et règles de participation."
        />
      </Helmet>

      <div className="min-h-screen bg-topo">
        {/* RaidNavigation supprimé */}
        
        <div className="max-w-6xl mx-auto px-4 py-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-900 page-title-river">
              Règlement
            </h1>
            <p className="text-center text-sm md:text-lg text-gray-600 mb-2">
              Lisez attentivement le règlement avant votre inscription
            </p>
          </motion.div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                  <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-900 font-montserrat border-l-4 border-[#2D5016] pl-4">
                    ARTICLE {article.number} : {article.title}
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    {article.content.map((item, i) => (
                      <p key={i} className={(item.startsWith('•') ? 'ml-4 ' : '') + 'text-sm md:text-base'}>
                        {item}
                      </p>
                    ))}
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegulationsPage;
