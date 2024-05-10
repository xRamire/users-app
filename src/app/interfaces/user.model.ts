export interface User {
  id: number;
  type: 'demandante' | 'empleado';
  personalData: {
    nifPassport: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
  };
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
