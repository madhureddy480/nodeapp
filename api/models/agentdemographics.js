module.exports = function agent(id,name,country,version,intversion,callback){
  this.name = name;
  this.id = id;
  this.country = country;
  this.version = version;
  this.intversion = intversion;
  return this;
}
