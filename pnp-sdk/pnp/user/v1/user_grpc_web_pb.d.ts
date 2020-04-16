import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as pnp_common_v1_locale_pb from '../../../pnp/common/v1/locale_pb';
import * as pnp_user_v1_auth_pb from '../../../pnp/user/v1/auth_pb';

import {
  ChangeEmailRequest,
  ChangePasswordRequest,
  CheckEmailRegisteredRequest,
  CheckEmailRegisteredResponse,
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
  User} from './user_pb';

export class UserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  checkEmailRegistered(
    request: CheckEmailRegisteredRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CheckEmailRegisteredResponse) => void
  ): grpcWeb.ClientReadableStream<CheckEmailRegisteredResponse>;

  getUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreateUserResponse) => void
  ): grpcWeb.ClientReadableStream<CreateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  deleteUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changeEmail(
    request: ChangeEmailRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  cancelEmailChange(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: ChangePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class UserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  checkEmailRegistered(
    request: CheckEmailRegisteredRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CheckEmailRegisteredResponse>;

  getUser(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

  createUser(
    request: CreateUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

  deleteUser(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  changeEmail(
    request: ChangeEmailRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  cancelEmailChange(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  changePassword(
    request: ChangePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

