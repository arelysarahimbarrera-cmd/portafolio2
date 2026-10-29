import { BarChart3, TrendingUp, Workflow, FlaskConical, type LucideIcon } from 'lucide-react';

export type Language = 'es' | 'en' | 'no';

export interface SkillCategoryData {
  id: string;
  icon: LucideIcon;
  accent: string;
  skills: { es: string; en: string; no: string }[];
}

export interface ProjectData {
  id: string;
  icon: LucideIcon;
  gradient: string;
  status: 'proposed' | 'inProgress';
}

export interface TimelineEntryData {
  id: string;
  type: 'education' | 'experience';
}

export interface ProfileData {
  email: string;
  linkedin: string;
  github: string;
}

export const profile: ProfileData = {
  email: 'arely.maya@example.com',
  // NOTE: Replace with your real LinkedIn URL — the placeholder was left blank in your request.
  linkedin: 'https://www.linkedin.com/in/arelysa',
  github: 'https://github.com/arelymaya',
};

export const skillCategories: SkillCategoryData[] = [
  {
    id: 'data-analytics',
    icon: BarChart3,
    accent: 'electric',
    skills: [
      { es: 'Python', en: 'Python', no: 'Python' },
      { es: 'SQL', en: 'SQL', no: 'SQL' },
      { es: 'Excel', en: 'Excel', no: 'Excel' },
      { es: 'Power BI', en: 'Power BI', no: 'Power BI' },
      { es: 'Visualización de datos', en: 'Data Visualization', no: 'Datavisualisering' },
      { es: 'Análisis estadístico', en: 'Statistical Analysis', no: 'Statistisk analyse' },
    ],
  },
  {
    id: 'finance-business',
    icon: TrendingUp,
    accent: 'turquoise',
    skills: [
      { es: 'Análisis de datos financieros', en: 'Financial Data Analysis', no: 'Finansiell dataanalyse' },
      { es: 'Reportes', en: 'Reporting', no: 'Rapportering' },
      { es: 'Procesos de negocio', en: 'Business Processes', no: 'Forretningsprosesser' },
      { es: 'Seguimiento de KPIs', en: 'KPI Tracking', no: 'KPI-overvåking' },
      { es: 'Evaluación de riesgos', en: 'Risk Assessment', no: 'Risikovurdering' },
    ],
  },
  {
    id: 'tech-automation',
    icon: Workflow,
    accent: 'accent',
    skills: [
      { es: 'Procesamiento de datos', en: 'Data Processing', no: 'Databehandling' },
      { es: 'Rutinas SQL', en: 'SQL Routines', no: 'SQL-rutiner' },
      { es: 'Automatización de flujos de trabajo', en: 'Workflow Automation', no: 'Automatisering av arbeidsflyt' },
      { es: 'Scripting', en: 'Scripting', no: 'Skripting' },
      { es: 'Pipelines ETL', en: 'ETL Pipelines', no: 'ETL-pipelines' },
    ],
  },
  {
    id: 'scientific-technical',
    icon: FlaskConical,
    accent: 'electric',
    skills: [
      { es: 'Física', en: 'Physics', no: 'Fysikk' },
      { es: 'Mediciones ópticas', en: 'Optical Measurements', no: 'Optiske målinger' },
      { es: 'Análisis experimental', en: 'Experimental Analysis', no: 'Eksperimentell analyse' },
      { es: 'Instrumentación', en: 'Instrumentation', no: 'Instrumentering' },
      { es: 'Métodos de investigación', en: 'Research Methods', no: 'Forskningsmetoder' },
    ],
  },
];

export const projects: ProjectData[] = [
  { id: 'business-data-insights', icon: BarChart3, gradient: 'from-electric-500 to-turquoise-400', status: 'proposed' },
  { id: 'smart-data-automation', icon: Workflow, gradient: 'from-accent-400 to-electric-500', status: 'proposed' },
  { id: 'optical-data-lab', icon: FlaskConical, gradient: 'from-turquoise-400 to-accent-400', status: 'proposed' },
];

export const timeline: TimelineEntryData[] = [
  { id: 'physics-degree', type: 'education' },
  { id: 'financial-sector', type: 'experience' },
  { id: 'business-analysis', type: 'experience' },
  { id: 'sql-automation', type: 'experience' },
  { id: 'optical-engineering', type: 'experience' },
  { id: 'science-outreach', type: 'experience' },
];
