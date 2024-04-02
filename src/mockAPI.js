const availableTimesByDate = {
    'day': ['day'],
    'Mon, 25/03/24': ['choose Time','10:00', '11:00', '12:00'],
    'Tue, 26/03/24': ['choose Time','12:00', '13:00', '15:00'],
    'Wed, 27/03/24': ['choose Time','14:00', '15:00', '20:00'],
    'Thr, 28/03/24': ['choose Time','16:00', '18:00', '19:00'],
    'Fri, 29/03/24': ['choose Time','14:00', '15:00', '16:00'],
    'Sat, 30/03/24': ['choose Time','10:00', '11:00', '12:00'],
    'Son, 31/03/24': ['choose Time','14:00', '15:00', '16:00'],
    'Mon, 01/04/24': ['choose Time','10:00', '18:00', '20:00'],
    'Teu, 02/04/24': ['choose Time','14:00', '15:00', '16:00'],
    'Wed, 03/04/24': ['choose Time','10:00', '11:00', '21:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}