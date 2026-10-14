export type Review = {
  name: string;
  skill: string;
  quote: string;
  isPlaceholder?: boolean;
};

// TODO: Replace these with real testimonials from the client.
// Remove `isPlaceholder: true` from each one once it is real.
export const reviews: Review[] = [
  {
    name: "Student Name",
    skill: "Skill Studied",
    quote: "Sample testimonial text. Replace this with a real student review.",
    isPlaceholder: true,
  },
  {
    name: "Student Name",
    skill: "Skill Studied",
    quote: "Sample testimonial text. Replace this with a real student review.",
    isPlaceholder: true,
  },
  {
    name: "Student Name",
    skill: "Skill Studied",
    quote: "Sample testimonial text. Replace this with a real student review.",
    isPlaceholder: true,
  },
];
