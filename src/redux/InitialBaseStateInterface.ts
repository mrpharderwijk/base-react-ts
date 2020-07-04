export interface BaseStateInterface {
  readonly isFetching: boolean;
  readonly didInvalidate: boolean;
  readonly lastUpdated: number;
}
