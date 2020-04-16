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
proto.pnp.form.v1 = require('./form_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.form.v1.FormServiceClient =
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
proto.pnp.form.v1.FormServicePromiseClient =
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
 *   !proto.pnp.form.v1.GetFormRequest,
 *   !proto.pnp.form.v1.Form>}
 */
const methodDescriptor_FormService_GetForm = new grpc.web.MethodDescriptor(
  '/pnp.form.v1.FormService/GetForm',
  grpc.web.MethodType.UNARY,
  proto.pnp.form.v1.GetFormRequest,
  proto.pnp.form.v1.Form,
  /**
   * @param {!proto.pnp.form.v1.GetFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.Form.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.form.v1.GetFormRequest,
 *   !proto.pnp.form.v1.Form>}
 */
const methodInfo_FormService_GetForm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.form.v1.Form,
  /**
   * @param {!proto.pnp.form.v1.GetFormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.form.v1.Form.deserializeBinary
);


/**
 * @param {!proto.pnp.form.v1.GetFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.form.v1.Form)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.form.v1.Form>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.form.v1.FormServiceClient.prototype.getForm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.form.v1.FormService/GetForm',
      request,
      metadata || {},
      methodDescriptor_FormService_GetForm,
      callback);
};


/**
 * @param {!proto.pnp.form.v1.GetFormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.form.v1.Form>}
 *     A native promise that resolves to the response
 */
proto.pnp.form.v1.FormServicePromiseClient.prototype.getForm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.form.v1.FormService/GetForm',
      request,
      metadata || {},
      methodDescriptor_FormService_GetForm);
};


module.exports = proto.pnp.form.v1;

