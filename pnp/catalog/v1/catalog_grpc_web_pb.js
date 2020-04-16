/**
 * @fileoverview gRPC-Web generated client stub for pnp.catalog.v1
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
proto.pnp.catalog = {};
proto.pnp.catalog.v1 = require('./catalog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.catalog.v1.CatalogServiceClient =
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
proto.pnp.catalog.v1.CatalogServicePromiseClient =
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
 *   !proto.pnp.catalog.v1.ListSectionsResponse>}
 */
const methodDescriptor_CatalogService_ListSections = new grpc.web.MethodDescriptor(
  '/pnp.catalog.v1.CatalogService/ListSections',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.pnp.catalog.v1.ListSectionsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.ListSectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.catalog.v1.ListSectionsResponse>}
 */
const methodInfo_CatalogService_ListSections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.catalog.v1.ListSectionsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.ListSectionsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.catalog.v1.ListSectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.catalog.v1.ListSectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.catalog.v1.CatalogServiceClient.prototype.listSections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/ListSections',
      request,
      metadata || {},
      methodDescriptor_CatalogService_ListSections,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.catalog.v1.ListSectionsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.catalog.v1.CatalogServicePromiseClient.prototype.listSections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/ListSections',
      request,
      metadata || {},
      methodDescriptor_CatalogService_ListSections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.catalog.v1.GetFolderDetailsRequest,
 *   !proto.pnp.catalog.v1.FolderDetails>}
 */
const methodDescriptor_CatalogService_GetFolderDetails = new grpc.web.MethodDescriptor(
  '/pnp.catalog.v1.CatalogService/GetFolderDetails',
  grpc.web.MethodType.UNARY,
  proto.pnp.catalog.v1.GetFolderDetailsRequest,
  proto.pnp.catalog.v1.FolderDetails,
  /**
   * @param {!proto.pnp.catalog.v1.GetFolderDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.FolderDetails.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.catalog.v1.GetFolderDetailsRequest,
 *   !proto.pnp.catalog.v1.FolderDetails>}
 */
const methodInfo_CatalogService_GetFolderDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.catalog.v1.FolderDetails,
  /**
   * @param {!proto.pnp.catalog.v1.GetFolderDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.FolderDetails.deserializeBinary
);


/**
 * @param {!proto.pnp.catalog.v1.GetFolderDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.catalog.v1.FolderDetails)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.catalog.v1.FolderDetails>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.catalog.v1.CatalogServiceClient.prototype.getFolderDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/GetFolderDetails',
      request,
      metadata || {},
      methodDescriptor_CatalogService_GetFolderDetails,
      callback);
};


/**
 * @param {!proto.pnp.catalog.v1.GetFolderDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.catalog.v1.FolderDetails>}
 *     A native promise that resolves to the response
 */
proto.pnp.catalog.v1.CatalogServicePromiseClient.prototype.getFolderDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/GetFolderDetails',
      request,
      metadata || {},
      methodDescriptor_CatalogService_GetFolderDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.catalog.v1.GetVideoDetailsRequest,
 *   !proto.pnp.catalog.v1.VideoDetails>}
 */
const methodDescriptor_CatalogService_GetVideoDetails = new grpc.web.MethodDescriptor(
  '/pnp.catalog.v1.CatalogService/GetVideoDetails',
  grpc.web.MethodType.UNARY,
  proto.pnp.catalog.v1.GetVideoDetailsRequest,
  proto.pnp.catalog.v1.VideoDetails,
  /**
   * @param {!proto.pnp.catalog.v1.GetVideoDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.VideoDetails.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.catalog.v1.GetVideoDetailsRequest,
 *   !proto.pnp.catalog.v1.VideoDetails>}
 */
const methodInfo_CatalogService_GetVideoDetails = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.catalog.v1.VideoDetails,
  /**
   * @param {!proto.pnp.catalog.v1.GetVideoDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.VideoDetails.deserializeBinary
);


/**
 * @param {!proto.pnp.catalog.v1.GetVideoDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.catalog.v1.VideoDetails)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.catalog.v1.VideoDetails>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.catalog.v1.CatalogServiceClient.prototype.getVideoDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/GetVideoDetails',
      request,
      metadata || {},
      methodDescriptor_CatalogService_GetVideoDetails,
      callback);
};


/**
 * @param {!proto.pnp.catalog.v1.GetVideoDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.catalog.v1.VideoDetails>}
 *     A native promise that resolves to the response
 */
proto.pnp.catalog.v1.CatalogServicePromiseClient.prototype.getVideoDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/GetVideoDetails',
      request,
      metadata || {},
      methodDescriptor_CatalogService_GetVideoDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.catalog.v1.ListProductsResponse>}
 */
const methodDescriptor_CatalogService_ListProducts = new grpc.web.MethodDescriptor(
  '/pnp.catalog.v1.CatalogService/ListProducts',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.pnp.catalog.v1.ListProductsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.ListProductsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.catalog.v1.ListProductsResponse>}
 */
const methodInfo_CatalogService_ListProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.catalog.v1.ListProductsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.catalog.v1.ListProductsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.catalog.v1.ListProductsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.catalog.v1.ListProductsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.catalog.v1.CatalogServiceClient.prototype.listProducts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/ListProducts',
      request,
      metadata || {},
      methodDescriptor_CatalogService_ListProducts,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.catalog.v1.ListProductsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.catalog.v1.CatalogServicePromiseClient.prototype.listProducts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.catalog.v1.CatalogService/ListProducts',
      request,
      metadata || {},
      methodDescriptor_CatalogService_ListProducts);
};


module.exports = proto.pnp.catalog.v1;

