import type { RichTextContent } from "@graphcms/rich-text-types"
import { KnownTech } from "./projects"

export type workExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  technologies: KnownTech[];
  description: {
    raw: RichTextContent;
  };
};