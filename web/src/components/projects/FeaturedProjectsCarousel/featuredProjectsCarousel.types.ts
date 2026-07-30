export type FeaturedProject = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type FeaturedProjectSlideProps = {
  project: FeaturedProject;
  isActive?: boolean;
};