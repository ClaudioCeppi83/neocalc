import './matrix.js';
import { initDisplay } from './display.js';
import { setupHistory } from './history.js';
import { setupModes } from './modes.js';
import { setupCategories } from './categories.js';
import { setupTerminal } from './terminal.js';
import { setupCalculator } from './calculator.js';
import { setupCrypto } from './crypto.js';
import { setupStatistics } from './statistics.js';
import { setupOptimization } from './optimization.js';
import { setupComputational } from './computational.js';

window.onload = () => {
  initDisplay();
  setupHistory();
  setupModes();
  setupCategories();
  setupTerminal();
  setupCalculator();
  setupCrypto();
  setupStatistics();
  setupOptimization();
  setupComputational();
};
