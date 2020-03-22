module.exports = class depthCalcCalculator {
  calculateDepth(arr) {
    let depthCalc = 1;

    if (Array.isArray(arr)) {
      for (let item of arr) {
        if (Array.isArray(item)) {
          depthCalc = Math.max(this.calculateDepth(item) + 1, depthCalc);
        }
      }

      return depthCalc;
    } else return 0;
  }
};
