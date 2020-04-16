/**
 * @fileoverview gRPC-Web generated client stub for pnp.application.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pnp = {};
proto.pnp.application = {};
proto.pnp.application.v1 = require('./asset_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.application.v1.AssetServiceClient =
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
proto.pnp.application.v1.AssetServicePromiseClient =
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
 *   !proto.pnp.application.v1.ListAssetsRequest,
 *   !proto.pnp.application.v1.ListAssetsResponse>}
 */
const methodDescriptor_AssetService_ListAssets = new grpc.web.MethodDescriptor(
  '/pnp.application.v1.AssetService/ListAssets',
  grpc.web.MethodType.UNARY,
  proto.pnp.application.v1.ListAssetsRequest,
  proto.pnp.application.v1.ListAssetsResponse,
  /**
   * @param {!proto.pnp.application.v1.ListAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.ListAssetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.application.v1.ListAssetsRequest,
 *   !proto.pnp.application.v1.ListAssetsResponse>}
 */
const methodInfo_AssetService_ListAssets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.application.v1.ListAssetsResponse,
  /**
   * @param {!proto.pnp.application.v1.ListAssetsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.application.v1.ListAssetsResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.application.v1.ListAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.application.v1.ListAssetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.application.v1.ListAssetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.application.v1.AssetServiceClient.prototype.listAssets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.application.v1.AssetService/ListAssets',
      request,
      metadata || {},
      methodDescriptor_AssetService_ListAssets,
      callback);
};


/**
 * @param {!proto.pnp.application.v1.ListAssetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.application.v1.ListAssetsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.application.v1.AssetServicePromiseClient.prototype.listAssets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.application.v1.AssetService/ListAssets',
      request,
      metadata || {},
      methodDescriptor_AssetService_ListAssets);
};


module.exports = proto.pnp.application.v1;

