/**
 * @fileoverview gRPC-Web generated client stub for pnp.perso_item.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var pnp_phone_call_v1_phone_call_pb = require('../../../pnp/phone_call/v1/phone_call_pb.js')
const proto = {};
proto.pnp = {};
proto.pnp.perso_item = {};
proto.pnp.perso_item.v1 = require('./perso_item_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pnp.perso_item.v1.PersoItemServiceClient =
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
proto.pnp.perso_item.v1.PersoItemServicePromiseClient =
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
 *   !proto.pnp.perso_item.v1.ListPersoItemsRequest,
 *   !proto.pnp.perso_item.v1.ListPersoItemsResponse>}
 */
const methodDescriptor_PersoItemService_ListPersoItems = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/ListPersoItems',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.ListPersoItemsRequest,
  proto.pnp.perso_item.v1.ListPersoItemsResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.ListPersoItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.ListPersoItemsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.ListPersoItemsRequest,
 *   !proto.pnp.perso_item.v1.ListPersoItemsResponse>}
 */
const methodInfo_PersoItemService_ListPersoItems = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.ListPersoItemsResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.ListPersoItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.ListPersoItemsResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.ListPersoItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.ListPersoItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.ListPersoItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.listPersoItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/ListPersoItems',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_ListPersoItems,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.ListPersoItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.ListPersoItemsResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.listPersoItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/ListPersoItems',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_ListPersoItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.GetPersoItemRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodDescriptor_PersoItemService_GetPersoItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/GetPersoItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.GetPersoItemRequest,
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.GetPersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.GetPersoItemRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodInfo_PersoItemService_GetPersoItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.GetPersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.GetPersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.PersoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.PersoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.getPersoItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetPersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetPersoItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.GetPersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.PersoItem>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.getPersoItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetPersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetPersoItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.GetPersoDataRequest,
 *   !proto.pnp.perso_item.v1.GetPersoDataResponse>}
 */
const methodDescriptor_PersoItemService_GetPersoData = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/GetPersoData',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.GetPersoDataRequest,
  proto.pnp.perso_item.v1.GetPersoDataResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.GetPersoDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.GetPersoDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.GetPersoDataRequest,
 *   !proto.pnp.perso_item.v1.GetPersoDataResponse>}
 */
const methodInfo_PersoItemService_GetPersoData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.GetPersoDataResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.GetPersoDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.GetPersoDataResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.GetPersoDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.GetPersoDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.GetPersoDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.getPersoData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetPersoData',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetPersoData,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.GetPersoDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.GetPersoDataResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.getPersoData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetPersoData',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetPersoData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.CreatePersoItemRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodDescriptor_PersoItemService_CreatePersoItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/CreatePersoItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.CreatePersoItemRequest,
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.CreatePersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.CreatePersoItemRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodInfo_PersoItemService_CreatePersoItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.CreatePersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.CreatePersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.PersoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.PersoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.createPersoItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/CreatePersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_CreatePersoItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.CreatePersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.PersoItem>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.createPersoItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/CreatePersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_CreatePersoItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.UpdatePersoDataRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodDescriptor_PersoItemService_UpdatePersoData = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/UpdatePersoData',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.UpdatePersoDataRequest,
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.UpdatePersoDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.UpdatePersoDataRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodInfo_PersoItemService_UpdatePersoData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.UpdatePersoDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.UpdatePersoDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.PersoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.PersoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.updatePersoData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/UpdatePersoData',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_UpdatePersoData,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.UpdatePersoDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.PersoItem>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.updatePersoData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/UpdatePersoData',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_UpdatePersoData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.DeletePersoItemRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PersoItemService_DeletePersoItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/DeletePersoItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.DeletePersoItemRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.DeletePersoItemRequest} request
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
 *   !proto.pnp.perso_item.v1.DeletePersoItemRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PersoItemService_DeletePersoItem = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.DeletePersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.DeletePersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.deletePersoItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/DeletePersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_DeletePersoItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.DeletePersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.deletePersoItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/DeletePersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_DeletePersoItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.IncrementViewRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PersoItemService_IncrementView = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/IncrementView',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.IncrementViewRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.IncrementViewRequest} request
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
 *   !proto.pnp.perso_item.v1.IncrementViewRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PersoItemService_IncrementView = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.IncrementViewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.IncrementViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.incrementView =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/IncrementView',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_IncrementView,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.IncrementViewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.incrementView =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/IncrementView',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_IncrementView);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.ToggleKidSectionRequest,
 *   !proto.pnp.perso_item.v1.ToggleKidSectionResponse>}
 */
const methodDescriptor_PersoItemService_ToggleKidSection = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/ToggleKidSection',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.ToggleKidSectionRequest,
  proto.pnp.perso_item.v1.ToggleKidSectionResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.ToggleKidSectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.ToggleKidSectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.ToggleKidSectionRequest,
 *   !proto.pnp.perso_item.v1.ToggleKidSectionResponse>}
 */
const methodInfo_PersoItemService_ToggleKidSection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.ToggleKidSectionResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.ToggleKidSectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.ToggleKidSectionResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.ToggleKidSectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.ToggleKidSectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.ToggleKidSectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.toggleKidSection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/ToggleKidSection',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_ToggleKidSection,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.ToggleKidSectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.ToggleKidSectionResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.toggleKidSection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/ToggleKidSection',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_ToggleKidSection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.FlattenPersoItemRequest,
 *   !proto.pnp.perso_item.v1.FlattenPersoItemResponse>}
 */
