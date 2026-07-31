export interface Branch {
  id: string;
  country: string;
  countryAr: string;
  city: string;
  status: "Operational" | "Opening" | "Planned";
  /** [longitude, latitude] */
  coords: [number, number];
  body: string;
  email: string;
  phone?: string;
  address?: string;
}

export const branches: Branch[] = [
  {
    id: "egypt",
    country: "Egypt",
    countryAr: "مصر",
    city: "Dokki, Giza · Greater Cairo",
    status: "Operational",
    coords: [31.21, 30.043],
    body:
      "Our founding campus and the institutional headquarters of the Lighthouse network, serving families across Greater Cairo.",
    email: "hello@lighthousecampus.com",
    phone: "+20 110 703 0737",
    address: "66 El-Zahraa, Ad Doqi, Dokki, Giza Governorate 3751053, Egypt",
  },
  {
    id: "sudan",
    country: "Sudan",
    countryAr: "السودان",
    city: "Khartoum region",
    status: "Opening",
    coords: [32.53, 15.5],
    body:
      "A Sudanese campus community carrying the same curriculum, culture and standards of care as our founding campus.",
    email: "sudan@lighthousecampus.com",
  },
  {
    id: "south-sudan",
    country: "South Sudan",
    countryAr: "جنوب السودان",
    city: "Juba",
    status: "Opening",
    coords: [31.58, 4.85],
    body:
      "Serving families in Juba with international pathways, mentored teaching and a connected digital learning ecosystem.",
    email: "southsudan@lighthousecampus.com",
  },
  {
    id: "uganda",
    country: "Uganda",
    countryAr: "يوغندا",
    city: "Kampala",
    status: "Planned",
    coords: [32.58, 0.32],
    body:
      "Our East African gateway, extending the Lighthouse promise to Ugandan and international families in Kampala.",
    email: "uganda@lighthousecampus.com",
  },
];
