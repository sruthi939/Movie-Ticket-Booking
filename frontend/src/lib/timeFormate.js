const timeFormate = (minutes) => {
  if (!Number.isFinite(minutes) || minutes <= 0) return '0m'

  const hrs = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hrs && mins) return `${hrs}h ${mins}m`
  if (hrs) return `${hrs}h`
  return `${mins}m`
}

export default timeFormate
