import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initMenu} from './modules/init-menu';
import {initAccordion} from './modules/accordion';
import {initAccordionCatalog} from './modules/accordion-catalog';

import {slider} from './modules/slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initMenu();
initAccordion();
initAccordionCatalog();
slider();
