export const displayedAt = (createdAt: Date) => {
    const milliSeconds = Number(new Date()) - Number(createdAt)
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `Just before`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)} min ago`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)} hour before`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)} days ago`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)} weeks ago`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)} months ago`
    const years = days / 365
    return `${Math.floor(years)} year ago`
  }