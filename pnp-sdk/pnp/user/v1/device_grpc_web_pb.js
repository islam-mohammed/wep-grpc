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
proto.pnp.user.v1 = require('./device_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.user.v1.DeviceServiceClient =
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
proto.pnp.user.v1.DeviceServicePromiseClient =
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
 *   !proto.pnp.user.v1.SubscribeDeviceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DeviceService_SubscribeDevice = new grpc.web.MethodDescriptor(
  '/pnp.user.v1.DeviceService/SubscribeDevice',
  grpc.web.MethodType.UNARY,
  proto.pnp.user.v1.SubscribeDeviceRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.SubscribeDeviceRequest} request
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
 *   !proto.pnp.user.v1.SubscribeDeviceRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_DeviceService_SubscribeDevice = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.user.v1.SubscribeDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.user.v1.SubscribeDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.user.v1.DeviceServiceClient.prototype.subscribeDevice =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.user.v1.DeviceService/SubscribeDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SubscribeDevice,
      callback);
};


/**
 * @param {!proto.pnp.user.v1.SubscribeDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.user.v1.DeviceServicePromiseClient.prototype.subscribeDevice =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.user.v1.DeviceService/SubscribeDevice',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SubscribeDevice);
};


module.exports = proto.pnp.user.v1;
