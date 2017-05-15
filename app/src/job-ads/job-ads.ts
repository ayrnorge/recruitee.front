// Load the TypeScript UsersService
import {JobAdService} from './services/job-ad.service.ts';

// Define our User interface
export interface JobAd {
  title: string;
  slug: string;
  position: string;
  status: string;
  department: string;
  description: string;
  requirements: string;
  options_phone: string;
  options_photo: string;
  options_cover_letter: string;
  options_cv: string;
  open_questions: object;
  location: string;
  careers_url: string;
  mailbox_email: string;
  created_at: string;
}

// Define the Angular 'JobAd' module
export module JobAd {
  export var name:string = 'JobAd';

  angular
    .module(JobAd.name, ['ngMaterial'])
    .service("JobAdService", JobAdService);
}
