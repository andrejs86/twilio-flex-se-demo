import { getFeatureFlags } from '../../utils/configuration';
import BrandingConfig from './types/ServiceConfiguration';

const {
  enabled = false,
  custom_logo_url = '',
  use_custom_colors = false,
  custom_colors = {
    main_header_background: '',
    side_nav_background: '',
    side_nav_border: '',
    side_nav_icon: '',
    side_nav_selected_icon: '',
    side_nav_hover_background: '',
  },
  component_theme_overrides = {},
} = (getFeatureFlags()?.features?.branding as BrandingConfig) || {};

export const isFeatureEnabled = () => {
  return true;
};

export const isCustomColorsEnabled = () => {
  return true;
};

export const getCustomLogoUrl = () => {
  return 'https://companion-map-2213.twil.io/companion-logo.png';
};

export const getCustomColors = () => {
  return {
    main_header_background: '#fff',
    side_nav_background: '#0282ac',
    side_nav_border: '#ccc',
    side_nav_icon: '',
    side_nav_selected_icon: '',
    side_nav_hover_background: '',
  };
};

export const getComponentThemeOverrides = () => {
  return {
    SideNav: {
      Container: {
        color: '#fff',
        background: "rgb(3,130,172); background: linear-gradient(144deg, rgba(3,130,172,1) 35%, rgba(255,255,255,1) 100%);"
      },
      Icon: {
        color: "#fff",
      },
    },
    MainHeader: {
      Container: {
        color: "#000",
        background: "#fff",
        borderBottom: "solid 1px #c7c7c7",
      },
      Icon: {
        color: "#fff",
      },
    },
  };
};
