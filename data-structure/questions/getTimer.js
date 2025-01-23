

const getTimer = (strDate) => {

  const futureDate = new Date(strDate)

  const difference = futureDate - new Date()

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds };

}

const sampleFutureTime = '2025-02-22T00:00:00-07:00'

console.log(getTimer(sampleFutureTime))