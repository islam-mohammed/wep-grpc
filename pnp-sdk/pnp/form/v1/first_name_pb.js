// source: pnp/form/v1/first_name.proto
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

goog.exportSymbol('proto.pnp.form.v1.FirstName', null, global);
goog.exportSymbol('proto.pnp.form.v1.FirstNameMatches', null, global);
goog.exportSymbol('proto.pnp.form.v1.FirstNameMatches.Section', null, global);
goog.exportSymbol('proto.pnp.form.v1.GetFirstNameRequest', null, global);
goog.exportSymbol('proto.pnp.form.v1.MatchFirstNameRequest', null, global);
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
proto.pnp.form.v1.MatchFirstNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pnp.form.v1.MatchFirstNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.form.v1.MatchFirstNameRequest.displayName = 'proto.pnp.form.v1.MatchFirstNameRequest';
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
proto.pnp.form.v1.GetFirstNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pnp.form.v1.GetFirstNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.form.v1.GetFirstNameRequest.displayName = 'proto.pnp.form.v1.GetFirstNameRequest';
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
proto.pnp.form.v1.FirstName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pnp.form.v1.FirstName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.form.v1.FirstName.displayName = 'proto.pnp.form.v1.FirstName';
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
proto.pnp.form.v1.FirstNameMatches = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pnp.form.v1.FirstNameMatches.repeatedFields_, null);
};
goog.inherits(proto.pnp.form.v1.FirstNameMatches, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.form.v1.FirstNameMatches.displayName = 'proto.pnp.form.v1.FirstNameMatches';
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
proto.pnp.form.v1.FirstNameMatches.Section = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pnp.form.v1.FirstNameMatches.Section.repeatedFields_, null);
};
goog.inherits(proto.pnp.form.v1.FirstNameMatches.Section, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pnp.form.v1.FirstNameMatches.Section.displayName = 'proto.pnp.form.v1.FirstNameMatches.Section';
}



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
proto.pnp.form.v1.MatchFirstNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.form.v1.MatchFirstNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.MatchFirstNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pnp.form.v1.MatchFirstNameRequest}
 */
proto.pnp.form.v1.MatchFirstNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.form.v1.MatchFirstNameRequest;
  return proto.pnp.form.v1.MatchFirstNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.form.v1.MatchFirstNameRequest}
 */
proto.pnp.form.v1.MatchFirstNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.pnp.form.v1.MatchFirstNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.form.v1.MatchFirstNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.form.v1.MatchFirstNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.MatchFirstNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pnp.form.v1.MatchFirstNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.MatchFirstNameRequest} returns this
 */
proto.pnp.form.v1.MatchFirstNameRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





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
proto.pnp.form.v1.GetFirstNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.form.v1.GetFirstNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.form.v1.GetFirstNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.GetFirstNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pnp.form.v1.GetFirstNameRequest}
 */
proto.pnp.form.v1.GetFirstNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.form.v1.GetFirstNameRequest;
  return proto.pnp.form.v1.GetFirstNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.form.v1.GetFirstNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.form.v1.GetFirstNameRequest}
 */
proto.pnp.form.v1.GetFirstNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.pnp.form.v1.GetFirstNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.form.v1.GetFirstNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.form.v1.GetFirstNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.GetFirstNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.pnp.form.v1.GetFirstNameRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.GetFirstNameRequest} returns this
 */
proto.pnp.form.v1.GetFirstNameRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





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
proto.pnp.form.v1.FirstName.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.form.v1.FirstName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.form.v1.FirstName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstName.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assetUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.pnp.form.v1.FirstName}
 */
proto.pnp.form.v1.FirstName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.form.v1.FirstName;
  return proto.pnp.form.v1.FirstName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.form.v1.FirstName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.form.v1.FirstName}
 */
proto.pnp.form.v1.FirstName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAssetUrl(value);
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
proto.pnp.form.v1.FirstName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.form.v1.FirstName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.form.v1.FirstName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAssetUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.pnp.form.v1.FirstName.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.FirstName} returns this
 */
proto.pnp.form.v1.FirstName.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pnp.form.v1.FirstName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.FirstName} returns this
 */
proto.pnp.form.v1.FirstName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string asset_url = 3;
 * @return {string}
 */
proto.pnp.form.v1.FirstName.prototype.getAssetUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.FirstName} returns this
 */
