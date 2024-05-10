export interface User {
    id: number;
    firstName: string;
    lastName: string;
    type: 'demandante' | 'empleado'; // Tipo de usuario
    address: {
      street: string;
      number: string;
      postalCode: string;
      city: string;
    };
    studies?: {
      institutionName: string;
      degree: string;
      date: string;
    }[];
    workExperience?: {
      companyName: string;
      position: string;
      date: string;
    }[];
  }
  