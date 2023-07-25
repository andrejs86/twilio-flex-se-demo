import { getFeatureFlags } from '../../utils/configuration';
import CustomThemeConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.sicoob_credimogiana_theme as CustomThemeConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
