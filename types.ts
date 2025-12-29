
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Trainer {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}
