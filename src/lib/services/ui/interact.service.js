export const debounce = (fct, delay = 1000) => {
    let on = false;
    return (...args) => {
        if (!on) {
            on = true;
            fct.apply(this, args);
            setTimeout(() => on = false, delay);
        }
    };
};
//# sourceMappingURL=interact.service.js.map