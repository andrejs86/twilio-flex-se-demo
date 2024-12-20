import Flex, { Manager } from '@twilio/flex-ui';

export const cssOverrideHook = (_flex: typeof Flex, _manager: Manager) => {
  /** *
   * This is a temporary way to accomplish this, given Paste and <CustomizationProvider> features.
   * However, Flex 2 as of the time of writing this code, does not uniquely identify the Activities MENU
   * element.  Should Flex 2 wrap the generic MENU in a custom element (perhaps ACTIVITY_MENU), then
   * we could leverage something like this:
   * <CustomizationProvider baseTheme="default" elements={{
   *   "ACTIVITY_MENU": {
   *     overflowY: 'scroll',
   *     maxHeight: 'calc(100vh - 68px)',
   *   }
   * }}>
   *
   */
  return {
    MainHeader: {
      Container: {
        '.Twilio-MainHeader-end': {
          "[data-paste-element='MENU']": {
            overflowY: 'scroll',
            maxHeight: 'calc(100vh - 68px)', // Account for the menu being shifted 68px from the top of the viewport
          },
        },
      },
    },
  };
};
