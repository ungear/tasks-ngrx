export interface TaskFilter {
  taskName: string;
  isActive: boolean;
}

export interface NamedTypeFilter {
  name: string;
  filter: TaskFilter;
}
