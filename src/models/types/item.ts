// our DB type
export type Item = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
  
  // our type after we run through Humps
  export type ItemCamel = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };