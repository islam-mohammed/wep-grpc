/**
 * @fileoverview gRPC-Web generated client stub for pnp.form.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.form = {};
proto.pnp.form.v1 = require('./suggested_name_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.form.v1.SuggestedNameServiceClient =
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
proto.pnp.form.v1.SuggestedNameServicePromiseClient =
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
 *   !proto.pnp.form.v1.SubmitSuggestedNameRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_SuggestedNameService_SubmitSuggestedName = new grpc.web.MethodDescriptor(
  '/pnp.form.v1.SuggestedNameService/SubmitSuggestedName',
  grpc.web.MethodType.UNARY,
  proto.pnp.form.v1.SubmitSuggestedNameRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.form.v1.SubmitSuggestedNameRequest} request
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
 *   !proto.pnp.form.v1.SubmitSuggestedNameRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SuggestedNameService_SubmitSuggestedName = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.form.v1.SubmitSuggestedNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.form.v1.SubmitSuggestedNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.form.v1.SuggestedNameServiceClient.prototype.submitSuggestedName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.form.v1.SuggestedNameService/SubmitSuggestedName',
      request,
      metadata || {},
      methodDescriptor_SuggestedNameService_SubmitSuggestedName,
      callback);
};


/**
 * @param {!proto.pnp.form.v1.SubmitSuggestedNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.form.v1.SuggestedNameServicePromiseClient.prototype.submitSuggestedName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.form.v1.SuggestedNameService/SubmitSuggestedName',
      request,
      metadata || {},
      methodDescriptor_SuggestedNameService_SubmitSuggestedName);
};


module.exports = proto.pnp.form.v1;

