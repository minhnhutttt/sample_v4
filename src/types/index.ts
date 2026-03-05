export type ApiResponse<T> = {
  code: number;
  data: T;
};

export type ServerResponse<T> = {
  code: number;
  data: T | null;
};

export interface LogoItem {
  name: string;
}

export interface SlideData {
  id: number;
  category: string;
  logos: LogoItem[];
}
