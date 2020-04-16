/**
 * @fileoverview gRPC-Web generated client stub for pnp.user.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var pnp_common_v1_locale_pb = require('../../../pnp/common/v1/locale_pb.js')

var pnp_user_v1_auth_pb = require('../../../pnp/user/v1/auth_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.user = {};
proto.pnp.user.v1 = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.user.v1.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.user.v1.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.CheckEmailRegisteredRequest,
 *   !proto.pnp.user.v1.CheckEmailRegisteredResponse>}
 */
const methodDescriptor_UserService_CheckEmailRegistered = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/CheckEmailRegistered',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.CheckEmailRegisteredRequest,
  proto.pnp.user.v1.CheckEmailRegisteredResponse,
  /**
   * @param {!proto.pnp.user.v1.CheckEmailRegisteredRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.CheckEmailRegisteredResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.CheckEmailRegisteredRequest,
 *   !proto.pnp.user.v1.CheckEmailRegisteredResponse>}
 */
const methodInfo_UserService_CheckEmailRegistered = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.CheckEmailRegisteredResponse,
  /**
   * @param {!proto.pnp.user.v1.CheckEmailRegisteredRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.CheckEmailRegisteredResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.CheckEmailRegisteredRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.CheckEmailRegisteredResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.CheckEmailRegisteredResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.checkEmailRegistered =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/CheckEmailRegistered',
      request,
      metadata || {},
      methodDescriptor_UserService_CheckEmailRegistered,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.CheckEmailRegisteredRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.CheckEmailRegisteredResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.checkEmailRegistered =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/CheckEmailRegistered',
      request,
      metadata || {},
      methodDescriptor_UserService_CheckEmailRegistered);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.user.v1.User>}
 */
const methodDescriptor_UserService_GetUser = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/GetUser',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.pnp.user.v1.User,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.user.v1.User>}
 */
const methodInfo_UserService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.User,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.User.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.User>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.CreateUserRequest,
 *   !proto.pnp.user.v1.CreateUserResponse>}
 */
const methodDescriptor_UserService_CreateUser = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.CreateUserRequest,
  proto.pnp.user.v1.CreateUserResponse,
  /**
   * @param {!proto.pnp.user.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.CreateUserRequest,
 *   !proto.pnp.user.v1.CreateUserResponse>}
 */
const methodInfo_UserService_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.CreateUserResponse,
  /**
   * @param {!proto.pnp.user.v1.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.CreateUserResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.UpdateUserRequest,
 *   !proto.pnp.user.v1.User>}
 */
const methodDescriptor_UserService_UpdateUser = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/UpdateUser',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.UpdateUserRequest,
  proto.pnp.user.v1.User,
  /**
   * @param {!proto.pnp.user.v1.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.UpdateUserRequest,
 *   !proto.pnp.user.v1.User>}
 */
const methodInfo_UserService_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.User,
  /**
   * @param {!proto.pnp.user.v1.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.User.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.User>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/UpdateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_DeleteUser = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/DeleteUser',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserService_DeleteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ChangeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_ChangeEmail = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/ChangeEmail',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ChangeEmailRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ChangeEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.ChangeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_ChangeEmail = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ChangeEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ChangeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.changeEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/ChangeEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangeEmail,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ChangeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.changeEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/ChangeEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangeEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_CancelEmailChange = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/CancelEmailChange',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_CancelEmailChange = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.cancelEmailChange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/CancelEmailChange',
      request,
      metadata || {},
      methodDescriptor_UserService_CancelEmailChange,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.cancelEmailChange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/CancelEmailChange',
      request,
      metadata || {},
      methodDescriptor_UserService_CancelEmailChange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ChangePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_ChangePassword = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.UserService/ChangePassword',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ChangePasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.ChangePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_ChangePassword = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ChangePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.UserServiceClient.prototype.changePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ChangePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.UserServicePromiseClient.prototype.changePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.UserService/ChangePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ChangePassword);
};


module.exports = proto.pnp.user.v1;

