export type ApiResponse<T> = {
  code: number;
  data: T;
};

export type ServerResponse<T> = {
  code: number;
  data: T | null;
};
