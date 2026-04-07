export type AirtableContactStatus = '未対応' | '対応中' | '対応済み';

export type ContactFormInput = {
  companyName: string;
  departmentName: string;
  headquartersAddress: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
};

export type AirtableContactFields = {
  fldPA4mxyeU3Sn83W: string;
  fldc8AysdBhuzrvL1: string;
  fld4105Bbg38AQutA: string;
  fldzmlAKykCD5kXw1: string;
  fldqPvCUiYdLvpYNS: string;
  fldkS4tGob7myl1L7: string;
  fldL6mHvRBSTacohz: string;
  fld07FBRF6dJczOMd: AirtableContactStatus;
};
