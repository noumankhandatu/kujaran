export const ROUTE_PATH = {
  // auth
  AUTH: {
    SIGNUP: "/auth-signup",
    SIGNIN: "/auth-signin",
    VERIFY_MAIL: "/mail-verification",
  },
  SUPERVISOR: {
    ALL_EVENT: "/supervisor-all-events",
    CREATE_EVENT: "/supervisor-create-events",
    SELECT_EVENT: "/supervisor-select-events",
    SELECT_CLASS: "/supervisor-select-classs",
  },
  // rider private routes
  RIDER: {
    ALL_EVENTS: "/rider-all-events",
    EVENT_REGISTER: "/rider-event-register",
    CLASS_REGISTER: "/rider-class-register",
  },
};

// App Roles
export const APP_ROLES = {
  SUPERVISOR: "SUPERVISOR",
  RIDER: "RIDER",
};
