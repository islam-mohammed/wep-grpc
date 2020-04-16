/**
 * @fileoverview gRPC-Web generated client stub for pnp.phone_call.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.phone_call = {};
proto.pnp.phone_call.v1 = require('./phone_call_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient =
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
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient =
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
 *   !proto.pnp.phone_call.v1.ListPhoneCallsRequest,
 *   !proto.pnp.phone_call.v1.ListPhoneCallsResponse>}
 */
const methodDescriptor_PhoneCallService_ListPhoneCalls = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/ListPhoneCalls',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.ListPhoneCallsRequest,
  proto.pnp.phone_call.v1.ListPhoneCallsResponse,
  /**
   * @param {!proto.pnp.phone_call.v1.ListPhoneCallsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.ListPhoneCallsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.phone_call.v1.ListPhoneCallsRequest,
 *   !proto.pnp.phone_call.v1.ListPhoneCallsResponse>}
 */
const methodInfo_PhoneCallService_ListPhoneCalls = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.phone_call.v1.ListPhoneCallsResponse,
  /**
   * @param {!proto.pnp.phone_call.v1.ListPhoneCallsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.ListPhoneCallsResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.ListPhoneCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.phone_call.v1.ListPhoneCallsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.phone_call.v1.ListPhoneCallsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.listPhoneCalls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/ListPhoneCalls',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_ListPhoneCalls,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.ListPhoneCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.phone_call.v1.ListPhoneCallsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.listPhoneCalls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/ListPhoneCalls',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_ListPhoneCalls);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.phone_call.v1.GetPhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodDescriptor_PhoneCallService_GetPhoneCall = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/GetPhoneCall',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.GetPhoneCallRequest,
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.GetPhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.phone_call.v1.GetPhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodInfo_PhoneCallService_GetPhoneCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.GetPhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.GetPhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.phone_call.v1.PhoneCall)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.phone_call.v1.PhoneCall>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.getPhoneCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/GetPhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_GetPhoneCall,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.GetPhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.phone_call.v1.PhoneCall>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.getPhoneCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/GetPhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_GetPhoneCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.phone_call.v1.CreatePhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodDescriptor_PhoneCallService_CreatePhoneCall = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/CreatePhoneCall',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.CreatePhoneCallRequest,
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.CreatePhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.phone_call.v1.CreatePhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodInfo_PhoneCallService_CreatePhoneCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.CreatePhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.CreatePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.phone_call.v1.PhoneCall)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.phone_call.v1.PhoneCall>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.createPhoneCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/CreatePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_CreatePhoneCall,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.CreatePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.phone_call.v1.PhoneCall>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.createPhoneCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/CreatePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_CreatePhoneCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.phone_call.v1.UpdatePhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodDescriptor_PhoneCallService_UpdatePhoneCall = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/UpdatePhoneCall',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.UpdatePhoneCallRequest,
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.UpdatePhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.phone_call.v1.UpdatePhoneCallRequest,
 *   !proto.pnp.phone_call.v1.PhoneCall>}
 */
const methodInfo_PhoneCallService_UpdatePhoneCall = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.phone_call.v1.PhoneCall,
  /**
   * @param {!proto.pnp.phone_call.v1.UpdatePhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.PhoneCall.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.UpdatePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.phone_call.v1.PhoneCall)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.phone_call.v1.PhoneCall>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.updatePhoneCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/UpdatePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_UpdatePhoneCall,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.UpdatePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.phone_call.v1.PhoneCall>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.updatePhoneCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/UpdatePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_UpdatePhoneCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.phone_call.v1.DeletePhoneCallRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PhoneCallService_DeletePhoneCall = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/DeletePhoneCall',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.DeletePhoneCallRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.phone_call.v1.DeletePhoneCallRequest} request
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
 *   !proto.pnp.phone_call.v1.DeletePhoneCallRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PhoneCallService_DeletePhoneCall = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.phone_call.v1.DeletePhoneCallRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.DeletePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.deletePhoneCall =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/DeletePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_DeletePhoneCall,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.DeletePhoneCallRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.deletePhoneCall =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/DeletePhoneCall',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_DeletePhoneCall);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.phone_call.v1.VerifyPhoneNumberRequest,
 *   !proto.pnp.phone_call.v1.VerifyPhoneNumberResponse>}
 */
const methodDescriptor_PhoneCallService_VerifyPhoneNumber = new grpc.web.MethodDescriptor(
  '/pnp.phone_call.v1.PhoneCallService/VerifyPhoneNumber',
  grpc.web.MethodType.UNARY,
  proto.pnp.phone_call.v1.VerifyPhoneNumberRequest,
  proto.pnp.phone_call.v1.VerifyPhoneNumberResponse,
  /**
   * @param {!proto.pnp.phone_call.v1.VerifyPhoneNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.VerifyPhoneNumberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.phone_call.v1.VerifyPhoneNumberRequest,
 *   !proto.pnp.phone_call.v1.VerifyPhoneNumberResponse>}
 */
const methodInfo_PhoneCallService_VerifyPhoneNumber = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.phone_call.v1.VerifyPhoneNumberResponse,
  /**
   * @param {!proto.pnp.phone_call.v1.VerifyPhoneNumberRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.phone_call.v1.VerifyPhoneNumberResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.phone_call.v1.VerifyPhoneNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.phone_call.v1.VerifyPhoneNumberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.phone_call.v1.VerifyPhoneNumberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.phone_call.v1.PhoneCallServiceClient.prototype.verifyPhoneNumber =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/VerifyPhoneNumber',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_VerifyPhoneNumber,
      callback);
};


/**
 * @param {!proto.pnp.phone_call.v1.VerifyPhoneNumberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.phone_call.v1.VerifyPhoneNumberResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.phone_call.v1.PhoneCallServicePromiseClient.prototype.verifyPhoneNumber =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.phone_call.v1.PhoneCallService/VerifyPhoneNumber',
      request,
      metadata || {},
      methodDescriptor_PhoneCallService_VerifyPhoneNumber);
};


module.exports = proto.pnp.phone_call.v1;

