import { ProjectStatuses } from '../../enums'
// our DB type
export type Project = {
    id: number;
    title: string;
    description: string;
    logo: string;
    templateId: number,
    startDate: Date,
    endDate: Date,
    status: ProjectStatuses,
    created_at: Date;
    updated_at: Date;
  };
  
  // our type after we run through Humps
  export type ProjectCamel = {
    id: number;
    title: string;
    description: string;
    logo: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export type CreateProject = {
    title: string;
    description: string;
    logo: string;
  }