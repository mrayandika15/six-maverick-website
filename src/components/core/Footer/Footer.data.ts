import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

type ISocialMedia = {
  name: string;
  icon: any;
};

export const SocialMedia: ISocialMedia[] = [
  { name: "github", icon: AiOutlineGithub },
  { name: "instagram", icon: AiOutlineInstagram },
  { name: "linkedin", icon: AiOutlineLinkedin },
  { name: "twitter", icon: AiOutlineTwitter },
];
