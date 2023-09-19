import { getFeatureFlags } from '../../utils/configuration';
import CustomThemeConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.custom_theme as CustomThemeConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
