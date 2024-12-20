import Flex from '@twilio/flex-ui';

import CustomTheme from '../assets/customTheme.json';

export const cssOverrideHook = (flex: typeof Flex, manager: Flex.Manager) => {
  // set logo
  flex.MainHeader.defaultProps.logoUrl =
    'https://play-lh.googleusercontent.com/NNGmnmwH1MrTSdQT0d4T-_5Ca3vnShX34lPdlZ0tFq739AL8LpcMFuVoCoG42hRpVRs';

  // change theme
  const configuration = {
    theme: {
      tokens: CustomTheme,
      componentThemeOverrides: {
        SideNav: {
          Button: {
            '&hover': {
              color: 'rgba(29,29,213,0.5)',
            },
            color: '#f7f7f7',
          },
          Icon: {
            color: '#f7f7f7',
          },
          Container: {
            background:
              'linear-gradient(180deg, rgb(29,29,213) 0%, rgb(29,29,213) 25%, rgba(255,255,255,1) 100%)',
          },
        },
        MainHeader: {
          Container: {
            background: 'rgb(29,29,213)',
            borderBottom: 'solid 1px #c7c7c7',
            color: '#fff',
          },
        },
      },
    },
    componentProps: {
      CRMContainer: {
        uriCallback: (task: any) => task
          ? `https://custom-flex-extensions-serverless-6196-dev.twil.io/features/custom-theme/inbound/inbound.html?task=${task.attributes.name}`
          : "https://custom-flex-extensions-serverless-6196-dev.twil.io/features/custom-theme/index.html"
      }
    },
  };

  // apply theme
  manager.updateConfig(configuration);

  // lazy load css - only if this plugin is enabled
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require, @typescript-eslint/no-var-requires
  const _css = require('../custom-components/CustomCSS');
};
