export type InquiryCategory =
  | 'お見積もりのご相談について'
  | '採用募集について'
  | '施工後のご相談について';

export type ContactFormInput = {
  companyName: string;
  departmentName: string;
  name: string;
  postalCode: string;
  address: string;
  email: string;
  inquiryCategory: InquiryCategory | '';
  inquiryBody: string;
};

export type ContactFormSubmitInput = Omit<ContactFormInput, 'inquiryCategory'> & {
  inquiryCategory: InquiryCategory;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormInput, string>
>;

export type ContactSubmitResult = {
  code: number;
  message: string;
  fieldErrors?: ContactFieldErrors;
};

export type AirtableContactFields = {
  fldNoEVlZdhr5Hewl?: string;
  fldnpN2KiRc3d7Nqw?: string;
  fldfutZWROnyiqpa6: string;
  fld1E1gNSFDfggkXm: string;
  fldkZwRpu7FmsasA2: string;
  fldfZtT6GiyB8o2Gl: string;
  fldDpeLGtBHY2MtRT: InquiryCategory;
  fldzt7cYRmHYIdpaA: string;
  fldEEdUsWyMpr3VAe?: '未対応' | '対応中' | '対応済み';
};

export type AirtableContactRecord = {
  id: string;
  createdTime: string;
  fields: AirtableContactFields;
};

export type AirtableCreateContactResponse = {
  records: AirtableContactRecord[];
};
