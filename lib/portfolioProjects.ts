export type PortfolioProject = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "leadflow-crm",
    name: "LeadFlow CRM — Small Business Sales Manager",
    description:
      "A lightweight CRM system designed for small teams to manage leads, clients, and follow-ups in one simple dashboard.",
    image: "/media/LeadFLow CRM.jpg",
    imageAlt:
      "LeadFlow CRM dashboard showing sales analytics, recent activities, and tasks.",
    features: [
      "Lead tracking with simple status stages",
      "Client profiles with contact history and key details",
      "Follow-up reminders for calls, emails, and meetings",
      "Simple visual sales pipeline for active deals",
      "Basic analytics for leads, conversions, and revenue",
    ],
  },
  {
    id: "stocklite",
    name: "StockLite — Inventory Tracker for Retail Stores",
    description:
      "A simple inventory system that helps store owners manage products, stock levels, and daily sales without complexity.",
    image: "/media/stockLite.jpg",
    imageAlt:
      "StockLite inventory dashboard showing product list, stock levels, and recent sales.",
    features: [
      "Product listing with SKU, price, and category",
      "Low-stock alerts so popular items never run out",
      "Daily sales tracking for each product",
      "Supplier list with contact details and terms",
      "CSV import/export for products and sales data",
    ],
  },
  {
    id: "helpdesk-mini",
    name: "HelpDesk Mini — Website Support Chat System",
    description:
      "A lightweight chat support widget for websites that allows businesses to talk to customers and manage support tickets from one panel.",
    image: "/media/HelpDesk Mini.jpg",
    imageAlt:
      "HelpDesk Mini interface showing website chat widget and admin support panel.",
    features: [
      "Embeddable website chat widget for instant support",
      "Admin support panel to manage multiple conversations",
      "Chat history so teams can see past interactions",
      "Email notifications for new messages and ticket updates",
      "Simple analytics on response times and resolved tickets",
    ],
  },
  {
    id: "servicebook",
    name: "ServiceBook — Appointment Booking System",
    description:
      "An online booking system that allows customers to book services and businesses to manage schedules easily.",
    image: "/media/ServiceBook.jpg",
    imageAlt:
      "ServiceBook interface showing booking calendar and upcoming appointments.",
    features: [
      "Online booking pages for services and time slots",
      "Calendar management for staff and resources",
      "Admin dashboard for managing bookings and availability",
      "Customer notifications via email for confirmations and reminders",
      "Booking history for customers and services",
    ],
  },
  {
    id: "learnbase",
    name: "LearnBase — Small Training Platform",
    description:
      "A simple learning platform for small institutes to upload courses, manage students, and track learning progress.",
    image: "/media/LearnBase.jpg",
    imageAlt:
      "LearnBase dashboard showing course cards, student progress, and completion stats.",
    features: [
      "Course pages with lessons, files, and assignments",
      "Student dashboard for enrolled courses and next actions",
      "Progress tracking for lessons and course completion",
      "Quizzes with basic grading and feedback",
      "Completion certificates for finished courses",
    ],
  },
];

export function getPortfolioProject(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id);
}

