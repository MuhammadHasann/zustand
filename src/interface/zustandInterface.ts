export interface AppStoreInterface {
  count: number;
  increase: () => void;
  decrease: () => void;
  username: string;
  updateName: (username: string) => void;
  userGithub: { [key: string]: any };
  getUserGithub: (username: string) => void;
  logoutGithub: () => void;
}
