export type PersonalDetailsFormType = {
    Name: string | null;
    Age: number | null;
    DOB: number | null;
    Gender: string | null;
    Nationality: string | null;
    EmailAddress: string | null;
    ContactNumber: number | null;
    TotalYearOfExperience: number | null;
    LinkedInProfile: string | null;
    EducationalQualification: string | null;
    CurrentlyWorking:string | null;
    CertificationsIfAny: string | null;
}

export type EECompanyDetailsFormType = {
    Name: string;
    Position: string;
    From: Date;
    To: Date;
    Description: string;
    CurrentCTC: number;
    ExpectedCTC: number;
    LinkedInProfile: string;
    Location: string;
  };
  
  export type ERCompanyDetailsFormType = {
    Name: string;
    Position: string;
    From: Date;
    To: Date;
    Description: string;
    YearOfExperience: number;
    ContactNumber: number;
    EmailAddress: string;
    Location: string;
    Size: number;
    LinkedInPage: string;
    Website: string;
  }

  export type CredentialsType = {
    Username: string;
    Password: string; 
  }