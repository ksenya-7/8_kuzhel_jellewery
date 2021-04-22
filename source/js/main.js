import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initMenu} from './modules/init-menu';
import {initAccordionFaq} from './modules/accordion';
import {initAccordionFilter} from './modules/accordion';
import {initAccordionModalFilter} from './modules/accordion';


import {slider} from './modules/slider';
import {sliderCard} from './modules/slider';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initMenu();
initAccordionFaq();
initAccordionFilter();
initAccordionModalFilter();
slider();
sliderCard();