proto.pnp.form.v1.FirstName.prototype.setAssetUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pnp.form.v1.FirstNameMatches.repeatedFields_ = [1];



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
proto.pnp.form.v1.FirstNameMatches.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.form.v1.FirstNameMatches.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.form.v1.FirstNameMatches} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstNameMatches.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchesList: jspb.Message.toObjectList(msg.getMatchesList(),
    proto.pnp.form.v1.FirstNameMatches.Section.toObject, includeInstance)
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
 * @return {!proto.pnp.form.v1.FirstNameMatches}
 */
proto.pnp.form.v1.FirstNameMatches.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.form.v1.FirstNameMatches;
  return proto.pnp.form.v1.FirstNameMatches.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.form.v1.FirstNameMatches} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.form.v1.FirstNameMatches}
 */
proto.pnp.form.v1.FirstNameMatches.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pnp.form.v1.FirstNameMatches.Section;
      reader.readMessage(value,proto.pnp.form.v1.FirstNameMatches.Section.deserializeBinaryFromReader);
      msg.addMatches(value);
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
proto.pnp.form.v1.FirstNameMatches.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.form.v1.FirstNameMatches.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.form.v1.FirstNameMatches} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstNameMatches.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pnp.form.v1.FirstNameMatches.Section.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pnp.form.v1.FirstNameMatches.Section.repeatedFields_ = [2];



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
proto.pnp.form.v1.FirstNameMatches.Section.prototype.toObject = function(opt_includeInstance) {
  return proto.pnp.form.v1.FirstNameMatches.Section.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pnp.form.v1.FirstNameMatches.Section} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstNameMatches.Section.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstNamesList: jspb.Message.toObjectList(msg.getFirstNamesList(),
    proto.pnp.form.v1.FirstName.toObject, includeInstance)
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
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section}
 */
proto.pnp.form.v1.FirstNameMatches.Section.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pnp.form.v1.FirstNameMatches.Section;
  return proto.pnp.form.v1.FirstNameMatches.Section.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pnp.form.v1.FirstNameMatches.Section} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section}
 */
proto.pnp.form.v1.FirstNameMatches.Section.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.pnp.form.v1.FirstName;
      reader.readMessage(value,proto.pnp.form.v1.FirstName.deserializeBinaryFromReader);
      msg.addFirstNames(value);
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
proto.pnp.form.v1.FirstNameMatches.Section.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pnp.form.v1.FirstNameMatches.Section.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pnp.form.v1.FirstNameMatches.Section} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pnp.form.v1.FirstNameMatches.Section.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstNamesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pnp.form.v1.FirstName.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pnp.form.v1.FirstNameMatches.Section.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section} returns this
 */
proto.pnp.form.v1.FirstNameMatches.Section.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated FirstName first_names = 2;
 * @return {!Array<!proto.pnp.form.v1.FirstName>}
 */
proto.pnp.form.v1.FirstNameMatches.Section.prototype.getFirstNamesList = function() {
  return /** @type{!Array<!proto.pnp.form.v1.FirstName>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pnp.form.v1.FirstName, 2));
};


/**
 * @param {!Array<!proto.pnp.form.v1.FirstName>} value
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section} returns this
*/
proto.pnp.form.v1.FirstNameMatches.Section.prototype.setFirstNamesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pnp.form.v1.FirstName=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pnp.form.v1.FirstName}
 */
proto.pnp.form.v1.FirstNameMatches.Section.prototype.addFirstNames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pnp.form.v1.FirstName, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section} returns this
 */
proto.pnp.form.v1.FirstNameMatches.Section.prototype.clearFirstNamesList = function() {
  return this.setFirstNamesList([]);
};


/**
 * repeated Section matches = 1;
 * @return {!Array<!proto.pnp.form.v1.FirstNameMatches.Section>}
 */
proto.pnp.form.v1.FirstNameMatches.prototype.getMatchesList = function() {
  return /** @type{!Array<!proto.pnp.form.v1.FirstNameMatches.Section>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pnp.form.v1.FirstNameMatches.Section, 1));
};


/**
 * @param {!Array<!proto.pnp.form.v1.FirstNameMatches.Section>} value
 * @return {!proto.pnp.form.v1.FirstNameMatches} returns this
*/
proto.pnp.form.v1.FirstNameMatches.prototype.setMatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pnp.form.v1.FirstNameMatches.Section=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pnp.form.v1.FirstNameMatches.Section}
 */
proto.pnp.form.v1.FirstNameMatches.prototype.addMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pnp.form.v1.FirstNameMatches.Section, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pnp.form.v1.FirstNameMatches} returns this
 */
proto.pnp.form.v1.FirstNameMatches.prototype.clearMatchesList = function() {
  return this.setMatchesList([]);
};


goog.object.extend(exports, proto.pnp.form.v1);