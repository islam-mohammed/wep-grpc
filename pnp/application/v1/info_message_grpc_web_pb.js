/**
 * @fileoverview gRPC-Web generated client stub for pnp.application.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.application = {};
proto.pnp.application.v1 = require('./info_message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.application.v1.InfoMessageServiceClient =
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
proto.pnp.application.v1.InfoMessageServicePromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.application.v1.ListInfoMessagesResponse>}
 */
const methodDescriptor_InfoMessageService_ListInfoMessages = new grpc.web.MethodDescriptor(
  '/pnp.application.v1.InfoMessageService/ListInfoMessages',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.pnp.application.v1.ListInfoMessagesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.ListInfoMessagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.application.v1.ListInfoMessagesResponse>}
 */
const methodInfo_InfoMessageService_ListInfoMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.application.v1.ListInfoMessagesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.ListInfoMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.application.v1.ListInfoMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.application.v1.ListInfoMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.application.v1.InfoMessageServiceClient.prototype.listInfoMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.application.v1.InfoMessageService/ListInfoMessages',
      request,
      metadata || {},
      methodDescriptor_InfoMessageService_ListInfoMessages,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.application.v1.ListInfoMessagesResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.application.v1.InfoMessageServicePromiseClient.prototype.listInfoMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.application.v1.InfoMessageService/ListInfoMessages',
      request,
      metadata || {},
      methodDescriptor_InfoMessageService_ListInfoMessages);
};


module.exports = proto.pnp.application.v1;

