/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js')

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js')

var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./intent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.IntentsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.IntentsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 *   !proto.ondewo.nlu.ListIntentsRequest,
 *   !proto.ondewo.nlu.ListIntentsResponse>}
 */
const methodDescriptor_Intents_ListIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListIntentsRequest,
  proto.ondewo.nlu.ListIntentsResponse,
  /**
   * @param {!proto.ondewo.nlu.ListIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListIntentsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_ListIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_GetIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/GetIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.GetIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.getIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.getIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_CreateIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/CreateIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.CreateIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.CreateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.createIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.CreateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.createIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/CreateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_CreateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateIntentRequest,
 *   !proto.ondewo.nlu.Intent>}
 */
const methodDescriptor_Intents_UpdateIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/UpdateIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.UpdateIntentRequest,
  proto.ondewo.nlu.Intent,
  /**
   * @param {!proto.ondewo.nlu.UpdateIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.Intent.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Intent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Intent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.updateIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.UpdateIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Intent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.updateIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/UpdateIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_UpdateIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteIntentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_DeleteIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/DeleteIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.DeleteIntentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.DeleteIntentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.deleteIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.DeleteIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.deleteIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateIntentsRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Intents_BatchUpdateIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchUpdateIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchUpdateIntentsRequest,
  ondewo_nlu_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ondewo_nlu_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchUpdateIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchUpdateIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchUpdateIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteIntentsRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Intents_BatchDeleteIntents = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchDeleteIntents',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchDeleteIntentsRequest,
  ondewo_nlu_operations_pb.Operation,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ondewo_nlu_operations_pb.Operation.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchDeleteIntents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchDeleteIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchDeleteIntents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteIntents',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteIntents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.IntentTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_TagIntent = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/TagIntent',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.IntentTagRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.IntentTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.IntentTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.tagIntent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/TagIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_TagIntent,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.IntentTagRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.tagIntent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/TagIntent',
      request,
      metadata || {},
      methodDescriptor_Intents_TagIntent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.IntentTagRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Intents_DeleteIntentTag = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/DeleteIntentTag',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.IntentTagRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.nlu.IntentTagRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.IntentTagRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.deleteIntentTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntentTag',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntentTag,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.IntentTagRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.deleteIntentTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/DeleteIntentTag',
      request,
      metadata || {},
      methodDescriptor_Intents_DeleteIntentTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetIntentTagsRequest,
 *   !proto.ondewo.nlu.GetIntentTagsResponse>}
 */
const methodDescriptor_Intents_GetIntentTags = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/GetIntentTags',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetIntentTagsRequest,
  proto.ondewo.nlu.GetIntentTagsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetIntentTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetIntentTagsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetIntentTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetIntentTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetIntentTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.getIntentTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntentTags',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntentTags,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetIntentTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetIntentTagsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.getIntentTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetIntentTags',
      request,
      metadata || {},
      methodDescriptor_Intents_GetIntentTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAllIntentTagsRequest,
 *   !proto.ondewo.nlu.GetIntentTagsResponse>}
 */
const methodDescriptor_Intents_GetAllIntentTags = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/GetAllIntentTags',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.GetAllIntentTagsRequest,
  proto.ondewo.nlu.GetIntentTagsResponse,
  /**
   * @param {!proto.ondewo.nlu.GetAllIntentTagsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.GetIntentTagsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.GetAllIntentTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetIntentTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetIntentTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.getAllIntentTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetAllIntentTags',
      request,
      metadata || {},
      methodDescriptor_Intents_GetAllIntentTags,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.GetAllIntentTagsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetIntentTagsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.getAllIntentTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/GetAllIntentTags',
      request,
      metadata || {},
      methodDescriptor_Intents_GetAllIntentTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchCreateTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 */
const methodDescriptor_Intents_BatchCreateTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchCreateTrainingPhrasesRequest,
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchCreateTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchCreateTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchCreateTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchCreateTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchCreateTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchGetTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 */
const methodDescriptor_Intents_BatchGetTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchGetTrainingPhrasesRequest,
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchGetTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchGetTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchGetTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchGetTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchGetTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 */
const methodDescriptor_Intents_BatchUpdateTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchUpdateTrainingPhrasesRequest,
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchUpdateTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchUpdateTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchUpdateTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchTrainingPhrasesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchUpdateTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse>}
 */
const methodDescriptor_Intents_BatchDeleteTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchDeleteTrainingPhrasesRequest,
  proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchDeleteTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchDeleteTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchDeleteTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchDeleteTrainingPhrasesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchDeleteTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.ListTrainingPhrasesResponse>}
 */
const methodDescriptor_Intents_ListTrainingPhrases = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListTrainingPhrases',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListTrainingPhrasesRequest,
  proto.ondewo.nlu.ListTrainingPhrasesResponse,
  /**
   * @param {!proto.ondewo.nlu.ListTrainingPhrasesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListTrainingPhrasesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListTrainingPhrasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListTrainingPhrasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listTrainingPhrases =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_ListTrainingPhrases,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListTrainingPhrasesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listTrainingPhrases =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListTrainingPhrases',
      request,
      metadata || {},
      methodDescriptor_Intents_ListTrainingPhrases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchCreateResponseMessagesRequest,
 *   !proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 */
const methodDescriptor_Intents_BatchCreateResponseMessages = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchCreateResponseMessages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchCreateResponseMessagesRequest,
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchCreateResponseMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchCreateResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchResponseMessagesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchCreateResponseMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateResponseMessages,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchCreateResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchCreateResponseMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateResponseMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchGetResponseMessagesRequest,
 *   !proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 */
