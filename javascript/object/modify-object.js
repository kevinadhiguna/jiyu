let sample = {
  name: "Carni Vulre",
  number: 21,
  continent: "South America",
};

console.log("sample (before) : ", sample);

// An object property can be modified using :
// sample.<property_name>  = <new_value>
// sample['property_name'] = <new_value>
sample.name = "Carno Vulri";
sample['number'] = 31;
sample['continent'] = "Europe";

console.log("sample (after) : ", sample);
