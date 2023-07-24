
const HastalarRontgen = [
    ["Hasan Kayokçı", "10:05"],
    ["Elif Demir", "10:55"],
    ["Robert Johnson", "12:00"],
    ["John Doe", "13:20"],
    ["Ayşe Yıldız", "15:10"],
    ["Selami Kelaynak", "17:35"],
    ["Emily Watson", "18:20"],
    ["Jane Smith", "18:50"],
    ["David Lee", "21:35"],
    ["Mehmet Yılmaz", "22:05"]
  ];
  // Get the current time in minutes since midnight
   const currentTime = new Date();
   const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
 
   // Find the closest time and its index in the array
   let closestTimeDiff = Infinity;
   let closestTimeIndex = -1;
 
   for (let i = 0; i < HastalarRontgen.length; i++) {
     const time = HastalarRontgen[i][1];
     const timeParts = time.split(":");
     const timeMinutes = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
     const timeDiff = Math.abs(currentMinutes - timeMinutes);
 
     if (timeDiff < closestTimeDiff) {
       closestTimeDiff = timeDiff;
       closestTimeIndex = i;
     }
   }
 
   // Display the closest "hasta tipi"
   if (closestTimeIndex !== -1) {
     const closestHasta = HastalarRontgen[closestTimeIndex][0];
     document.getElementById("hastarontgen1").textContent = ` ${closestHasta}`;
   } else {
     document.getElementById("hastarontgen1").textContent = "No Hasta Found";
   }
   
   const HastalarRontgen2 = [
    ["Ali Kaya", "09:15"],
    ["Zeynep Şahin", "10:00"],
    ["Michael Brown", "11:30"],
    ["Jane Doe", "12:45"],
    ["Fatma Aydın", "14:20"],
    ["Mehmet Can", "16:55"],
    ["Olivia Taylor", "17:40"],
    ["Ella Johnson", "18:15"],
    ["Daniel Kim", "20:20"],
    ["Ahmet Yılmaz", "21:00"]
  ];
  if (closestTimeIndex !== -1) {
    const closestHasta = HastalarRontgen2[closestTimeIndex][0];
    document.getElementById("hastarontgen2").textContent = ` ${closestHasta}`;
  } else {
    document.getElementById("hastarontgen2").textContent = "No Hasta Found";
  }
  
   const HastalarMuayene = [
    ["Hasan Gürel", "09:15"],
    ["Elif Demir", "10:05"],
    ["Robert Johnson", "11:10"],
    ["John Doe", "12:30"],
    ["Ayşe Yıldız", "14:20"],
    ["Ahmet Arif", "16:45"],
    ["Emily Watson", "17:30"],
    ["Jane Smith", "18:00"],
    ["David Lee", "20:45"],
    ["Mehmet Yılmaz", "21:15"]
  ];
  // Update data for the first row


  const cihazlar = [
    { name: "Periapikal", id: 1 },
    { name: "Panaromik", id: 2 },
  ];
  
  const odalar = [
    { name: "radyoloji oda 1", id: 1 },
    { name: "radyoloji oda 2", id: 2 },
  ];
  
  function updateOdaAndCihazName() {
    for (let i = 0; i < cihazlar.length; i++) {
      const cihazElement = document.getElementById(`cihaz${i + 1}`);
      cihazElement.textContent = cihazlar[i].name;
    }
  
    for (let i = 0; i < odalar.length; i++) {
      const odaElement = document.getElementById(`oda${i + 1}`);
      odaElement.textContent = odalar[i].name;
    }
  }
  
  // Call the updateOdaAndCihazName function to initialize the cihaz and oda names
  updateOdaAndCihazName();
  
  
  const HastalarMuayene2 = [
    ["Sevim Kaya", "09:00"],
    ["Ali Can", "10:30"],
    ["Nazlı Öztürk", "11:45"],
    ["Eren Yılmaz", "13:15"],
    ["Zeynep Tekin", "15:00"],
    ["Murat Demirci", "16:20"],
    ["Linda Davis", "17:00"],
    ["Michael Anderson", "18:30"],
    ["Sophia Johnson", "19:15"],
    ["Emre Özkan", "20:30"]
    ];
    const updateHastaMuayeneElements = (dataArray) => {
      for (let i = 0; i < dataArray.length; i++) {
        const saatElement = document.getElementById(`saat${i + 1}`);
        const hastaElement = document.getElementById(`hasta${i + 1}`);
        saatElement.textContent = dataArray[i][1]; // Update the time
        hastaElement.textContent = dataArray[i][0]; // Update the name
      }
    };
    
    updateHastaMuayeneElements(HastalarMuayene);
    
    const updateHastaMuayene2Elements = (dataArray) => {
      for (let i = 0; i < dataArray.length; i++) {
        const saatElement = document.getElementById(`saat${i + 3}`);
        const hastaElement = document.getElementById(`hasta${i + 3}`);
        saatElement.textContent = dataArray[i][1]; // Update the time
        hastaElement.textContent = dataArray[i][0]; // Update the name
      }
    };
    
    updateHastaMuayene2Elements(HastalarMuayene2);
    
