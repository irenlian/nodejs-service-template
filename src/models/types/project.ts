// our DB type
export type Project = {
    id: number;
    title: string;
    description: string;
    logo: string;
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