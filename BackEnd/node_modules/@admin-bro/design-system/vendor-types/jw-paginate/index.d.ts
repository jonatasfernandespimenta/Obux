declare module 'jw-paginate' {
  export interface PaginationResult {
    totalPages: number;
    startPage: number;
    endPage: number;
    pages: Array<number>;
  }

  export default function(total: number, current: number, perPage: number): PaginationResult
}
