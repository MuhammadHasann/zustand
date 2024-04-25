export interface AppStoreInterface {
  count: number;
  increase: () => void;
  decrease: () => void;
  username: string;
  updateName: (username: string) => void;
}
