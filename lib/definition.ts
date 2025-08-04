interface Route {
  path: string;
  page: React.ComponentType<any>;
  title: string;
}

interface LinkNames {
  name: string;
  path: string;
}

export type CustomRoutes = Route[];

export type LinkName = LinkNames[];
