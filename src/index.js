import Calc from './calc';
import Log from './log';

import img from './react-logo.png';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3, 4));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);