export interface PaginationListModel<T> {
  items: Array<T>;
  moreAvailable: boolean;
}

export interface PaginationInfo {
  countOnPage: number;
  pageNumber: number;
  searchText: string;
}
