/**
 * @fileoverview gRPC-Web generated client stub for pnp.recipient.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pnp_common_v1_locale_pb = require('../../../pnp/common/v1/locale_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.recipient = {};
proto.pnp.recipient.v1 = require('./recipient_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.recipient.v1.RecipientServiceClient =
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
proto.pnp.recipient.v1.RecipientServicePromiseClient =
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
 *   !proto.pnp.recipient.v1.ListRecipientsResponse>}
 */
const methodDescriptor_RecipientService_ListRecipients = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/ListRecipients',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.pnp.recipient.v1.ListRecipientsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.ListRecipientsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.pnp.recipient.v1.ListRecipientsResponse>}
 */
const methodInfo_RecipientService_ListRecipients = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.recipient.v1.ListRecipientsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.ListRecipientsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.recipient.v1.ListRecipientsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.recipient.v1.ListRecipientsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.listRecipients =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/ListRecipients',
      request,
      metadata || {},
      methodDescriptor_RecipientService_ListRecipients,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.recipient.v1.ListRecipientsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.listRecipients =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/ListRecipients',
      request,
      metadata || {},
      methodDescriptor_RecipientService_ListRecipients);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.recipient.v1.GetRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodDescriptor_RecipientService_GetRecipient = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/GetRecipient',
  grpc.web.MethodType.UNARY,
  proto.pnp.recipient.v1.GetRecipientRequest,
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.recipient.v1.GetRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodInfo_RecipientService_GetRecipient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.recipient.v1.Recipient)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.recipient.v1.Recipient>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.getRecipient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/GetRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_GetRecipient,
      callback);
};


/**
 * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.recipient.v1.Recipient>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.getRecipient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/GetRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_GetRecipient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.recipient.v1.GetRecipientRequest,
 *   !proto.pnp.recipient.v1.RecipientData>}
 */
const methodDescriptor_RecipientService_GetRecipientData = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/GetRecipientData',
  grpc.web.MethodType.UNARY,
  proto.pnp.recipient.v1.GetRecipientRequest,
  proto.pnp.recipient.v1.RecipientData,
  /**
   * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.RecipientData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.recipient.v1.GetRecipientRequest,
 *   !proto.pnp.recipient.v1.RecipientData>}
 */
const methodInfo_RecipientService_GetRecipientData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.recipient.v1.RecipientData,
  /**
   * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.RecipientData.deserializeBinary
);


/**
 * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.recipient.v1.RecipientData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.recipient.v1.RecipientData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.getRecipientData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/GetRecipientData',
      request,
      metadata || {},
      methodDescriptor_RecipientService_GetRecipientData,
      callback);
};


/**
 * @param {!proto.pnp.recipient.v1.GetRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.recipient.v1.RecipientData>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.getRecipientData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/GetRecipientData',
      request,
      metadata || {},
      methodDescriptor_RecipientService_GetRecipientData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.recipient.v1.CreateRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodDescriptor_RecipientService_CreateRecipient = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/CreateRecipient',
  grpc.web.MethodType.UNARY,
  proto.pnp.recipient.v1.CreateRecipientRequest,
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.CreateRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.recipient.v1.CreateRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodInfo_RecipientService_CreateRecipient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.CreateRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @param {!proto.pnp.recipient.v1.CreateRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.recipient.v1.Recipient)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.recipient.v1.Recipient>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.createRecipient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/CreateRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_CreateRecipient,
      callback);
};


/**
 * @param {!proto.pnp.recipient.v1.CreateRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.recipient.v1.Recipient>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.createRecipient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/CreateRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_CreateRecipient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.recipient.v1.UpdateRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodDescriptor_RecipientService_UpdateRecipient = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/UpdateRecipient',
  grpc.web.MethodType.UNARY,
  proto.pnp.recipient.v1.UpdateRecipientRequest,
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.UpdateRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.recipient.v1.UpdateRecipientRequest,
 *   !proto.pnp.recipient.v1.Recipient>}
 */
const methodInfo_RecipientService_UpdateRecipient = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.recipient.v1.Recipient,
  /**
   * @param {!proto.pnp.recipient.v1.UpdateRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.recipient.v1.Recipient.deserializeBinary
);


/**
 * @param {!proto.pnp.recipient.v1.UpdateRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.recipient.v1.Recipient)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.recipient.v1.Recipient>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.updateRecipient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/UpdateRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_UpdateRecipient,
      callback);
};


/**
 * @param {!proto.pnp.recipient.v1.UpdateRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.recipient.v1.Recipient>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.updateRecipient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/UpdateRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_UpdateRecipient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.recipient.v1.DeleteRecipientRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RecipientService_DeleteRecipient = new grpc.web.MethodDescriptor(
  '/pnp.recipient.v1.RecipientService/DeleteRecipient',
  grpc.web.MethodType.UNARY,
  proto.pnp.recipient.v1.DeleteRecipientRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.recipient.v1.DeleteRecipientRequest} request
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
 *   !proto.pnp.recipient.v1.DeleteRecipientRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RecipientService_DeleteRecipient = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.recipient.v1.DeleteRecipientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.recipient.v1.DeleteRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.recipient.v1.RecipientServiceClient.prototype.deleteRecipient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/DeleteRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_DeleteRecipient,
      callback);
};


/**
 * @param {!proto.pnp.recipient.v1.DeleteRecipientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.recipient.v1.RecipientServicePromiseClient.prototype.deleteRecipient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.recipient.v1.RecipientService/DeleteRecipient',
      request,
      metadata || {},
      methodDescriptor_RecipientService_DeleteRecipient);
};


module.exports = proto.pnp.recipient.v1;

