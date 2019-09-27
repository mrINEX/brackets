module.exports = function check(str, bracketsConfig) {

  let config = '';

  for(i = 0; i < bracketsConfig.length; i++)
  {
    for(j = 0; j < 2; j++)
    {
      if((j === 0)&&(/\W/g.test(bracketsConfig[i][j]))){config += '\\';}
       config += bracketsConfig[i][j]; ///main
       if((j === 0)&&(/\W/g.test(bracketsConfig[i][j]))){config += '\\';}
      if (j === 1)
        config += '|';
    }
    if(i === bracketsConfig.length-1)
    	config = config.replace(/\|$/,'');
  }
  let regex = RegExp(config,'g');
  //-------------------------------------------
  let del = str;
  let boool = regex.test(del); ///last change
  regex.lastIndex = 0; /// new
    for (let i = 0; i < str.length/2; i++)
    {
      del = del.replace(regex,'');
      if(del.length === 1)
        return regex.test(del);
    }
    if(del === '')
      return boool;
  boool = regex.test(del);
  return boool;
}
