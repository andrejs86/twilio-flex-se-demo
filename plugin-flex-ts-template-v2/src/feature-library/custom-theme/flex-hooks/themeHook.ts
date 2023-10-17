import Flex from '@twilio/flex-ui';

import CustomTheme from '../assets/customTheme.json';

export const cssOverrideHook = (flex: typeof Flex, manager: Flex.Manager) => {
  // set logo
  flex.MainHeader.defaultProps.logoUrl =
    'https://www.portoseguro.com.br/NovoInstitucional/static_files/pdc/assets/images/logo.svg';

  const BASE_URL = 'https://porto-serverless-1340-dev.twil.io';

  // change theme
  const configuration = {
    componentProps: {
      CRMContainer: {
        uriCallback: (task: any) => {
          let url = `${BASE_URL}/index.html`;

          try {
            if (task && task.attributes && task.attributes.origem === 'Central de Serviços') {
              const params = {
                nome: task.attributes.name as string,
                tipo: task.attributes.tipo as string,
                subtipo: task.attributes.subtipo as string,
                matricula: task.attributes.matricula as string,
                fila: task.queueName as string,
                matriculaValidada: task.attributes.matriculaValidada as string,
              };
              const queryString = Object.keys(params)
                .map((key: string) => {
                  const val: any = (params as any)[key];
                  return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
                })
                .join('&');
              url = `${BASE_URL}/central-de-servicos/inbound.html?${queryString}`;
            }
          } catch (err) {
            console.error(err);
          }

          return url;
        },
      },
    },
    theme: {
      tokens: CustomTheme,
      componentThemeOverrides: {
        SideNav: {
          Button: {
            '&hover': {
              color: 'rgba(17,70,192,1)',
            },
            color: '#f7f7f7',
          },
          Icon: {
            color: '#f7f7f7',
          },
          Container: {
            background:
              'linear-gradient(180deg, rgba(17,70,192,1) 0%, rgba(17,70,192,1) 25%, rgba(255,255,255,1) 100%)',
          },
        },
        MainHeader: {
          Container: {
            background: '#f7f7f7',
            borderBottom: 'solid 1px #c7c7c7',
            color: 'black',
          },
        },
      },
    },
  };

  // apply theme
  manager.updateConfig(configuration);

  // lazy load css - only if this plugin is enabled
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require, @typescript-eslint/no-var-requires
  const _css = require('../custom-components/CustomCSS');
};
