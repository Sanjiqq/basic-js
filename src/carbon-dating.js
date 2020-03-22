const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== "string" || !sampleActivity) return false;
  sampleActivity = Number(parseFloat(sampleActivity));
  if (sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity))
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
};
