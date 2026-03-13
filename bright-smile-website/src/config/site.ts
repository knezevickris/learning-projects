export const siteConfig = {
  name: "BrightSmile",
  fullName: "BrightSmile Dental Care",
  tagline: "Modern Care, Friendly Faces",
  description: "Providing Riverside with the highest quality dental services since 2012. Experience the perfect blend of modern technology and compassionate care.",
  url: "https://brightsmiledental.com", // Replace with actual URL
  
  contact: {
    phone: "(951) 555-0187",
    phoneUrl: "tel:9515550187",
    email: "hello@brightsmiledental.com",
    address: "247 Oak Street, Riverside, CA 92501",
    googleMapsUrl: "https://goo.gl/maps/placeholder",
  },
  
  hours: [
    { days: "Mon – Fri", time: "8:00am – 6:00pm" },
    { days: "Saturday", time: "9:00am – 2:00pm" },
    { days: "Sunday", time: "Closed", closed: true },
  ],

  stats: {
    rating: 4.9,
    reviewCount: "5,000+",
    experienceYears: "12+",
    smilesTransformed: "2,000+",
  },

  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  }
};

export type SiteConfig = typeof siteConfig;
