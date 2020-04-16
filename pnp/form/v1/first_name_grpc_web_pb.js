/**
 * @fileoverview gRPC-Web generated client stub for pnp.form.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pnp = {};
proto.pnp.form = {};
proto.pnp.form.v1 = require('./first_name_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.form.v1.FirstNameServiceClient =
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
proto.pnp.form.v1.FirstNameServicePromiseClient =
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
 *   !proto.pnp.form.v1.MatchFirstNameRequest,
 *   !proto.pnp.form.v1.FirstName>}
 */
const methodDescriptor_FirstNameService_MatchFirstName = new grpc.web.MethodDescriptor(
  '/pnp.form.v1.FirstNameService/MatchFirstName',
  grpc.web.MethodType.UNARY,
  proto.pnp.form.v1.MatchFirstNameRequest,
  proto.pnp.form.v1.FirstName,
  /**
   * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstName.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.form.v1.MatchFirstNameRequest,
 *   !proto.pnp.form.v1.FirstName>}
 */
const methodInfo_FirstNameService_MatchFirstName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.form.v1.FirstName,
  /**
   * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstName.deserializeBinary
);


/**
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.form.v1.FirstName)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.form.v1.FirstName>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.form.v1.FirstNameServiceClient.prototype.matchFirstName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/MatchFirstName',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_MatchFirstName,
      callback);
};


/**
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.form.v1.FirstName>}
 *     A native promise that resolves to the response
 */
proto.pnp.form.v1.FirstNameServicePromiseClient.prototype.matchFirstName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/MatchFirstName',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_MatchFirstName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.form.v1.GetFirstNameRequest,
 *   !proto.pnp.form.v1.FirstName>}
 */
const methodDescriptor_FirstNameService_GetFirstName = new grpc.web.MethodDescriptor(
  '/pnp.form.v1.FirstNameService/GetFirstName',
  grpc.web.MethodType.UNARY,
  proto.pnp.form.v1.GetFirstNameRequest,
  proto.pnp.form.v1.FirstName,
  /**
   * @param {!proto.pnp.form.v1.GetFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstName.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.form.v1.GetFirstNameRequest,
 *   !proto.pnp.form.v1.FirstName>}
 */
const methodInfo_FirstNameService_GetFirstName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.form.v1.FirstName,
  /**
   * @param {!proto.pnp.form.v1.GetFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstName.deserializeBinary
);


/**
 * @param {!proto.pnp.form.v1.GetFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.form.v1.FirstName)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.form.v1.FirstName>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.form.v1.FirstNameServiceClient.prototype.getFirstName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/GetFirstName',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_GetFirstName,
      callback);
};


/**
 * @param {!proto.pnp.form.v1.GetFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.form.v1.FirstName>}
 *     A native promise that resolves to the response
 */
proto.pnp.form.v1.FirstNameServicePromiseClient.prototype.getFirstName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/GetFirstName',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_GetFirstName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.form.v1.MatchFirstNameRequest,
 *   !proto.pnp.form.v1.FirstNameMatches>}
 */
const methodDescriptor_FirstNameService_ListFirstNameMatches = new grpc.web.MethodDescriptor(
  '/pnp.form.v1.FirstNameService/ListFirstNameMatches',
  grpc.web.MethodType.UNARY,
  proto.pnp.form.v1.MatchFirstNameRequest,
  proto.pnp.form.v1.FirstNameMatches,
  /**
   * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstNameMatches.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.form.v1.MatchFirstNameRequest,
 *   !proto.pnp.form.v1.FirstNameMatches>}
 */
const methodInfo_FirstNameService_ListFirstNameMatches = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.form.v1.FirstNameMatches,
  /**
   * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.FirstNameMatches.deserializeBinary
);


/**
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.form.v1.FirstNameMatches)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.form.v1.FirstNameMatches>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.form.v1.FirstNameServiceClient.prototype.listFirstNameMatches =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/ListFirstNameMatches',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_ListFirstNameMatches,
      callback);
};


/**
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.form.v1.FirstNameMatches>}
 *     A native promise that resolves to the response
 */
proto.pnp.form.v1.FirstNameServicePromiseClient.prototype.listFirstNameMatches =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.form.v1.FirstNameService/ListFirstNameMatches',
      request,
      metadata || {},
      methodDescriptor_FirstNameService_ListFirstNameMatches);
};


module.exports = proto.pnp.form.v1;

