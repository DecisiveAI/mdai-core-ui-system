import analyticsCtor from "analytics";
import googleAnalytics from "@analytics/google-analytics";

/**
 * Initilize the analytics library and attach it to window._mdai_analytics. See https://www.npmjs.com/package/analytics for more info on usage
 * @param {String} appName The name of the app, possibly mdai-console, or mdai-core-ui-system-demosite
 * @param {String} googleAnalyticsId Google analytics measurement ID (use env var!)
 * @param {String=} userId The user ID if applicable
 * @param {String=} engineId The engine ID if applicable
 */
export const initializeAnalytics = (
  appName,
  googleAnalyticsId,
  userId,
  engineId
) => {
  try {
    if (!appName || !googleAnalyticsId) {
      return null;
    }

    const analytics = analyticsCtor({
      app: appName,
      plugins: [
        googleAnalytics({
          measurementIds: [googleAnalyticsId],
          debug: import.meta.env.DEV,
        }),
      ],
    });

    if (userId) {
      analytics.identify(
        userId,
        engineId
          ? {
              engineId,
            }
          : {}
      );
    }

    window._mdai_analytics = analytics;
    return analytics;
  } catch (error) {
    console.log(error);
    // TODO: Do something with this.
  }
};
