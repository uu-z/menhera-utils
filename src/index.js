let $ = (obj, cb) => {
  for (let [key, val] of Object.entries(obj)) {
    cb(key, val);
  }
};

export const data = {
  $({ _key, _val, cp }) {
    cp[_key] = _val;
  }
};

export const methods = {
  $({ _key, _val, cp }) {
    if (typeof _val === "function") {
      cp[_key] = _val.bind(cp);
    }
  }
};

export const lifeCycle = {
  run({ _val, cp }) {
    if (Array.isArray(_val)) {
      _val.forEach(fname => {
        cp[fname] && cp[fname].bind(cp)();
      });
    }
  }
};
