import Flex from '@twilio/flex-ui';

import '../assets/styles.css';

export const cssOverrideHook = (flex: typeof Flex, manager: Flex.Manager) => {
  // set logo
  flex.MainHeader.defaultProps.logoUrl =
    'https://www.sicoob.com.br/image/layout_set_logo?img_id=91354473&t=1690239687741';

  const BASE_URL = 'https://sicoob-credimogiana-serverless-4577-dev.twil.io';

  // change theme
  const configuration: Flex.Config = {
    componentProps: {
      CRMContainer: {
        _uriCallback: (task: any) => {
          let url = `${BASE_URL}/index.html`;

          try {
            if (task) {
              const params = {
                nome: task.attributes.nome,
                telefone: task.attributes.telefone,
                cidade: task.attributes.cidade,
                endereco: task.attributes.endereco,
                cpf: task.attributes.cpf,
              };

              const queryString = Object.keys(params)
                .map((key) => {
                  return `${encodeURIComponent(key)}=${encodeURIComponent(params[key as keyof typeof params])}`;
                })
                .join('&');
              url = `${BASE_URL}/inbound/inbound.html?${queryString}`;
            }
          } catch (err) {
            console.error(err);
          }

          return url;
        },
        get uriCallback() {
          return this._uriCallback;
        },
        set uriCallback(value) {
          this._uriCallback = value;
        },
      },
    },
    theme: {
      componentThemeOverrides: {
        MainHeader: {
          Container: {
            backgroundColor: '#003641',
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
            backgroundColor: '#00a091',
            color: '#fff',
          },
        },
      },
    },
  };

  // apply theme
  manager.updateConfig(configuration);
};
