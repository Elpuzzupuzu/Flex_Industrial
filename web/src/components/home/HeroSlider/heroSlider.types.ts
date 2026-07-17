export interface HeroSlideData {
  id: string | number;
  image: string;
  imageAlt: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface HeroSliderProps {
  slides: HeroSlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
}

export interface HeroControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export interface HeroIndicatorsProps {
  total: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export interface HeroSlideData {
  id: string | number;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}