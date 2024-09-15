import { AuthorizationTypeEnum, MethodTypeEnum } from '../enums/request.enum';

export type AuthorizationType = {
  type?: AuthorizationTypeEnum;
  token?: string;
};

export type HeadersType = {
  authroization?: AuthorizationType;
};

export type RequestType = {
  authorization?: AuthorizationType;
  headers?: HeadersType;
  body?: Record<string, unknown>;
  method?: MethodTypeEnum;
};
