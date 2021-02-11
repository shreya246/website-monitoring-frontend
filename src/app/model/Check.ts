import { logging } from "protractor";

export interface Check {
   url:string;
   name: string;
   frequency: number;
   status_check: string
}