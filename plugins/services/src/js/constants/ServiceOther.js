import ServiceOtherLabels from "./ServiceOtherLabels";
import ServiceOtherTypes from "./ServiceOtherTypes";

var SERVICE_OTHER = {
  CATALOG: {
    key: ServiceOtherTypes.CATALOG,
    displayName: ServiceOtherLabels.CATALOG
  },
  VOLUMES: {
    key: ServiceOtherTypes.VOLUMES,
    displayName: ServiceOtherLabels.VOLUMES
  },
  PODS: {
    key: ServiceOtherTypes.PODS,
    displayName: ServiceOtherLabels.PODS
  }
};

module.exports = SERVICE_OTHER;
