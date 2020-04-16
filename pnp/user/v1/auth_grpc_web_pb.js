/**
 * @fileoverview gRPC-Web generated client stub for pnp.user.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.user = {};
proto.pnp.user.v1 = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.user.v1.AuthServiceClient =
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
proto.pnp.user.v1.AuthServicePromiseClient =
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
 *   !proto.pnp.user.v1.AuthRequest,
 *   !proto.pnp.user.v1.AuthResponse>}
 */
const methodDescriptor_AuthService_Authenticate = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.AuthService/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.AuthRequest,
  proto.pnp.user.v1.AuthResponse,
  /**
   * @param {!proto.pnp.user.v1.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.AuthRequest,
 *   !proto.pnp.user.v1.AuthResponse>}
 */
const methodInfo_AuthService_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.AuthResponse,
  /**
   * @param {!proto.pnp.user.v1.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.AuthServiceClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.AuthService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Authenticate,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.AuthServicePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.AuthService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AuthService_Deauthenticate = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.AuthService/Deauthenticate',
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
const methodInfo_AuthService_Deauthenticate = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.pnp.user.v1.AuthServiceClient.prototype.deauthenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.AuthService/Deauthenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Deauthenticate,
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
proto.pnp.user.v1.AuthServicePromiseClient.prototype.deauthenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.AuthService/Deauthenticate',
      request,
      metadata || {},
      methodDescriptor_AuthService_Deauthenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ValidateResetTokenRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AuthService_ValidateResetToken = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.AuthService/ValidateResetToken',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ValidateResetTokenRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ValidateResetTokenRequest} request
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
 *   !proto.pnp.user.v1.ValidateResetTokenRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AuthService_ValidateResetToken = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ValidateResetTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ValidateResetTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.AuthServiceClient.prototype.validateResetToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ValidateResetToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_ValidateResetToken,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ValidateResetTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.AuthServicePromiseClient.prototype.validateResetToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ValidateResetToken',
      request,
      metadata || {},
      methodDescriptor_AuthService_ValidateResetToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ResetPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AuthService_ResetPassword = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.AuthService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ResetPasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ResetPasswordRequest} request
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
 *   !proto.pnp.user.v1.ResetPasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AuthService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ResetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.AuthServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ResetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.AuthServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ConfirmPasswordRequest,
 *   !proto.pnp.user.v1.AuthResponse>}
 */
const methodDescriptor_AuthService_ConfirmPassword = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.AuthService/ConfirmPassword',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ConfirmPasswordRequest,
  proto.pnp.user.v1.AuthResponse,
  /**
   * @param {!proto.pnp.user.v1.ConfirmPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.AuthResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.user.v1.ConfirmPasswordRequest,
 *   !proto.pnp.user.v1.AuthResponse>}
 */
const methodInfo_AuthService_ConfirmPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.user.v1.AuthResponse,
  /**
   * @param {!proto.pnp.user.v1.ConfirmPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.user.v1.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ConfirmPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.user.v1.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.user.v1.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.AuthServiceClient.prototype.confirmPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ConfirmPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ConfirmPassword,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ConfirmPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.user.v1.AuthResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.AuthServicePromiseClient.prototype.confirmPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.AuthService/ConfirmPassword',
      request,
      metadata || {},
      methodDescriptor_AuthService_ConfirmPassword);
};


module.exports = proto.pnp.user.v1;

