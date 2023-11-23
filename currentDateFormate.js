    // create current date -UPDATE METHOD
    const local='en-US';
    const  date= new Date();
    const options={
        hour:'numeric',
        minute:'numeric',
        day:'numeric',
        month:'numeric',
        year:'numeric',
        // weekDay:'long'
      };
      const dateFormate = new Intl.DateTimeFormat(local,options).format(date);
      console.log(dateFormate);