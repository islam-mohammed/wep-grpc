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
proto.pnp.user.v1 = require('./email_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.user.v1.EmailServiceClient =
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
proto.pnp.user.v1.EmailServicePromiseClient =
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
 *   !proto.pnp.user.v1.SubscribeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EmailService_SubscribeEmail = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.EmailService/SubscribeEmail',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.SubscribeEmailRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.SubscribeEmailRequest} request
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
 *   !proto.pnp.user.v1.SubscribeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EmailService_SubscribeEmail = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.SubscribeEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.SubscribeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.EmailServiceClient.prototype.subscribeEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.EmailService/SubscribeEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_SubscribeEmail,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.SubscribeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.EmailServicePromiseClient.prototype.subscribeEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.EmailService/SubscribeEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_SubscribeEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.ConfirmEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EmailService_ConfirmEmail = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.EmailService/ConfirmEmail',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.ConfirmEmailRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ConfirmEmailRequest} request
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
 *   !proto.pnp.user.v1.ConfirmEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EmailService_ConfirmEmail = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.ConfirmEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.ConfirmEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.EmailServiceClient.prototype.confirmEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.EmailService/ConfirmEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_ConfirmEmail,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.ConfirmEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.EmailServicePromiseClient.prototype.confirmEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.EmailService/ConfirmEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_ConfirmEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.user.v1.UnsubscribeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EmailService_UnsubscribeEmail = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.EmailService/UnsubscribeEmail',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.UnsubscribeEmailRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.UnsubscribeEmailRequest} request
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
 *   !proto.pnp.user.v1.UnsubscribeEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EmailService_UnsubscribeEmail = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.UnsubscribeEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.UnsubscribeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.EmailServiceClient.prototype.unsubscribeEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.EmailService/UnsubscribeEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_UnsubscribeEmail,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.UnsubscribeEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.EmailServicePromiseClient.prototype.unsubscribeEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.EmailService/UnsubscribeEmail',
      request,
      metadata || {},
      methodDescriptor_EmailService_UnsubscribeEmail);
};


module.exports = proto.pnp.user.v1;

