export interface ISignUp {
  email: string;
  fullName: string;
  avatarUrl: string;
  password: string;
}

export interface ISignUpHash {
  email: string;
  fullName: string;
  avatarUrl: string;
  _id: string;
  token: string;
}

export interface ISignUpReturn {
  ok: boolean;
  data?: ISignUpHash;
  error?: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInReturn {
  ok: boolean;
  data?: ISignIn;
  error?: string;
}

export interface IPost {
  title: string;
  text: string;
  imageUrl: string;
  tags: string;
  userId: string;
}

export interface IPostUser {
  avatarUrl: string;
  email: string;
  fullName: string;
  _id: string;
}

export interface IPostArr {
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  user: IPostUser;
  _id: string;
}

export interface IGetPostsReturn {
  ok: boolean;
  posts?: IPostArr[];
  error?: string;
}

export interface ICreatePostReturn {
  ok: boolean;
  post?: IPostArr;
  error?: string;
}
