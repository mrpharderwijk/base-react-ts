export interface BaseState {
  readonly isFetching: boolean;
  readonly didInvalidate: boolean;
  readonly lastUpdated: number;
}
