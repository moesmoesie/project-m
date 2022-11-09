import { createPreviewSubscriptionHook } from "next-sanity";
import { CgComponents } from "react-icons/cg";
import BaseConfig from "./sanity.base-config";

export const usePreviewSubscription = createPreviewSubscriptionHook(BaseConfig);

export const filterDataToSingleItem: (data: any, preview: boolean) => any = (data, preview) => {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
};

type createModulePreviewType = (title: string, icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>) => any;

export const createModulePreview: createModulePreviewType = (title, icon = CgComponents) => {
  return {
    select: {
      module: "module",
    },
    prepare(selection: { module: any }) {
      const { module } = selection;
      let subtitle = [];

      if (!module?.small) subtitle.push("small");
      if (!module?.medium) subtitle.push("medium");
      if (!module?.large) subtitle.push("large");

      return {
        title,
        subtitle: subtitle.join(" | "),
        media: icon,
      };
    },
  };
};
