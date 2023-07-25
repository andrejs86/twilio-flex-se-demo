import Flex from '@twilio/flex-ui';

export const cssOverrideHook = (flex: typeof Flex, manager: Flex.Manager) => {
  // set logo
  flex.MainHeader.defaultProps.logoUrl = 'https://www.unilever.com.br/core-assets/logos/logo-static-dark.svg';

  // const BASE_URL = 'https://sicoob-credimogiana-serverless-4577-dev.twil.io';

  // change theme
  const configuration: Flex.Config = {
    componentProps: {
      // CRMContainer: {
      //   _uriCallback: (task: any) => {
      //     let url = `${BASE_URL}/index.html`;
      //     try {
      //       if (task) {
      //         const params = {
      //           nome: task.attributes.nome,
      //           telefone: task.attributes.telefone,
      //           cidade: task.attributes.cidade,
      //           endereco: task.attributes.endereco,
      //           cpf: task.attributes.cpf,
      //         };
      //         const queryString = Object.keys(params)
      //           .map((key) => {
      //             return `${encodeURIComponent(key)}=${encodeURIComponent(params[key as keyof typeof params])}`;
      //           })
      //           .join('&');
      //         url = `${BASE_URL}/inbound/inbound.html?${queryString}`;
      //       }
      //     } catch (err) {
      //       console.error(err);
      //     }
      //     return url;
      //   },
      //   get uriCallback() {
      //     return this._uriCallback;
      //   },
      //   set uriCallback(value) {
      //     this._uriCallback = value;
      //   },
      // },
    },
    theme: {
      componentThemeOverrides: {
        MainHeader: {
          Container: {
            backgroundColor: '#1f36c7',
            borderBottom: 'solid 1px #ccc',
            color: '#fff',
          },
          Button: {
            color: '#fff',
          },
        },
        SideNav: {
          Button: {
            color: '#fff',
            lightHover: true,
            lightingColor: 'rgb(1 185 168)',
          },
          Icon: {
            color: '#fff',
            lightHover: true,
            lightingColor: 'rgb(1 185 168)',
          },
          Container: {
            backgroundColor: '#031f82',
            color: '#fff',
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
