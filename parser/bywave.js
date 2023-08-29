module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {
    const obj = yaml.parse(raw)
    obj.rules.unshift("DOMAIN-SUFFIX,v2rayse.com,🚀 节点选择");
    return yaml.stringify(obj)
  }