import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModalFilter, initModalCard, initModalLogin} from './modules/init-modals';
import {initMenu} from './modules/init-menu';
import {initAccordionFaq, initAccordionFilter, initAccordionModalFilter} from './modules/accordion';
import {slider, sliderCard} from './modules/slider';
import {sliderRange, sliderRangeCatalog, sliderRangeModal} from './modules/init-nouislider';

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
sliderRange();
sliderRangeCatalog();
sliderRangeModal();
