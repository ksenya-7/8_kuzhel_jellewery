import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModalFilter} from './modules/init-modals';
import {initModalCard} from './modules/init-modals';
import {initModalLogin} from './modules/init-modals';
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

initModalFilter();
initModalCard();
initModalLogin();
initMenu();
initAccordionFaq();
initAccordionFilter();
initAccordionModalFilter();
slider();
sliderCard();
