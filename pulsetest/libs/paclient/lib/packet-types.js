var C = 0;
module.exports = {
  /* Generic commands */
  PA_COMMAND_ERROR: C++,
  PA_COMMAND_TIMEOUT: C++, /* pseudo command */
  PA_COMMAND_REPLY: C++,

  /* CLIENT->SERVER */
  PA_COMMAND_CREATE_PLAYBACK_STREAM: C++,        /* Payload changed in v9, v12 */
  PA_COMMAND_DELETE_PLAYBACK_STREAM: C++,
  PA_COMMAND_CREATE_RECORD_STREAM: C++,          /* Payload changed in v9, v12 */
  PA_COMMAND_DELETE_RECORD_STREAM: C++,
  PA_COMMAND_EXIT: C++,
  PA_COMMAND_AUTH: C++,
  PA_COMMAND_SET_CLIENT_NAME: C++,
  PA_COMMAND_LOOKUP_SINK: C++,
  PA_COMMAND_LOOKUP_SOURCE: C++,
  PA_COMMAND_DRAIN_PLAYBACK_STREAM: C++,
  PA_COMMAND_STAT: C++,
  PA_COMMAND_GET_PLAYBACK_LATENCY: C++,
  PA_COMMAND_CREATE_UPLOAD_STREAM: C++,
  PA_COMMAND_DELETE_UPLOAD_STREAM: C++,
  PA_COMMAND_FINISH_UPLOAD_STREAM: C++,
  PA_COMMAND_PLAY_SAMPLE: C++,
  PA_COMMAND_REMOVE_SAMPLE: C++,

  PA_COMMAND_GET_SERVER_INFO: C++,
  PA_COMMAND_GET_SINK_INFO: C++,
  PA_COMMAND_GET_SINK_INFO_LIST: C++,
  PA_COMMAND_GET_SOURCE_INFO: C++,
  PA_COMMAND_GET_SOURCE_INFO_LIST: C++,
  PA_COMMAND_GET_MODULE_INFO: C++,
  PA_COMMAND_GET_MODULE_INFO_LIST: C++,
  PA_COMMAND_GET_CLIENT_INFO: C++,
  PA_COMMAND_GET_CLIENT_INFO_LIST: C++,
  PA_COMMAND_GET_SINK_INPUT_INFO: C++,          /* Payload changed in v11 */
  PA_COMMAND_GET_SINK_INPUT_INFO_LIST: C++,     /* Payload changed in v11 */
  PA_COMMAND_GET_SOURCE_OUTPUT_INFO: C++,
  PA_COMMAND_GET_SOURCE_OUTPUT_INFO_LIST: C++,
  PA_COMMAND_GET_SAMPLE_INFO: C++,
  PA_COMMAND_GET_SAMPLE_INFO_LIST: C++,
  PA_COMMAND_SUBSCRIBE: C++,

  PA_COMMAND_SET_SINK_VOLUME: C++,
  PA_COMMAND_SET_SINK_INPUT_VOLUME: C++,
  PA_COMMAND_SET_SOURCE_VOLUME: C++,

  PA_COMMAND_SET_SINK_MUTE: C++,
  PA_COMMAND_SET_SOURCE_MUTE: C++,

  PA_COMMAND_CORK_PLAYBACK_STREAM: C++,
  PA_COMMAND_FLUSH_PLAYBACK_STREAM: C++,
  PA_COMMAND_TRIGGER_PLAYBACK_STREAM: C++,

  PA_COMMAND_SET_DEFAULT_SINK: C++,
  PA_COMMAND_SET_DEFAULT_SOURCE: C++,

  PA_COMMAND_SET_PLAYBACK_STREAM_NAME: C++,
  PA_COMMAND_SET_RECORD_STREAM_NAME: C++,

  PA_COMMAND_KILL_CLIENT: C++,
  PA_COMMAND_KILL_SINK_INPUT: C++,
  PA_COMMAND_KILL_SOURCE_OUTPUT: C++,

  PA_COMMAND_LOAD_MODULE: C++,
  PA_COMMAND_UNLOAD_MODULE: C++,

  /* Obsolete */
  PA_COMMAND_ADD_AUTOLOAD___OBSOLETE: C++,
  PA_COMMAND_REMOVE_AUTOLOAD___OBSOLETE: C++,
  PA_COMMAND_GET_AUTOLOAD_INFO___OBSOLETE: C++,
  PA_COMMAND_GET_AUTOLOAD_INFO_LIST___OBSOLETE: C++,

  PA_COMMAND_GET_RECORD_LATENCY: C++,
  PA_COMMAND_CORK_RECORD_STREAM: C++,
  PA_COMMAND_FLUSH_RECORD_STREAM: C++,
  PA_COMMAND_PREBUF_PLAYBACK_STREAM: C++,

  /* SERVER->CLIENT */
  PA_COMMAND_REQUEST: C++,
  PA_COMMAND_OVERFLOW: C++,
  PA_COMMAND_UNDERFLOW: C++,
  PA_COMMAND_PLAYBACK_STREAM_KILLED: C++,
  PA_COMMAND_RECORD_STREAM_KILLED: C++,
  PA_COMMAND_SUBSCRIBE_EVENT: C++,

  /* A few more client->server commands */

  /* Supported since protocol v10 */
  PA_COMMAND_MOVE_SINK_INPUT: C++,
  PA_COMMAND_MOVE_SOURCE_OUTPUT: C++,

  /* Supported since protocol v11 */
  PA_COMMAND_SET_SINK_INPUT_MUTE: C++,

  PA_COMMAND_SUSPEND_SINK: C++,
  PA_COMMAND_SUSPEND_SOURCE: C++,

  /* Supported since protocol v12 */
  PA_COMMAND_SET_PLAYBACK_STREAM_BUFFER_ATTR: C++,
  PA_COMMAND_SET_RECORD_STREAM_BUFFER_ATTR: C++,

  PA_COMMAND_UPDATE_PLAYBACK_STREAM_SAMPLE_RATE: C++,
  PA_COMMAND_UPDATE_RECORD_STREAM_SAMPLE_RATE: C++,

  /* SERVER->CLIENT */
  PA_COMMAND_PLAYBACK_STREAM_SUSPENDED: C++,
  PA_COMMAND_RECORD_STREAM_SUSPENDED: C++,
  PA_COMMAND_PLAYBACK_STREAM_MOVED: C++,
  PA_COMMAND_RECORD_STREAM_MOVED: C++,

  /* Supported since protocol v13 */
  PA_COMMAND_UPDATE_RECORD_STREAM_PROPLIST: C++,
  PA_COMMAND_UPDATE_PLAYBACK_STREAM_PROPLIST: C++,
  PA_COMMAND_UPDATE_CLIENT_PROPLIST: C++,
  PA_COMMAND_REMOVE_RECORD_STREAM_PROPLIST: C++,
  PA_COMMAND_REMOVE_PLAYBACK_STREAM_PROPLIST: C++,
  PA_COMMAND_REMOVE_CLIENT_PROPLIST: C++,

  /* SERVER->CLIENT */
  PA_COMMAND_STARTED: C++,

  /* Supported since protocol v14 */
  PA_COMMAND_EXTENSION: C++,

  /* Supported since protocol v15 */
  PA_COMMAND_GET_CARD_INFO: C++,
  PA_COMMAND_GET_CARD_INFO_LIST: C++,
  PA_COMMAND_SET_CARD_PROFILE: C++,

  PA_COMMAND_CLIENT_EVENT: C++,
  PA_COMMAND_PLAYBACK_STREAM_EVENT: C++,
  PA_COMMAND_RECORD_STREAM_EVENT: C++,

  /* SERVER->CLIENT */
  PA_COMMAND_PLAYBACK_BUFFER_ATTR_CHANGED: C++,
  PA_COMMAND_RECORD_BUFFER_ATTR_CHANGED: C++,

  /* Supported since protocol v16 */
  PA_COMMAND_SET_SINK_PORT: C++,
  PA_COMMAND_SET_SOURCE_PORT: C++,

  /* Supported since protocol v22 */
  PA_COMMAND_SET_SOURCE_OUTPUT_VOLUME: C++,
  PA_COMMAND_SET_SOURCE_OUTPUT_MUTE: C++,

  /* Supported since protocol v27 */
  PA_COMMAND_SET_PORT_LATENCY_OFFSET: C++,

  /* Supported since protocol v30 */
  /* BOTH DIRECTIONS */
  PA_COMMAND_ENABLE_SRBCHANNEL: C++,
  PA_COMMAND_DISABLE_SRBCHANNEL: C++,

  /* Supported since protocol v31
   * BOTH DIRECTIONS */
  PA_COMMAND_REGISTER_MEMFD_SHMID: C++,

  PA_COMMAND_MAX: C++
};