const methodDescriptor_PersoItemService_FlattenPersoItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/FlattenPersoItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.FlattenPersoItemRequest,
  proto.pnp.perso_item.v1.FlattenPersoItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.FlattenPersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.FlattenPersoItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.FlattenPersoItemRequest,
 *   !proto.pnp.perso_item.v1.FlattenPersoItemResponse>}
 */
const methodInfo_PersoItemService_FlattenPersoItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.FlattenPersoItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.FlattenPersoItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.FlattenPersoItemResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.FlattenPersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.FlattenPersoItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.FlattenPersoItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.flattenPersoItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/FlattenPersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_FlattenPersoItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.FlattenPersoItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.FlattenPersoItemResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.flattenPersoItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/FlattenPersoItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_FlattenPersoItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.CreateReactionRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodDescriptor_PersoItemService_CreateReaction = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/CreateReaction',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.CreateReactionRequest,
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.CreateReactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.CreateReactionRequest,
 *   !proto.pnp.perso_item.v1.PersoItem>}
 */
const methodInfo_PersoItemService_CreateReaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.PersoItem,
  /**
   * @param {!proto.pnp.perso_item.v1.CreateReactionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.PersoItem.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.CreateReactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.PersoItem)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.PersoItem>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.createReaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/CreateReaction',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_CreateReaction,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.CreateReactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.PersoItem>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.createReaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/CreateReaction',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_CreateReaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.GetEmailTemplatesRequest,
 *   !proto.pnp.perso_item.v1.GetEmailTemplatesResponse>}
 */
const methodDescriptor_PersoItemService_GetEmailTemplates = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/GetEmailTemplates',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.GetEmailTemplatesRequest,
  proto.pnp.perso_item.v1.GetEmailTemplatesResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.GetEmailTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.GetEmailTemplatesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.GetEmailTemplatesRequest,
 *   !proto.pnp.perso_item.v1.GetEmailTemplatesResponse>}
 */
const methodInfo_PersoItemService_GetEmailTemplates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.GetEmailTemplatesResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.GetEmailTemplatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.GetEmailTemplatesResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.GetEmailTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.GetEmailTemplatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.GetEmailTemplatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.getEmailTemplates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetEmailTemplates',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetEmailTemplates,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.GetEmailTemplatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.GetEmailTemplatesResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.getEmailTemplates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetEmailTemplates',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetEmailTemplates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.SendEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PersoItemService_SendEmail = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/SendEmail',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.SendEmailRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.SendEmailRequest} request
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
 *   !proto.pnp.perso_item.v1.SendEmailRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PersoItemService_SendEmail = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pnp.perso_item.v1.SendEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.SendEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.sendEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/SendEmail',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_SendEmail,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.SendEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.sendEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/SendEmail',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_SendEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.SharedItemRequest,
 *   !proto.pnp.perso_item.v1.SharedItemResponse>}
 */
const methodDescriptor_PersoItemService_GetSharedItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/GetSharedItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.SharedItemRequest,
  proto.pnp.perso_item.v1.SharedItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.SharedItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.SharedItemRequest,
 *   !proto.pnp.perso_item.v1.SharedItemResponse>}
 */
const methodInfo_PersoItemService_GetSharedItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.SharedItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.SharedItemResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.SharedItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.SharedItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.getSharedItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetSharedItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetSharedItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.SharedItemResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.getSharedItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/GetSharedItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_GetSharedItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pnp.perso_item.v1.SharedItemRequest,
 *   !proto.pnp.perso_item.v1.SharedItemResponse>}
 */
const methodDescriptor_PersoItemService_FlattenSharedItem = new grpc.web.MethodDescriptor(
  '/pnp.perso_item.v1.PersoItemService/FlattenSharedItem',
  grpc.web.MethodType.UNARY,
  proto.pnp.perso_item.v1.SharedItemRequest,
  proto.pnp.perso_item.v1.SharedItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.SharedItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pnp.perso_item.v1.SharedItemRequest,
 *   !proto.pnp.perso_item.v1.SharedItemResponse>}
 */
const methodInfo_PersoItemService_FlattenSharedItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pnp.perso_item.v1.SharedItemResponse,
  /**
   * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pnp.perso_item.v1.SharedItemResponse.deserializeBinary
);


/**
 * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pnp.perso_item.v1.SharedItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pnp.perso_item.v1.SharedItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pnp.perso_item.v1.PersoItemServiceClient.prototype.flattenSharedItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/FlattenSharedItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_FlattenSharedItem,
      callback);
};


/**
 * @param {!proto.pnp.perso_item.v1.SharedItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pnp.perso_item.v1.SharedItemResponse>}
 *     A native promise that resolves to the response
 */
proto.pnp.perso_item.v1.PersoItemServicePromiseClient.prototype.flattenSharedItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pnp.perso_item.v1.PersoItemService/FlattenSharedItem',
      request,
      metadata || {},
      methodDescriptor_PersoItemService_FlattenSharedItem);
};


module.exports = proto.pnp.perso_item.v1;

