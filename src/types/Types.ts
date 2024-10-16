export type HttpHeaders = { [key: string]: string };

export enum HttpMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  del = "DELETE",
}

export interface FetchOption {
  method: HttpMethod;
  headers: HttpHeaders;
  body?: string | FormData;
}

export interface ApiCallStartLog {
  url: string;
  method: HttpMethod;
  headers: HttpHeaders;
  body?: object;
}

export interface ApiCallFinishedLog extends ApiCallStartLog {
  status: number;
  data: object;
}

export interface ServiceData {
  service_number: string;
  service_name: string;
  sort_details: string;
  details: string;
  publisher_name: string;
  published_date: string;
  id: string;
  icon: File | null;
  image: File | null;
}

export interface SolutionData {
  solution_number: string;
  solution_name: string;
  sort_details: string;
  details: string;
  publisher_name: string;
  published_date: string;
  id: string;
  icon: File | null;
  image: File | null;
}

export interface ProductData {
  id: string;
  product_name: string;
  product_number: string;
  details: string;
  technology_name: string;
  live_link: string;
  publisher_name: string;
  published_date: string;
  image: File | null;
}

export interface BlogData {
  id: string;
  blog_name: string;
  blog_number: string;
  details: string;
  publisher_name: string;
  published_date: string;
  image: File | null;
}

export interface CandidateData {
  id?: string;
  name: string; // need to remove
  first_name: string; // matched backend
  last_name: string; //matched backend
  email: string;
  phone: string;
  job_title: string;
  job_type: string;
  degree: string;
  resume_pdf: string; //matched backend
  job_id: string; // matched backend
  experience: number; //matched backend
  file: string; // need to remove, file name will be show pdf icon
}

export interface JobData {
  id?: string;
  job_number: string;
  job_title: string;
  job_type: string;
  vacancy: number;
  publish_date: string;
  expire_date: string;
  status: boolean; // Changed to boolean
  salary: string | number;
  age: string;
  location: string;
  education: string;
  experience: string;
  additional_requirements: string;
  responsibilities_and_context: string;
  work_place: string;
}

export interface InvoiceData {
  id: string;
  invoice_number: string;
  company_name: string;
  address: string;
  email: string;
  amount: number;
  amount_type: string;
  sub_total: number;
  vat_tax: number;
  currency: string;
  total: number;
  date: string;
  purchase_num: string;
  delivery_date: string;
  recipient_address: string;
  bank_name: string;
  account_num: string;
  routing_num: string;
  bank_branch: string;
  swift_code: string;
  items: Array<{ description: string; amount: string }>;
}

export interface ClientData {
  client_number: string;
  client_name: string;
  details: string;
  add_date: string;
  status: boolean; // Changed to boolean
  image?: File | null;
  // image: string | null;
  id?: string;
}
