import type { IconType } from 'react-icons';
import {
  SiPython, SiTensorflow, SiReact, SiJavascript, SiTypescript,
  SiDjango, SiFirebase, SiGit, SiGooglecloud, SiVercel,
  SiFigma, SiFastapi, SiN8N, SiVite,
} from 'react-icons/si';
import { FaRProject } from 'react-icons/fa';
import {
  TbBrain, TbApi, TbLink, TbShieldLock,
  TbCamera, TbMap2, TbDatabase, TbCreditCard, TbCloud,
} from 'react-icons/tb';

export const techIconMap: Record<string, IconType> = {
  // Languages
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  R: FaRProject,
  SQL: TbDatabase,

  // Frameworks & libraries
  React: SiReact,
  Django: SiDjango,
  FastAPI: SiFastapi,
  TensorFlow: SiTensorflow,
  LangChain: TbLink,
  N8N: SiN8N,

  // Platforms & services
  Firebase: SiFirebase,
  GCP: SiGooglecloud,
  Git: SiGit,
  Vercel: SiVercel,
  Figma: SiFigma,
  Paystack: TbCreditCard,
  Vite: SiVite,
  AWS: TbCloud,

  // Generic concepts
  'AI': TbBrain,
  'AI/ML': TbBrain,
  'Blockchain': TbLink,
  'Computer Vision': TbCamera,
  'Geomapping': TbMap2,
  'Privacy Tech': TbShieldLock,
  'REST API': TbApi,
  'EMR API': TbApi,
  'Bio-LLMs': TbBrain,
  'SDK': TbApi,
};

export function TechIcon({
  name,
  size = 20,
  className = '',
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = techIconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
