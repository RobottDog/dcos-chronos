const EventTypes = {};
[
  "CHRONOS_JOB_CREATE_ERROR",
  "CHRONOS_JOB_CREATE_SUCCESS",
  "CHRONOS_JOB_DELETE_ERROR",
  "CHRONOS_JOB_DELETE_SUCCESS",
  "CHRONOS_JOB_DETAIL_CHANGE",
  "CHRONOS_JOB_DETAIL_ERROR",
  "CHRONOS_JOB_RUN_ERROR",
  "CHRONOS_JOB_RUN_SUCCESS",
  "CHRONOS_JOB_STOP_RUN_ERROR",
  "CHRONOS_JOB_STOP_RUN_SUCCESS",
  "CHRONOS_JOB_SCHEDULE_UPDATE_ERROR",
  "CHRONOS_JOB_SCHEDULE_UPDATE_SUCCESS",
  "CHRONOS_JOB_UPDATE_ERROR",
  "CHRONOS_JOB_UPDATE_SUCCESS",
  "CHRONOS_JOBS_CHANGE",
  "CHRONOS_JOBS_ERROR"
].forEach(eventType => {
  EventTypes[eventType] = eventType;
});

module.exports = EventTypes;
