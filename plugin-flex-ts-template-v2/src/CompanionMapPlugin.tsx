import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { initFeatures } from './utils/feature-loader';

const PLUGIN_NAME = 'CompanionMapPlugin';

export default class CompanionMapPlugin extends FlexPlugin {
  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    initFeatures(flex, manager);

    try {
      this.cssCustomization();
    } catch (err) {
      console.log(err);
    }

    try {
      let keepGoing = 0;
      const intervalId = setInterval(() => {
        var span = document.querySelector('.Twilio-ProfileConnectorTabs > * > div.Twilio-TabHeader[data-testid="crm-tab"] > button > span');
        if (span) {
          (span as any).innerText = 'Current User Location';
          keepGoing += 1;
        }
        if (keepGoing > 300) {
          clearInterval(intervalId);
        }
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }
  
  async cssCustomization() {

    // #region Custom CSS (to avoid customizing the whole Theme)
    var css = `
      div.Twilio-SideNav-default > button.Twilio-Side-Link:hover,
      div.Twilio-SideNav-default > button.Twilio-Side-Link:active,
      div.Twilio-SideNav-default > button.Twilio-Side-Link--Active:hover,
      div.Twilio-SideNav-default > button.Twilio-Side-Link--Active:active { 
        background-color:rgb(159, 199, 216) !important;
      }
      button.Twilio-Side-Link > div.Twilio-Side-Link-IconContainer > div.Twilio-Icon {
        color: rgb(255, 255, 255)
      }
      button.Twilio-Side-Link--Active > div.Twilio-Side-Link-IconContainer > div.Twilio-Icon {
        color:rgb(255, 255, 255)
      }
      button[data-paste-element="DEVICE_MGR_BUTTON"] {
        margin-right: 12px;
        background-color: #ffaf7440;
        height: 28px;
        width: 28px;
        margin-top: -1px;
        color: #333;
      }
      button.Twilio-ErrorUI-IconButton {
        margin-right: 12px;
        background-color: #ffaf7440;
        height: 28px;
        width: 28px;
        margin-top: -1px;
      }
      div.Twilio-MainHeader > div.Twilio-MainHeader-default > div > button:hover,
      button.Twilio-ErrorUI-IconButton:hover {
        background-color: #e7e7e7 !important;
      }
      div.Twilio-Icon-NotificationDegraded > svg > path:nth-child(1),
      div.Twilio-Icon-NotificationOperational > svg > path:nth-child(1),
      div.Twilio-Icon-NotificationOperational > svg > path:nth-child(2) {
        fill:rgb(56, 56, 56)
      }
      div.Twilio-MainHeader-default > div:nth-child(3) {
        margin-left: 15px;
      }
      div.Twilio-MainHeader {
        padding: 0px;
      }
      div.Twilio-MainHeader-default {
        height: 100%;
      }
      div.Twilio-MainHeader-default > div:nth-child(2) {
        width: 51px;
      }
      div.Twilio-MainHeader-default > div:nth-child(2) > button {
        margin-right: 0px;
        width: 51px;
        border-radius: 0%;
        height: 100%;
      }
      button.Twilio-IconButton:has(.Twilio-Icon-Dialpad) {
        background-color: #ffaf7440;
      }
      div.Twilio-MainHeader-end > div > button > span > div {
        color: #161723;
        border-color: #ccc;
      }
      `;

    var styleElement: any = document.createElement("style");

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      styleElement.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName("head")[0].appendChild(styleElement);
    console.log("[Theme Plugin] Custom CSS applied");
    // #endregion
  }
}
