/**
 * @fileoverview gRPC-Web generated client stub for pnp.file.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pnp = {};
proto.pnp.file = {};
proto.pnp.file.v1 = require('./file_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.file.v1.FileServiceClient =
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
proto.pnp.file.v1.FileServicePromiseClient =
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
 *   !proto.pnp.file.v1.GetFileRequest,
 *   !proto.pnp.file.v1.File>}
 */
const methodDescriptor_FileService_GetFile = new grpc.web.MethodDescriptor(
  '/pnp.file.v1.FileService/GetFile',
  grpc.web.MethodType.UNARY,
  proto.pnp.file.v1.GetFileRequest,
  proto.pnp.file.v1.File,
  /**
   * @param {!proto.pnp.file.v1.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.file.v1.File.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.file.v1.GetFileRequest,
 *   !proto.pnp.file.v1.File>}
 */
const methodInfo_FileService_GetFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.file.v1.File,
  /**
   * @param {!proto.pnp.file.v1.GetFileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.file.v1.File.deserializeBinary
);


/**
 * @param {!proto.pnp.file.v1.GetFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.file.v1.File)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.file.v1.File>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.file.v1.FileServiceClient.prototype.getFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.file.v1.FileService/GetFile',
      request,
      metadata || {},
      methodDescriptor_FileService_GetFile,
      callback);
};


/**
 * @param {!proto.pnp.file.v1.GetFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.file.v1.File>}
 *     A native promise that resolves to the response
 */
proto.pnp.file.v1.FileServicePromiseClient.prototype.getFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.file.v1.FileService/GetFile',
      request,
      metadata || {},
      methodDescriptor_FileService_GetFile);
};


module.exports = proto.pnp.file.v1;

