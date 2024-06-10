function setTable(theDead) {
  
  let finalTable = ['_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____'];

  let earth = "QUTHCRDMZ";
  let water = "WEVOXING";
  let fire = "JFABKPLY";
  let wind = "SSSSSSSSS";
  let empty = "_____";
  
  let len = theDead.length
  
  if(len > 12) len = 12;
  
  for(let i = 0; i < len; i++) {
    if(earth.includes(theDead[i][0])) {
      if(finalTable[0] === '_____') finalTable[0] = theDead[i];
      else if(finalTable[11] === '_____') finalTable[11] = theDead[i];
      else if(finalTable[1] === '_____') finalTable[1] = theDead[i];
      else if(finalTable[10] === '_____') finalTable[10] = theDead[i];
      else if(finalTable[2] === '_____') finalTable[2] = theDead[i];
      else if(finalTable[9] === '_____') finalTable[9] = theDead[i];
      else if(finalTable[3] === '_____') finalTable[3] = theDead[i];
      else if(finalTable[8] === '_____') finalTable[8] = theDead[i];
      else if(finalTable[4] === '_____') finalTable[4] = theDead[i];
      else if(finalTable[7] === '_____') finalTable[7] = theDead[i];
      else if(finalTable[5] === '_____') finalTable[5] = theDead[i];
      else if(finalTable[6] === '_____') finalTable[6] = theDead[i];
    }
    if(water.includes(theDead[i][0])) {
      if(finalTable[3] === '_____') finalTable[3] = theDead[i];
      else if(finalTable[2] === '_____') finalTable[2] = theDead[i];
      else if(finalTable[4] === '_____') finalTable[4] = theDead[i];
      else if(finalTable[1] === '_____') finalTable[1] = theDead[i];
      else if(finalTable[5] === '_____') finalTable[5] = theDead[i];
      else if(finalTable[0] === '_____') finalTable[0] = theDead[i];
      else if(finalTable[6] === '_____') finalTable[6] = theDead[i];
      else if(finalTable[11] === '_____') finalTable[11] = theDead[i];
      else if(finalTable[7] === '_____') finalTable[7] = theDead[i];
      else if(finalTable[10] === '_____') finalTable[10] = theDead[i];
      else if(finalTable[8] === '_____') finalTable[8] = theDead[i];
      else if(finalTable[9] === '_____') finalTable[9] = theDead[i];
    }
    if(fire.includes(theDead[i][0])) {
      if(finalTable[6] === '_____') finalTable[6] = theDead[i];
      else if(finalTable[5] === '_____') finalTable[5] = theDead[i];
      else if(finalTable[7] === '_____') finalTable[7] = theDead[i];
      else if(finalTable[4] === '_____') finalTable[4] = theDead[i];
      else if(finalTable[8] === '_____') finalTable[8] = theDead[i];
      else if(finalTable[3] === '_____') finalTable[3] = theDead[i];
      else if(finalTable[9] === '_____') finalTable[9] = theDead[i];
      else if(finalTable[2] === '_____') finalTable[2] = theDead[i];
      else if(finalTable[10] === '_____') finalTable[10] = theDead[i];
      else if(finalTable[1] === '_____') finalTable[1] = theDead[i];
      else if(finalTable[11] === '_____') finalTable[11] = theDead[i];
      else if(finalTable[0] === '_____') finalTable[0] = theDead[i];
    }
    if(wind.includes(theDead[i][0])) {
      if(finalTable[9] === '_____') finalTable[9] = theDead[i];
      else if(finalTable[8] === '_____') finalTable[8] = theDead[i];
      else if(finalTable[10] === '_____') finalTable[10] = theDead[i];
      else if(finalTable[7] === '_____') finalTable[7] = theDead[i];
      else if(finalTable[11] === '_____') finalTable[11] = theDead[i];
      else if(finalTable[6] === '_____') finalTable[6] = theDead[i];
      else if(finalTable[0] === '_____') finalTable[0] = theDead[i];
      else if(finalTable[5] === '_____') finalTable[5] = theDead[i];
      else if(finalTable[1] === '_____') finalTable[1] = theDead[i];
      else if(finalTable[4] === '_____') finalTable[4] = theDead[i];
      else if(finalTable[2] === '_____') finalTable[2] = theDead[i];
      else if(finalTable[3] === '_____') finalTable[3] = theDead[i];
    }
    
  }
  
  return finalTable;
}

///////////////////////////////////////////////////////////////////////////////
const empty = "_____";

const getCorner = (name) => {
  if ("QUTHCRDMZ".includes(name[0])) return 0;
  if ("WEVOXING".includes(name[0])) return 3;
  if ("JFABKPLY".includes(name[0])) return 6;
  
  return 9;
};

const setTable = (theDead) => {
  const res = new Array(12).fill(empty);

  for (const dead of theDead.slice(0, 12)) {
    const c = getCorner(dead);
    
    for (let i = 0;; i++) {
      if (res[(12 + c - i) % 12] === empty) {
        res[(12 + c - i) % 12] = dead;
        break;
      } else if (res[(c + i) % 12] === empty) {
        res[(c + i) % 12] = dead;
        break;
      }
    }
  }
  
  return res;
};
