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
    HORSE_REGISTER: "/rider-horse-register",
    STABLE_REGISTER: "/rider-stable-register",

    ALL_EVENTS: "/rider-all-events",
    EVENT_CLASS_REGISTER: "/rider-event-class-register",
    EVENT_CLASS_DETAILS: "/rider-event-class-details",
  },
};

// App Roles
export const APP_ROLES = {
  SUPERVISOR: "SUPERVISOR",
  RIDER: "RIDER",
};
