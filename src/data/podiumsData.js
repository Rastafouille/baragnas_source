/**
 * Données des podiums Raid de Noël – À COMPLÉTER
 *
 * Remplissez "equipe" (nom de l'équipe) et "temps" (ex: "1h 23min 45s")
 * pour chaque place (1, 2, 3) dans Homme, Femme, Mixte.
 * Laissez "" si pas de résultat.
 */

export const podiumsYear = 2025;

export const podiumsData = {
  court: {
    Homme: {
      1: { equipe: '400Team sud raid', temps: '2:53:26' },
      2: { equipe: "Bol d'air Lubin&Marin", temps: '3:17:01' },
      3: { equipe: '400Team la compersion', temps: '3:57:44' },
    },
    Femme: {
      1: { equipe: 'LTR Chloé Elsa', temps: '4:39:01' },
      2: { equipe: '400Team K-Anouche', temps: '5:45:03' },
      3: { equipe: 'Les frangines', temps: '5:55:01' },
    },
    Mixte: {
      1: { equipe: 'LTR Clément Pauline', temps: '4:35:50' },
      2: { equipe: 'LTR père fille', temps: '4:36:36' },
      3: { equipe: 'A2roux', temps: '4:41:06' },
    },
  },
  long: {
    Homme: {
      1: { equipe: 'Les fréros Bajard', temps: '4:31:29' },
      2: { equipe: 'Absolument MUC Orientation', temps: '4:55:07' },
      3: { equipe: 'DSN74 Family Raid', temps: '5:19:38' },
    },
    Femme: {
      1: { equipe: '400Team / LTR', temps: '9:17:31' },
      2: { equipe: 'Quartier libre', temps: '10:25:19' },
      3: { equipe: 'LTR Méla et', temps: '11:33:03' },
    },
    Mixte: {
      1: { equipe: 'Sudraid Master', temps: '7:23:47' },
      2: { equipe: 'Bouchut pére et fille', temps: '8:04:42' },
      3: { equipe: 'LTR Val et Ela', temps: '8:45:12' },
    },
  },
};
