export interface ProjectItem {
  id: string;
  titleKey: string;
  descKey: string;
  status: 'completed' | 'progress';
  image?: string;
  tags: string[];
  viewUrl?: string;
  codeUrl: string;
}
