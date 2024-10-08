const express = require('express');
const cors = require('cors');
const ngrok = require('ngrok'); // Ensure ngrok is installed
const app = express();
const port = process.env.PORT || 8000;

// Set this to true to use ngrok, false to use the local port
const useNgrok = false; // Toggle this value

const corsOptions = {
  origin: '*', 
  methods: 'GET,POST,PUT,DELETE,OPTIONS', // Include all necessary methods
  allowedHeaders: 'Content-Type,Authorization,X-Requested-With,Origin,Accept',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.options('*', cors(corsOptions)); 
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Received request on', req.path);
  console.log('Request Method:', req.method);
  console.log('Request Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Request Body:', JSON.stringify(req.body, null, 2));
  console.log('Request Query:', JSON.stringify(req.query, null, 2));
  next();
});

app.get('/overrides', (req, res) => {
  res.send({
    themeV2: {
      loginBox:{
        pageHeader: `
          <div style="background-color: #d9d9d9; padding: 10px; border-radius: 4px; display: flex; align-items: center; width: 400px;">
            <span style="font-family: Arial, sans-serif; font-size: 16px; color: #333; margin-right: 10px;">
              <i style="display: inline-block; width: 20px; height: 20px; background-color: #f0f0f0; border-radius: 50%; text-align: center; line-height: 20px;">i</i>
            </span>
            <span style="flex-grow: 1; font-family: Arial, sans-serif; font-size: 16px; color: #333;">
              Custom footer text!
              <br />
              Add your HTML code here
              <br />
              You can even add
              <a href="https://flatfile.com/docs/overview?action=showintercom" style="color: #0073e6;">links</a>.
            </span>
            <span style="font-family: Arial, sans-serif; font-size: 20px; color: #333; cursor: pointer;">
              &times;
            </span>
          </div>
        `,
      },
    },
    localizations: {
      en: {
        loginBox: {
          login: {
            title: "title",
            signUpMessage: "signUpMessage",
            signUpLink: "signUpLink",
            forgotPassword: "forgotPassword",
            emailInputLabel: "emailInputLabel",
            emailInputPlaceholder: "emailInputPlaceholder",
            emailMustBeValid: "emailMustBeValid",
            emailIsRequired: "emailIsRequired",
            passwordInputLabel: "passwordInputLabel",
            passwordInputPlaceholder: "passwordInputPlaceholder",
            passwordMustBeCharacters: "passwordMustBeCharacters",
            passwordIsRequired: "passwordIsRequired",
            login: "login",
            continue: "continue",
            invalidTitle: "invalidTitle",
            signInWithSocialLogin: "signInWithSocialLogin",
            backToLogin: "backToLogin",
            mfaTitle: "mfaTitle",
            mfaSubtitle: "mfaSubtitle",
            mfaAuthenticatorTitle: "mfaAuthenticatorTitle",
            mfaInputLabel: "mfaInputLabel",
            mfaCodeIsRequired: "mfaCodeIsRequired",
            mfaCodeLengthAtLeast6: "mfaCodeLengthAtLeast6",
            twoFactorCodeIsRequired: "twoFactorCodeIsRequired",
            twoFactorCodeLengthAtLeast8: "twoFactorCodeLengthAtLeast8",
            mfaRememberThisDevice: "mfaRememberThisDevice",
            mfaRememberLongerThenYear: "mfaRememberLongerThenYear",
            disableMultiFactorTitle: "disableMultiFactorTitle",
            disableMultiFactorMessage: "disableMultiFactorMessage",
            recoverMfaTitle: "recoverMfaTitle",
            recoverMfaMessage: "recoverMfaMessage",
            disabledMultiFactorClickHereButton: "disabledMultiFactorClickHereButton",
            enterRecoveryCode: "enterRecoveryCode",
            disabledMultiFactorButton: "disabledMultiFactorButton",
            missingPolicyErrorMessage: "missingPolicyErrorMessage",
            magicLinkTitle: "magicLinkTitle",
            magicLinkText: "magicLinkText",
            magicLinkResend: "magicLinkResend",
            magicLinkResending: "magicLinkResending",
            invalidMagicLinkTitle: "invalidMagicLinkTitle",
            invalidMagicLinkText: "invalidMagicLinkText",
            smsOtcTitle: "smsOtcTitle",
            smsOtcMessage: "smsOtcMessage",
            smsOtcChangePhoneMessage: "smsOtcChangePhoneMessage",
            otcTitle: "otcTitle",
            otcMessage: "otcMessage",
            otcInputLabel: "otcInputLabel",
            otcInputPlaceholder: "otcInputPlaceholder",
            otcCodeIsRequired: "otcCodeIsRequired",
            otcContinue: "otcContinue",
            otcHaventReceivedCode: "otcHaventReceivedCode",
            otcResend: "otcResend",
            otcResending: "otcResending",
            otcInvalidLengthCode: "otcInvalidLengthCode",
            ssoRedirectToMessage: "ssoRedirectToMessage",
            failedOicdLoginTitle: "failedOicdLoginTitle",
            failedOicdBackToLogin: "failedOicdBackToLogin",
            failedSamlDefaultError: "failedSamlDefaultError",
            failedSamlBackToLogin: "failedSamlBackToLogin",
            joinTenantTitle: "joinTenantTitle",
            failedJoinTenantTitle: "failedJoinTenantTitle",
            failedJoinTenantBackButton: "failedJoinTenantBackButton",
            forceMfaTitle: "forceMfaTitle",
            forceMfaMessage: "forceMfaMessage",
            forceMfaScanQueryDescription1: "forceMfaScanQueryDescription1",
            forceMfaScanQueryDescription2: "forceMfaScanQueryDescription2",
            forceMfaInputLabel: "forceMfaInputLabel",
            forceMfaInputPlaceholder: "forceMfaInputPlaceholder",
            forceMfaVerifyButton: "forceMfaVerifyButton",
            forceMfaRememberThisDevice: "forceMfaRememberThisDevice",
            forceMfaRememberLongerThenYear: "forceMfaRememberLongerThenYear",
            disclaimerText: "disclaimerText",
            termsLinkText: "termsLinkText",
            termsLink: "termsLink",
            privacyLinkText: "privacyLinkText",
            privacyLink: "privacyLink",
            termsAndPrivacyConjunctionText: "termsAndPrivacyConjunctionText",
            oneTouchLoginTitle: "oneTouchLoginTitle",
            oneTouchLoginMessage: "oneTouchLoginMessage",
            oneTouchLoginButton: "oneTouchLoginButton",
            touchId: "touchId",
            androidLoginTitle: "androidLoginTitle",
            androidLoginMessage: "androidLoginMessage",
            androidLoginButton: "androidLoginButton",
            android: "android",
            usbLoginTitle: "usbLoginTitle",
            usbLoginMessage: "usbLoginMessage",
            usbLoginButton: "usbLoginButton",
            usb: "usb",
            smsLoginTitle: "smsLoginTitle",
            smsLoginMessage: "smsLoginMessage",
            smsLoginButton: "smsLoginButton",
            sms: "sms",
            smsLoginChangePhoneTitle: "smsLoginChangePhoneTitle",
            smsLoginChangePhoneMessage: "smsLoginChangePhoneMessage",
            smsLoginChangePhoneInputLabel: "smsLoginChangePhoneInputLabel",
            smsLoginChangePhoneButton: "smsLoginChangePhoneButton",
            smsLoginPinTitle: "smsLoginPinTitle",
            smsLoginPinMessage: "smsLoginPinMessage",
            smsLoginPinButton: "smsLoginPinButton",
            loginWelcomeTitle: "loginWelcomeTitle",
            loginWelcomeSubtitleSubtitle: "loginWelcomeSubtitleSubtitle",
            loginWelcomeKnownUserSubtitle: "loginWelcomeKnownUserSubtitle",
            registerNewQuickLoginTitle: "registerNewQuickLoginTitle",
            registerNewQuickLoginTitleWithSocial: "registerNewQuickLoginTitleWithSocial",
            registerNewQuickLoginSubtitle: "registerNewQuickLoginSubtitle",
            phoneIsRequired: "phoneIsRequired",
            phoneIsInvalid: "phoneIsInvalid",
            forceEnrollMfaTitle: "forceEnrollMfaTitle",
            forceEnrollMfaSubtitle: "forceEnrollMfaSubtitle",
            forceEnrollMfaAuthenticatorApp: "forceEnrollMfaAuthenticatorApp",
            forceEnrollMfaAuthenticatorAppDescription: "forceEnrollMfaAuthenticatorAppDescription",
            forceEnrollMfaSMS: "forceEnrollMfaSMS",
            forceEnrollMfaPlatform: "forceEnrollMfaPlatform",
            forceEnrollMfaCrossPlatform: "forceEnrollMfaCrossPlatform",
            forceEnrollMfaCrossPlatformDescription: "forceEnrollMfaCrossPlatformDescription",
            preEnrollMfaSMSTitle: "preEnrollMfaSMSTitle",
            preEnrollMfaSMSSubtitle: "preEnrollMfaSMSSubtitle",
            preEnrollMfaSMSSubmitButtonMessage: "preEnrollMfaSMSSubmitButtonMessage",
            mfaSMSTitle: "mfaSMSTitle",
            mfaSMSSubtitle: "mfaSMSSubtitle",
            mfaSMSResendCode: "mfaSMSResendCode",
            enrollMfaSMSBackMessage: "enrollMfaSMSBackMessage",
            moreWaysToAuthenticate: "moreWaysToAuthenticate",
            loginMfaSMS: "loginMfaSMS",
            loginMfaSMSDescription: "loginMfaSMSDescription",
            loginMfaPlatform: "loginMfaPlatform",
            loginMfaPlatformDescription: "loginMfaPlatformDescription",
            loginMfaCrossPlatform: "loginMfaCrossPlatform",
            loginMfaCrossPlatformDescription: "loginMfaCrossPlatformDescription",
            loginMfaAuthenticatorApp: "loginMfaAuthenticatorApp",
            loginMfaAuthenticatorAppDescription: "loginMfaAuthenticatorAppDescription",
            loginMfaAuthenticatorAppTitle: "loginMfaAuthenticatorAppTitle",
            loginMfaHelpMessage: "loginMfaHelpMessage",
            useRecoveryCode: "useRecoveryCode"
          },
          signup: {
            account: {
              title: "title",
              nameInputLabel: "nameInputLabel",
              nameInputPlaceholder: "nameInputPlaceholder",
              nameIsRequired: "nameIsRequired",
              nameMinLengthIs3: "nameMinLengthIs3",
              emailInputLabel: "emailInputLabel",
              emailInputPlaceholder: "emailInputPlaceholder",
              emailMustBeValid: "emailMustBeValid",
              emailIsRequired: "emailIsRequired",
              passwordInputLabel: "passwordInputLabel",
              passwordInputPlaceholder: "passwordInputPlaceholder",
              passwordIsRequired: "passwordIsRequired",
              phoneInputLabel: "phoneInputLabel",
              phoneInputPlaceholder: "phoneInputPlaceholder",
              phoneIsRequired: "phoneIsRequired",
              phoneIsInvalid: "phoneIsInvalid",
              companyNameInputLabel: "companyNameInputLabel",
              companyNameInputPlaceholder: "companyNameInputPlaceholder",
              companyNameIsRequired: "companyNameIsRequired",
              companyNameMinLengthIs3: "companyNameMinLengthIs3",
              disclaimerText: "disclaimerText",
              disclaimerCheckboxLabel: "disclaimerCheckboxLabel",
              disclaimerTextRequired: "disclaimerTextRequired",
              termsLinkText: "termsLinkText",
              termsLink: "termsLink",
              privacyLinkText: "privacyLinkText",
              privacyLink: "privacyLink",
              termsAndPrivacyConjunctionText: "termsAndPrivacyConjunctionText",
              signUpWithSocialLogin: "signUpWithSocialLogin",
              loginMessage: "loginMessage",
              loginLink: "loginLink",
              signupButtonText: "signupButtonText",
              failedJoinTenantTitle: "failedJoinTenantTitle",
              failedJoinTenantBackButton: "failedJoinTenantBackButton",
              successTitle: "successTitle",
              successActivateMessage: "successActivateMessage",
              backToLoginLink: "backToLoginLink",
              successGoToLoginMessage: "successGoToLoginMessage",
              successGoToLoginButton: "successGoToLoginButton",
              firstNameInputLabel: "firstNameInputLabel",
              firstNameInputPlaceholder: "firstNameInputPlaceholder",
              firstNameIsRequired: "firstNameIsRequired",
              firstNameMinLengthIs3: "firstNameMinLengthIs3",
              lastNameInputLabel: "lastNameInputLabel",
              lastNameInputPlaceholder: "lastNameInputPlaceholder",
              lastNameIsRequired: "lastNameIsRequired",
              lastNameMinLengthIs3: "lastNameMinLengthIs3"
            }
          }
        },
      },
    },
  });
});

async function startServer() {
  try {
    if (useNgrok) {
      const url = await ngrok.connect(port);
      console.log(`ngrok tunnel established at ${url}`);
    } else {
      console.log(`Server is running on http://localhost:${port}`);
    }
    app.listen(port);
  } catch (err) {
    console.error('Error starting ngrok:', err);
  }
}

startServer();
