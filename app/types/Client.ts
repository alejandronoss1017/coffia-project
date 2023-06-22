export type Client = {
  name: string;
  logo: string;
  logoAlt: string;
  website: string;
};

export type ClientsProps = {
  clients: Client[];
};
