const availableTimesByDate = {
    'day': ['day'],
    'Mon, 08/04/24': ['choose Time','10:00', '11:00', '12:00'],
    'Tue, 09/04/24': ['choose Time','12:00', '13:00', '15:00'],
    'Wed, 10/04/24': ['choose Time','14:00', '15:00', '20:00'],
    'Thr, 11/04/24': ['choose Time','16:00', '18:00', '19:00'],
    'Fri, 12/04/24': ['choose Time','14:00', '15:00', '16:00'],
    'Sat, 13/04/24': ['choose Time','10:00', '11:00', '12:00'],
    'Son, 14/04/24': ['choose Time','14:00', '15:00', '16:00'],
    'Mon, 15/04/24': ['choose Time','10:00', '18:00', '20:00'],
    'Teu, 16/04/24': ['choose Time','14:00', '15:00', '16:00'],
    'Wed, 17/04/24': ['choose Time','10:00', '11:00', '21:00'],
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