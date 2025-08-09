export interface schema {
  name: string;
  fields: field[];
  default_sorting_field?: string;
  enable_nested_fields: boolean;
}

interface field {
  name: string;
  type: string;
  facet?: boolean;
  index?: boolean;
  optional?: boolean;
}
