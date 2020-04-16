/**
 * @fileoverview gRPC-Web generated client stub for pnp.application.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.application = {};
proto.pnp.application.v1 = require('./config_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.application.v1.ConfigServiceClient =
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
proto.pnp.application.v1.ConfigServicePromiseClient =
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
 *   !proto.pnp.application.v1.GetConfigRequest,
 *   !proto.pnp.application.v1.Config>}
 */
const methodDescriptor_ConfigService_GetConfig = new grpc.web.MethodDescriptor(
  '/pnp.application.v1.ConfigService/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.pnp.application.v1.GetConfigRequest,
  proto.pnp.application.v1.Config,
  /**
   * @param {!proto.pnp.application.v1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.Config.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.application.v1.GetConfigRequest,
 *   !proto.pnp.application.v1.Config>}
 */
const methodInfo_ConfigService_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.application.v1.Config,
  /**
   * @param {!proto.pnp.application.v1.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.Config.deserializeBinary
);


/**
 * @param {!proto.pnp.application.v1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.application.v1.Config)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.application.v1.Config>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.application.v1.ConfigServiceClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.application.v1.ConfigService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_ConfigService_GetConfig,
      callback);
};


/**
 * @param {!proto.pnp.application.v1.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.application.v1.Config>}
 *     A native promise that resolves to the response
 */
proto.pnp.application.v1.ConfigServicePromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.application.v1.ConfigService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_ConfigService_GetConfig);
};


module.exports = proto.pnp.application.v1;