const methodDescriptor_Intents_BatchGetResponseMessages = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchGetResponseMessages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchGetResponseMessagesRequest,
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchGetResponseMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchGetResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchResponseMessagesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchGetResponseMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetResponseMessages,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchGetResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchGetResponseMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetResponseMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateResponseMessagesRequest,
 *   !proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 */
const methodDescriptor_Intents_BatchUpdateResponseMessages = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchUpdateResponseMessagesRequest,
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateResponseMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchResponseMessagesStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchUpdateResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchResponseMessagesStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchUpdateResponseMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateResponseMessages,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchUpdateResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchResponseMessagesStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchUpdateResponseMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateResponseMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteResponseMessagesRequest,
 *   !proto.ondewo.nlu.BatchDeleteResponseMessagesResponse>}
 */
const methodDescriptor_Intents_BatchDeleteResponseMessages = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchDeleteResponseMessagesRequest,
  proto.ondewo.nlu.BatchDeleteResponseMessagesResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteResponseMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchDeleteResponseMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchDeleteResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchDeleteResponseMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchDeleteResponseMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchDeleteResponseMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteResponseMessages,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchDeleteResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchDeleteResponseMessagesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchDeleteResponseMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteResponseMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListResponseMessagesRequest,
 *   !proto.ondewo.nlu.ListResponseMessagesResponse>}
 */
const methodDescriptor_Intents_ListResponseMessages = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListResponseMessages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListResponseMessagesRequest,
  proto.ondewo.nlu.ListResponseMessagesResponse,
  /**
   * @param {!proto.ondewo.nlu.ListResponseMessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListResponseMessagesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListResponseMessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListResponseMessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listResponseMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_ListResponseMessages,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListResponseMessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListResponseMessagesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listResponseMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListResponseMessages',
      request,
      metadata || {},
      methodDescriptor_Intents_ListResponseMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchCreateParametersRequest,
 *   !proto.ondewo.nlu.BatchParametersStatusResponse>}
 */
const methodDescriptor_Intents_BatchCreateParameters = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchCreateParameters',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchCreateParametersRequest,
  proto.ondewo.nlu.BatchParametersStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchCreateParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchParametersStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchCreateParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchParametersStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchParametersStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchCreateParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateParameters,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchCreateParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchParametersStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchCreateParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchCreateParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchCreateParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchGetParametersRequest,
 *   !proto.ondewo.nlu.BatchParametersStatusResponse>}
 */
const methodDescriptor_Intents_BatchGetParameters = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchGetParameters',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchGetParametersRequest,
  proto.ondewo.nlu.BatchParametersStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchGetParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchParametersStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchGetParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchParametersStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchParametersStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchGetParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetParameters,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchGetParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchParametersStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchGetParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchGetParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchGetParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateParametersRequest,
 *   !proto.ondewo.nlu.BatchParametersStatusResponse>}
 */
const methodDescriptor_Intents_BatchUpdateParameters = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchUpdateParameters',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchUpdateParametersRequest,
  proto.ondewo.nlu.BatchParametersStatusResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchUpdateParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchParametersStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchUpdateParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchParametersStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchParametersStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchUpdateParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateParameters,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchUpdateParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchParametersStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchUpdateParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchUpdateParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchUpdateParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteParametersRequest,
 *   !proto.ondewo.nlu.BatchDeleteParametersResponse>}
 */
const methodDescriptor_Intents_BatchDeleteParameters = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/BatchDeleteParameters',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.BatchDeleteParametersRequest,
  proto.ondewo.nlu.BatchDeleteParametersResponse,
  /**
   * @param {!proto.ondewo.nlu.BatchDeleteParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.BatchDeleteParametersResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.BatchDeleteParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchDeleteParametersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchDeleteParametersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.batchDeleteParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteParameters,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.BatchDeleteParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchDeleteParametersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.batchDeleteParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/BatchDeleteParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_BatchDeleteParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListParametersRequest,
 *   !proto.ondewo.nlu.ListParametersResponse>}
 */
const methodDescriptor_Intents_ListParameters = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListParameters',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListParametersRequest,
  proto.ondewo.nlu.ListParametersResponse,
  /**
   * @param {!proto.ondewo.nlu.ListParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListParametersResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListParametersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListParametersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_ListParameters,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListParametersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListParameters',
      request,
      metadata || {},
      methodDescriptor_Intents_ListParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
 *   !proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse>}
 */
const methodDescriptor_Intents_ListTrainingPhrasesofIntentsWithEnrichment = new grpc.web.MethodDescriptor(
  '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
  grpc.web.MethodType.UNARY,
  proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
  proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse,
  /**
   * @param {!proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.IntentsClient.prototype.listTrainingPhrasesofIntentsWithEnrichment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
      request,
      metadata || {},
      methodDescriptor_Intents_ListTrainingPhrasesofIntentsWithEnrichment,
      callback);
};


/**
 * @param {!proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListTrainingPhrasesofIntentsWithEnrichmentResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.IntentsPromiseClient.prototype.listTrainingPhrasesofIntentsWithEnrichment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.nlu.Intents/ListTrainingPhrasesofIntentsWithEnrichment',
      request,
      metadata || {},
      methodDescriptor_Intents_ListTrainingPhrasesofIntentsWithEnrichment);
};


module.exports = proto.ondewo.nlu;

