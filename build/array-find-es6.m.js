export default function(t,n,r){if("function"==typeof Array.prototype.find)return t.find(n,r);r=r||this;var f=t.length;if("function"!=typeof n)throw new TypeError(n+" is not a function");for(var o=0;o<f;o++)if(n.call(r,t[o],o,t))return t[o]};
