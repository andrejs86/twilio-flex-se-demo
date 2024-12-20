import { getFeatureFlags } from '../../utils/configuration';
import PostTaskSurveyConfig from './types/ServiceConfiguration';

const {
  voiceSurveyEnabled = false,
  whatsappSurveyEnabled = true,
  surveyWorkflowSid = '',
  whatsappSurveyContentSid = 'HXdd00888c1f65844451c75f41407d43a1',
  whatsappSurveyMessage = '',
  whatsappNumber = 'whatsapp:+551140402774',
  whatsappInboundStudioFlow = 'FW82bd703726e049040f4e1d8bc1fef5be',
} = (getFeatureFlags()?.features?.post_task_survey as PostTaskSurveyConfig) || {};

export const isVoiceSurveyEnabled = () => {
  return voiceSurveyEnabled;
};

export const isWhatsappSurveyEnabled = () => {
  return whatsappSurveyEnabled;
};

export const getSurveyWorkflowSid = () => {
  return surveyWorkflowSid;
};

export const getWhatsappSurveyContentSid = () => {
  return whatsappSurveyContentSid;
};

export const getWhatsappSurveyMessage = () => {
  return whatsappSurveyMessage;
};

export const getWhatsappNumber = () => {
  if (!whatsappNumber.startsWith('whatsapp:')) return `whatsapp:${whatsappNumber}`;

  return whatsappNumber;
};

export const getWhatsappInboundStudioFlow = () => {
  return whatsappInboundStudioFlow;
};
