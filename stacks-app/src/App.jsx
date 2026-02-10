import { AppConfig, UserSession, showConnect } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export function connectWallet() {
  showConnect({
    appDetails: {
      name: "Stacks Counter",
      icon: window.location.origin + "/logo.png",
    },
    userSession,
    onFinish: () => window.location.reload(),
  });
}
