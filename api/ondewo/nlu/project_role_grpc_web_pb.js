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

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./project_role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.ProjectRolesClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.ProjectRolesPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.CreateProjectRoleRequest,
 *   !proto.ondewo.nlu.ProjectRole>}
 */
const methodDescriptor_ProjectRoles_CreateProjectRole = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectRoles/CreateProjectRole',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateProjectRoleRequest,
	proto.ondewo.nlu.ProjectRole,
	/**
	 * @param {!proto.ondewo.nlu.CreateProjectRoleRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ProjectRole.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ProjectRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ProjectRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectRolesClient.prototype.createProjectRole = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/CreateProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_CreateProjectRole,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ProjectRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectRolesPromiseClient.prototype.createProjectRole = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/CreateProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_CreateProjectRole
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectRoleRequest,
 *   !proto.ondewo.nlu.ProjectRole>}
 */
const methodDescriptor_ProjectRoles_GetProjectRole = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectRoles/GetProjectRole',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectRoleRequest,
	proto.ondewo.nlu.ProjectRole,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectRoleRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ProjectRole.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ProjectRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ProjectRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectRolesClient.prototype.getProjectRole = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/GetProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_GetProjectRole,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ProjectRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectRolesPromiseClient.prototype.getProjectRole = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/GetProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_GetProjectRole
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteProjectRoleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProjectRoles_DeleteProjectRole = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectRoles/DeleteProjectRole',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteProjectRoleRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteProjectRoleRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectRolesClient.prototype.deleteProjectRole = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_DeleteProjectRole,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectRolesPromiseClient.prototype.deleteProjectRole = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/DeleteProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_DeleteProjectRole
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateProjectRoleRequest,
 *   !proto.ondewo.nlu.ProjectRole>}
 */
const methodDescriptor_ProjectRoles_UpdateProjectRole = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectRoles/UpdateProjectRole',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.UpdateProjectRoleRequest,
	proto.ondewo.nlu.ProjectRole,
	/**
	 * @param {!proto.ondewo.nlu.UpdateProjectRoleRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ProjectRole.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.UpdateProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ProjectRole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ProjectRole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectRolesClient.prototype.updateProjectRole = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_UpdateProjectRole,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.UpdateProjectRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ProjectRole>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectRolesPromiseClient.prototype.updateProjectRole = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/UpdateProjectRole',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_UpdateProjectRole
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListProjectRolesRequest,
 *   !proto.ondewo.nlu.ListProjectRolesResponse>}
 */
const methodDescriptor_ProjectRoles_ListProjectRoles = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectRoles/ListProjectRoles',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListProjectRolesRequest,
	proto.ondewo.nlu.ListProjectRolesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListProjectRolesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListProjectRolesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListProjectRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListProjectRolesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListProjectRolesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectRolesClient.prototype.listProjectRoles = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/ListProjectRoles',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_ListProjectRoles,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListProjectRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListProjectRolesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectRolesPromiseClient.prototype.listProjectRoles = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectRoles/ListProjectRoles',
		request,
		metadata || {},
		methodDescriptor_ProjectRoles_ListProjectRoles
	);
};

module.exports = proto.ondewo.nlu;
