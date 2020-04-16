// source: pnp/application/v1/info_message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.pnp.application.v1.InfoMessage', null, global);
goog.exportSymbol('proto.pnp.application.v1.InfoMessage.Route', null, global);
goog.exportSymbol('proto.pnp.application.v1.InfoMessage.Type', null, global);
goog.exportSymbol('proto.pnp.application.v1.ListInfoMessagesResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pnp.application.v1.ListInfoMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pnp.application.v1.ListInfoMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.pnp.application.v1.ListInfoMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.application.v1.ListInfoMessagesResponse.displayName = 'proto.pnp.application.v1.ListInfoMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pnp.application.v1.InfoMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pnp.application.v1.InfoMessage.repeatedFields_, null);
};
goog.inherits(proto.pnp.application.v1.InfoMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.application.v1.InfoMessage.displayName = 'proto.pnp.application.v1.InfoMessage';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pnp.application.v1.ListInfoMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.application.v1.ListInfoMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.application.v1.ListInfoMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.application.v1.ListInfoMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    infoMessagesList: jspb.Message.toObjectList(msg.getInfoMessagesList(),
    proto.pnp.application.v1.InfoMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pnp.application.v1.ListInfoMessagesResponse}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.application.v1.ListInfoMessagesResponse;
  return proto.pnp.application.v1.ListInfoMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.application.v1.ListInfoMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.application.v1.ListInfoMessagesResponse}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pnp.application.v1.InfoMessage;
      reader.readMessage(value,proto.pnp.application.v1.InfoMessage.deserializeBinaryFromReader);
      msg.addInfoMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.application.v1.ListInfoMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.application.v1.ListInfoMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.application.v1.ListInfoMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfoMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pnp.application.v1.InfoMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InfoMessage info_messages = 1;
 * @return {!Array<!proto.pnp.application.v1.InfoMessage>}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.getInfoMessagesList = function() {
  return /** @type{!Array<!proto.pnp.application.v1.InfoMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pnp.application.v1.InfoMessage, 1));
};


/**
 * @param {!Array<!proto.pnp.application.v1.InfoMessage>} value
 * @return {!proto.pnp.application.v1.ListInfoMessagesResponse} returns this
*/
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.setInfoMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pnp.application.v1.InfoMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pnp.application.v1.InfoMessage}
 */
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.addInfoMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pnp.application.v1.InfoMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pnp.application.v1.ListInfoMessagesResponse} returns this
 */
proto.pnp.application.v1.ListInfoMessagesResponse.prototype.clearInfoMessagesList = function() {
  return this.setInfoMessagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pnp.application.v1.InfoMessage.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pnp.application.v1.InfoMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.application.v1.InfoMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.application.v1.InfoMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.application.v1.InfoMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    delayBeforeDisplay: (f = msg.getDelayBeforeDisplay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    color: jspb.Message.getFieldWithDefault(msg, 4, ""),
    title: jspb.Message.getFieldWithDefault(msg, 5, ""),
    body: jspb.Message.getFieldWithDefault(msg, 6, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 7, ""),
    routesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pnp.application.v1.InfoMessage}
 */
proto.pnp.application.v1.InfoMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.application.v1.InfoMessage;
  return proto.pnp.application.v1.InfoMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.application.v1.InfoMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.application.v1.InfoMessage}
 */
proto.pnp.application.v1.InfoMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.pnp.application.v1.InfoMessage.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDelayBeforeDisplay(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 8:
      var value = /** @type {!Array<!proto.pnp.application.v1.InfoMessage.Route>} */ (reader.readPackedEnum());
      msg.setRoutesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pnp.application.v1.InfoMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.application.v1.InfoMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.application.v1.InfoMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.application.v1.InfoMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDelayBeforeDisplay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.pnp.application.v1.InfoMessage.Type = {
  INFO: 0,
  WARNING: 1
};

/**
 * @enum {number}
 */
proto.pnp.application.v1.InfoMessage.Route = {
  HOME: 0,
  VIDEO: 1,
  CALL: 2,
  VIDEO_CALL: 3,
  MY_CREATION: 4,
  MY_ACCOUNT: 5,
  PLAYER: 6,
  KID: 7
};

/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.pnp.application.v1.InfoMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Type type = 2;
 * @return {!proto.pnp.application.v1.InfoMessage.Type}
 */
proto.pnp.application.v1.InfoMessage.prototype.getType = function() {
  return /** @type {!proto.pnp.application.v1.InfoMessage.Type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pnp.application.v1.InfoMessage.Type} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Duration delay_before_display = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.pnp.application.v1.InfoMessage.prototype.getDelayBeforeDisplay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
*/
proto.pnp.application.v1.InfoMessage.prototype.setDelayBeforeDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.clearDelayBeforeDisplay = function() {
  return this.setDelayBeforeDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pnp.application.v1.InfoMessage.prototype.hasDelayBeforeDisplay = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string color = 4;
 * @return {string}
 */
proto.pnp.application.v1.InfoMessage.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string title = 5;
 * @return {string}
 */
proto.pnp.application.v1.InfoMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string body = 6;
 * @return {string}
 */
proto.pnp.application.v1.InfoMessage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string icon = 7;
 * @return {string}
 */
proto.pnp.application.v1.InfoMessage.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Route routes = 8;
 * @return {!Array<!proto.pnp.application.v1.InfoMessage.Route>}
 */
proto.pnp.application.v1.InfoMessage.prototype.getRoutesList = function() {
  return /** @type {!Array<!proto.pnp.application.v1.InfoMessage.Route>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<!proto.pnp.application.v1.InfoMessage.Route>} value
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.setRoutesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.pnp.application.v1.InfoMessage.Route} value
 * @param {number=} opt_index
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.addRoutes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pnp.application.v1.InfoMessage} returns this
 */
proto.pnp.application.v1.InfoMessage.prototype.clearRoutesList = function() {
  return this.setRoutesList([]);
};


goog.object.extend(exports, proto.pnp.application.v1);
