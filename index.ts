import * as turf from '@turf/turf';

// Exemple de liste de coordonnées pour la ligne de points (les coordonnées sont dans l'ordre : longitude, latitude)
const lineCoords: number[][] = [
  [-77.031669, 38.878605],
  [-77.029609, 38.881946],
  [-77.020339, 38.884084],
  [-77.025661, 38.885821],
  [-77.021884, 38.889563],
  [-77.019824, 38.892368],
  [-77.022646, 38.893836],
  [-77.025279, 38.891615],
  [-77.027206, 38.892833],
  [-77.029694, 38.890409],
];

// Créer un objet de ligne à partir des coordonnées de la ligne
const line = turf.lineString(lineCoords);

// Définir la distance de l'offset en mètres
const offset = 100;

// Créer un polygone avec un offset à partir de la ligne de points
const polygon = turf.buffer(line, offset, { units: 'meters' });

console.log(polygon);
