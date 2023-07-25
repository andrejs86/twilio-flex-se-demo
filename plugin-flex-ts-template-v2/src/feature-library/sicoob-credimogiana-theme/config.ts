import { getFeatureFlags } from '../../utils/configuration';
import SicoobCredimogianaThemeConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.sicoob_credimogiana_theme as SicoobCredimogianaThemeConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
