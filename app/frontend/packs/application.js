import Rails from 'rails-ujs';
import { application } from '../application';

// Support component names relative to this directory:
var componentRequireContext = require.context('components', true);
var ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);
ReactRailsUJS.mountComponents();

Rails.start();
application();
