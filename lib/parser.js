/* Jison generated parser */
var parser = (function(){
undefined
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"world":4,"EOF":5,"/**":6,"tags":7,"ndoc_and_includes_and_fires":8,"comment":9,"**/":10,"tag_list":11,"tag":12,",":13,"DEPRECATED":14,":":15,"NUMBER":16,"..":17,"REQUIRED":18,"READONLY":19,"INTERNAL":20,"CHAINABLE":21,"SECTION":22,"name":23,"ALIASOF":24,"RELATEDTO":25,"BELONGSTO":26,"ndoc":27,"INCLUDES":28,"names":29,"TEXT":30,"section":31,"namespace":32,"class":33,"mixin":34,"signatures":35,"argument_descriptions":36,"argument_description":37,"*-":38,"(":39,"names_alternation":40,")":41,"):":42,"events":43,"event":44,"NAME":45,".":46,"#":47,"@":48,"?":49,"|":50,"value":51,"STRING":52,"BOOLEAN":53,"REGEXP":54,"[":55,"value_list":56,"]":57,"...":58,"{":59,"key_value_list":60,"}":61,"value2":62,"TRUE":63,"FALSE":64,"NULL":65,"key":66,"name_or_value":67,"==":68,"CLASS":69,"<":70,"MIXIN":71,"property":72,"->":73,"returns":74,"constant":75,"=":76,"signature":77,"method":78,"NEW":79,"args":80,"arg":81,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"/**",10:"**/",13:",",14:"DEPRECATED",15:":",16:"NUMBER",17:"..",18:"REQUIRED",19:"READONLY",20:"INTERNAL",21:"CHAINABLE",22:"SECTION",24:"ALIASOF",25:"RELATEDTO",26:"BELONGSTO",28:"INCLUDES",30:"TEXT",38:"*-",39:"(",41:")",42:"):",45:"NAME",46:".",47:"#",48:"@",49:"?",50:"|",52:"STRING",53:"BOOLEAN",54:"REGEXP",55:"[",57:"]",58:"...",59:"{",61:"}",63:"TRUE",64:"FALSE",65:"NULL",68:"==",69:"CLASS",70:"<",71:"MIXIN",73:"->",76:"=",79:"NEW"},
productions_: [0,[3,2],[4,0],[4,6],[7,0],[7,1],[11,1],[11,3],[12,1],[12,3],[12,5],[12,1],[12,1],[12,1],[12,1],[12,3],[12,3],[12,3],[12,3],[8,1],[8,3],[9,0],[9,1],[27,1],[27,1],[27,1],[27,1],[27,1],[27,2],[36,1],[36,2],[37,5],[37,6],[43,1],[43,3],[44,1],[44,3],[23,1],[23,3],[23,3],[23,3],[29,1],[29,3],[40,1],[40,1],[40,3],[51,1],[51,1],[51,1],[51,1],[51,1],[51,3],[51,4],[51,3],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,3],[62,4],[62,3],[56,0],[56,1],[56,3],[60,0],[60,3],[60,5],[66,1],[66,1],[67,1],[31,3],[32,1],[33,2],[33,4],[34,2],[72,3],[75,3],[35,1],[35,2],[77,1],[77,3],[77,1],[77,1],[77,2],[78,4],[78,5],[74,1],[74,1],[74,3],[80,0],[80,1],[80,3],[80,5],[80,4],[81,1],[81,4],[81,3],[81,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return this.$ 
break;
case 2: this.$ = {} 
break;
case 3:
    var x = $$[$0-2];
    for (var i in $$[$0-3]) x[i] = $$[$0-3][i];
    // amend description
    var desq = $$[$0-1].text;
    // strip leading *
    desq = desq.replace(/\s*\n\s*\*/g, '\n').replace(/^\*\n*/, ''); 
    // trim leading spaces from description
    var lead = desq.match(/^\s+/);
    if (lead) {
      var re = new RegExp('\n' + lead[0], 'g');
      desq = desq.substring(lead[0].length).replace(re, '\n');
    }
    x.description = desq.trim();
    // short description lasts until the first empty line
    x.short_description = x.description.replace(/\n\n[\s\S]*$/, '\n');
    x.line = ($$[$0-1].line + 1);
    // register
    if (this.$[x.id]) {
      console.error('name clash: ' + x.id);
    }
    this.$[x.id] = x;
    // FIXME: remove once tree is build ok
    /*this.$[x.id] = {
      id: x.id,
      type: x.type,
      section: x.section
    };*/
  
break;
case 4: this.$ = {} 
break;
case 6: this.$ = {}; for (var i in $$[$0]) this.$[i] = $$[$0][i] 
break;
case 7: for (var i in $$[$0]) this.$[i] = $$[$0][i] 
break;
case 8: this.$ = {deprecated: true} 
break;
case 9: this.$ = {deprecated: {from: $$[$0]}} 
break;
case 10: this.$ = {deprecated: {from: $$[$0-2], off: $$[$0]}} 
break;
case 11: this.$ = {required: true} 
break;
case 12: this.$ = {readonly: true} 
break;
case 13: this.$ = {internal: true} 
break;
case 14: this.$ = {chainable: true} 
break;
case 15: this.$ = {section: $$[$0]} 
break;
case 16: this.$ = {alias_of: $$[$0]} 
break;
case 17: this.$ = {related_to: $$[$0]} 
break;
case 18: this.$ = {belongs_to: $$[$0]} 
break;
case 20: this.$.included_mixins = $$[$0] 
break;
case 21: this.$ = {text: '', line: yy.lexer.yylloc.last_line} 
break;
case 22: this.$ = {text: $$[$0], line: yy.lexer.yylloc.last_line} 
break;
case 28: this.$.arguments = $$[$0] 
break;
case 29: this.$ = [$$[$0]] 
break;
case 30: this.$.push($$[$0]) 
break;
case 31: this.$ = {name: $$[$0-3], types: $$[$0-1]} 
break;
case 32:
    this.$ = {
      name: $$[$0-4],
      types: $$[$0-2],
      description: $$[$0].replace(/(?:\s*\*\s*|\s+)/g, ' ').replace(/(^\s*|\s*$)/g, '')
    };
  
break;
case 33: this.$ = [$$[$0]] 
break;
case 34: this.$ = $$[$0-2]; this.$.push($$[$0]) 
break;
case 36: this.$ += $$[$0-1] + $$[$0] 
break;
case 38: this.$ += $$[$0-1] + $$[$0] 
break;
case 39: this.$ += $$[$0-1] + $$[$0] 
break;
case 40: this.$ += $$[$0-1] + $$[$0] 
break;
case 41: this.$ = [$$[$0]] 
break;
case 42: this.$ = $$[$0-2]; this.$.push($$[$0]) 
break;
case 43: this.$ = [] 
break;
case 44: this.$ = [$$[$0]] 
break;
case 45: this.$.push($$[$0]) 
break;
case 46: this.$ = String($$[$0]) 
break;
case 47: this.$ = Number($$[$0]) 
break;
case 48: this.$ = $$[$0] === 'true' ? true : false 
break;
case 49: this.$ = new RegExp($$[$0]) 
break;
case 51: this.$ = $$[$0-1]; this.$.array = true 
break;
case 52: this.$ = $$[$0-2]; this.$.array = true; this.$.ellipsis = true 
break;
case 53: this.$ = $$[$0-1] 
break;
case 54: this.$ = {value: String($$[$0]), type: 'string'} 
break;
case 55: this.$ = {value: Number($$[$0]), type: 'number'} 
break;
case 56: this.$ = {value: true, type: 'boolean'} 
break;
case 57: this.$ = {value: false, type: 'boolean'} 
break;
case 58: this.$ = {value: null, type: 'null'} 
break;
case 59: this.$ = {value: $$[$0], type: 'regexp'} 
break;
case 60: this.$ = {value: $$[$0], type: 'name'} 
break;
case 61: this.$ = $$[$0-1]; this.$.array = true 
break;
case 62: this.$ = $$[$0-2]; this.$.array = true; this.$.ellipsis = true 
break;
case 63: this.$ = $$[$0-1] 
break;
case 64: this.$ = [] 
break;
case 65: this.$ = [$$[$0]] 
break;
case 66: this.$.push($$[$0]) 
break;
case 67: this.$ = {} 
break;
case 68: this.$ = {}; this.$[$$[$0-2]] = $$[$0] 
break;
case 69: this.$[$$[$0-2]] = $$[$0] 
break;
case 73: this.$ = {id: $$[$0-1], type: 'section'}; 
break;
case 74: this.$ = {id: $$[$0], type: 'namespace'}; 
break;
case 75: this.$ = {id: $$[$0], type: 'class'}; 
break;
case 76: this.$ = {id: $$[$0-2], type: 'class', superclass: $$[$0]}; 
break;
case 77: this.$ = {id: $$[$0], type: 'mixin'} 
break;
case 78: this.$ = {id: $$[$0-2], type: 'property', returns: $$[$0]} 
break;
case 79: this.$ = {id: $$[$0-2], type: 'constant', returns: $$[$0]} 
break;
case 80:
    this.$ = $$[$0];
    this.$.signatures = [{args: $$[$0].args, returns: $$[$0].returns}];
    delete this.$.args;
    delete this.$.returns;
  
break;
case 81:
    this.$.signatures.push({args: $$[$0].args, returns: $$[$0].returns});
    delete this.$.args;
    delete this.$.returns;
  
break;
case 83: this.$.returns = $$[$0] 
break;
case 86: this.$ = $$[$0]; this.$.id = this.$.id + '.' + $$[$0-1]; this.$.type = 'constructor' 
break;
case 87: this.$ = {id: $$[$0-3], type: 'method', args: $$[$0-1]} 
break;
case 88: this.$ = {id: $$[$0-4], type: 'method', args: $$[$0-1], bound: true} 
break;
case 89: this.$ = [{type: '?'}] 
break;
case 90:
    var x = $$[$0];
    var ret = {
      type: x
    };
    if (x.array) ret.array = x.array;
    if (x.ellipsis) ret.ellipsis = x.ellipsis;
    this.$ = [ret];
  
break;
case 91:
    var x = $$[$0];
    var ret = {
      type: x
    };
    if (x.array) ret.array = x.array;
    if (x.ellipsis) ret.ellipsis = x.ellipsis;
    this.$.push(ret);
  
break;
case 92: this.$ = [] 
break;
case 93: this.$ = [$$[$0]] 
break;
case 94: this.$.push($$[$0]) 
break;
case 95:
    $$[$0-1].forEach(function(a) {
      a.optional = true;
      $$[$0-4].push(a);
    });
  
break;
case 96:
    $$[$0-1].forEach(function(a) {
      a.optional = true;
      $$[$0-3].push(a);
    });
  
break;
case 97: this.$ = {name: $$[$0]} 
break;
case 98: this.$ = {name: $$[$0-3], args: $$[$0-1]} 
break;
case 99: this.$.default_value = $$[$0] 
break;
case 100: this.$.ellipsis = true 
break;
}
},
table: [{3:1,4:2,5:[2,2],6:[2,2]},{1:[3]},{5:[1,3],6:[1,4]},{1:[2,1]},{7:5,11:6,12:7,14:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],24:[1,14],25:[1,15],26:[1,16],45:[2,4],68:[2,4],69:[2,4],71:[2,4],79:[2,4]},{8:17,23:25,27:18,31:19,32:20,33:21,34:22,35:23,45:[1,29],68:[1,24],69:[1,26],71:[1,27],72:31,75:32,77:28,78:30,79:[1,33]},{13:[1,34],45:[2,5],68:[2,5],69:[2,5],71:[2,5],79:[2,5]},{13:[2,6],45:[2,6],68:[2,6],69:[2,6],71:[2,6],79:[2,6]},{13:[2,8],15:[1,35],45:[2,8],68:[2,8],69:[2,8],71:[2,8],79:[2,8]},{13:[2,11],45:[2,11],68:[2,11],69:[2,11],71:[2,11],79:[2,11]},{13:[2,12],45:[2,12],68:[2,12],69:[2,12],71:[2,12],79:[2,12]},{13:[2,13],45:[2,13],68:[2,13],69:[2,13],71:[2,13],79:[2,13]},{13:[2,14],45:[2,14],68:[2,14],69:[2,14],71:[2,14],79:[2,14]},{15:[1,36]},{15:[1,37]},{15:[1,38]},{15:[1,39]},{9:40,10:[2,21],30:[1,41]},{10:[2,19],28:[1,42],30:[2,19]},{10:[2,23],28:[2,23],30:[2,23]},{10:[2,24],28:[2,24],30:[2,24]},{10:[2,25],28:[2,25],30:[2,25]},{10:[2,26],28:[2,26],30:[2,26]},{10:[2,27],23:47,28:[2,27],30:[2,27],36:43,37:45,38:[1,46],45:[1,29],72:31,75:32,77:44,78:30,79:[1,33]},{23:48,45:[1,29]},{10:[2,74],28:[2,74],30:[2,74],39:[1,52],46:[1,49],47:[1,50],48:[1,51],73:[1,53],76:[1,54]},{23:55,45:[1,29]},{23:56,45:[1,29]},{10:[2,80],28:[2,80],30:[2,80],38:[2,80],45:[2,80],79:[2,80]},{10:[2,37],13:[2,37],28:[2,37],30:[2,37],38:[2,37],39:[2,37],41:[2,37],42:[2,37],45:[2,37],46:[2,37],47:[2,37],48:[2,37],50:[2,37],55:[2,37],57:[2,37],58:[2,37],61:[2,37],68:[2,37],69:[2,37],70:[2,37],71:[2,37],73:[2,37],76:[2,37],79:[2,37]},{10:[2,82],28:[2,82],30:[2,82],38:[2,82],45:[2,82],73:[1,57],79:[2,82]},{10:[2,84],28:[2,84],30:[2,84],38:[2,84],45:[2,84],79:[2,84]},{10:[2,85],28:[2,85],30:[2,85],38:[2,85],45:[2,85],79:[2,85]},{23:59,45:[1,29],78:58},{12:60,14:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],24:[1,14],25:[1,15],26:[1,16]},{16:[1,61]},{23:62,45:[1,29]},{23:63,45:[1,29]},{23:64,45:[1,29]},{23:65,45:[1,29]},{10:[1,66]},{10:[2,22]},{23:68,29:67,45:[1,29]},{10:[2,28],28:[2,28],30:[2,28],37:69,38:[1,46]},{10:[2,81],28:[2,81],30:[2,81],38:[2,81],45:[2,81],79:[2,81]},{10:[2,29],28:[2,29],30:[2,29],38:[2,29]},{23:70,45:[1,29]},{39:[1,52],46:[1,49],47:[1,50],48:[1,51],73:[1,53],76:[1,54]},{46:[1,49],47:[1,50],48:[1,51],68:[1,71]},{45:[1,72]},{45:[1,73]},{45:[1,74]},{13:[2,92],41:[2,92],45:[1,78],48:[1,76],55:[2,92],80:75,81:77},{16:[1,84],23:87,45:[1,29],49:[1,80],51:82,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89],67:81,74:79},{16:[1,84],23:87,45:[1,29],49:[1,80],51:82,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89],67:81,74:90},{10:[2,75],28:[2,75],30:[2,75],46:[1,49],47:[1,50],48:[1,51],70:[1,91]},{10:[2,77],28:[2,77],30:[2,77],46:[1,49],47:[1,50],48:[1,51]},{16:[1,84],23:87,45:[1,29],49:[1,80],51:82,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89],67:81,74:92},{10:[2,86],28:[2,86],30:[2,86],38:[2,86],45:[2,86],79:[2,86]},{39:[1,52],46:[1,49],47:[1,50],48:[1,51]},{13:[2,7],45:[2,7],68:[2,7],69:[2,7],71:[2,7],79:[2,7]},{13:[2,9],17:[1,93],45:[2,9],68:[2,9],69:[2,9],71:[2,9],79:[2,9]},{13:[2,15],45:[2,15],46:[1,49],47:[1,50],48:[1,51],68:[2,15],69:[2,15],71:[2,15],79:[2,15]},{13:[2,16],45:[2,16],46:[1,49],47:[1,50],48:[1,51],68:[2,16],69:[2,16],71:[2,16],79:[2,16]},{13:[2,17],45:[2,17],46:[1,49],47:[1,50],48:[1,51],68:[2,17],69:[2,17],71:[2,17],79:[2,17]},{13:[2,18],45:[2,18],46:[1,49],47:[1,50],48:[1,51],68:[2,18],69:[2,18],71:[2,18],79:[2,18]},{5:[2,3],6:[2,3]},{10:[2,20],13:[1,94],30:[2,20]},{10:[2,41],13:[2,41],30:[2,41],46:[1,49],47:[1,50],48:[1,51]},{10:[2,30],28:[2,30],30:[2,30],38:[2,30]},{39:[1,95],46:[1,49],47:[1,50],48:[1,51]},{10:[2,73],28:[2,73],30:[2,73]},{10:[2,38],13:[2,38],28:[2,38],30:[2,38],38:[2,38],39:[2,38],41:[2,38],42:[2,38],45:[2,38],46:[2,38],47:[2,38],48:[2,38],50:[2,38],55:[2,38],57:[2,38],58:[2,38],61:[2,38],68:[2,38],69:[2,38],70:[2,38],71:[2,38],73:[2,38],76:[2,38],79:[2,38]},{10:[2,39],13:[2,39],28:[2,39],30:[2,39],38:[2,39],39:[2,39],41:[2,39],42:[2,39],45:[2,39],46:[2,39],47:[2,39],48:[2,39],50:[2,39],55:[2,39],57:[2,39],58:[2,39],61:[2,39],68:[2,39],69:[2,39],70:[2,39],71:[2,39],73:[2,39],76:[2,39],79:[2,39]},{10:[2,40],13:[2,40],28:[2,40],30:[2,40],38:[2,40],39:[2,40],41:[2,40],42:[2,40],45:[2,40],46:[2,40],47:[2,40],48:[2,40],50:[2,40],55:[2,40],57:[2,40],58:[2,40],61:[2,40],68:[2,40],69:[2,40],70:[2,40],71:[2,40],73:[2,40],76:[2,40],79:[2,40]},{13:[1,97],41:[1,96],55:[1,98]},{13:[2,92],41:[2,92],45:[1,78],55:[2,92],80:99,81:77},{13:[2,93],41:[2,93],55:[2,93],57:[2,93],58:[1,101],76:[1,100]},{13:[2,97],39:[1,102],41:[2,97],55:[2,97],57:[2,97],58:[2,97],76:[2,97]},{10:[2,78],28:[2,78],30:[2,78],38:[2,78],45:[2,78],50:[1,103],79:[2,78]},{10:[2,89],28:[2,89],30:[2,89],38:[2,89],45:[2,89],50:[2,89],79:[2,89]},{10:[2,90],28:[2,90],30:[2,90],38:[2,90],45:[2,90],50:[2,90],79:[2,90]},{10:[2,72],13:[2,72],28:[2,72],30:[2,72],38:[2,72],41:[2,72],45:[2,72],50:[2,72],55:[2,72],57:[2,72],58:[2,72],76:[2,72],79:[2,72]},{10:[2,46],13:[2,46],28:[2,46],30:[2,46],38:[2,46],41:[2,46],45:[2,46],50:[2,46],55:[2,46],57:[2,46],58:[2,46],61:[2,46],76:[2,46],79:[2,46]},{10:[2,47],13:[2,47],28:[2,47],30:[2,47],38:[2,47],41:[2,47],45:[2,47],50:[2,47],55:[2,47],57:[2,47],58:[2,47],61:[2,47],76:[2,47],79:[2,47]},{10:[2,48],13:[2,48],28:[2,48],30:[2,48],38:[2,48],41:[2,48],45:[2,48],50:[2,48],55:[2,48],57:[2,48],58:[2,48],61:[2,48],76:[2,48],79:[2,48]},{10:[2,49],13:[2,49],28:[2,49],30:[2,49],38:[2,49],41:[2,49],45:[2,49],50:[2,49],55:[2,49],57:[2,49],58:[2,49],61:[2,49],76:[2,49],79:[2,49]},{10:[2,50],13:[2,50],28:[2,50],30:[2,50],38:[2,50],41:[2,50],45:[2,50],46:[1,49],47:[1,50],48:[1,51],50:[2,50],55:[2,50],57:[2,50],58:[2,50],61:[2,50],76:[2,50],79:[2,50]},{13:[2,64],16:[1,84],23:87,45:[1,29],51:105,52:[1,83],53:[1,85],54:[1,86],55:[1,88],56:104,57:[2,64],58:[2,64],59:[1,89]},{13:[2,67],45:[1,109],52:[1,108],60:106,61:[2,67],66:107},{10:[2,79],28:[2,79],30:[2,79],38:[2,79],45:[2,79],50:[1,103],79:[2,79]},{23:110,45:[1,29]},{10:[2,83],28:[2,83],30:[2,83],38:[2,83],45:[2,83],50:[1,103],79:[2,83]},{16:[1,111]},{23:112,45:[1,29]},{23:115,40:113,45:[1,29],49:[1,114]},{10:[2,87],28:[2,87],30:[2,87],38:[2,87],45:[2,87],73:[2,87],79:[2,87]},{45:[1,78],55:[1,117],81:116},{13:[2,92],45:[1,78],55:[2,92],57:[2,92],80:118,81:77},{13:[1,97],41:[1,119],55:[1,98]},{16:[1,84],23:87,45:[1,29],51:82,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89],67:120},{13:[2,100],41:[2,100],55:[2,100],57:[2,100],58:[2,100],76:[2,100]},{13:[2,92],41:[2,92],45:[1,78],55:[2,92],80:121,81:77},{16:[1,84],23:87,45:[1,29],51:82,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89],67:122},{13:[1,125],57:[1,123],58:[1,124]},{13:[2,65],57:[2,65],58:[2,65]},{13:[1,127],61:[1,126]},{15:[1,128]},{15:[2,70]},{15:[2,71]},{10:[2,76],28:[2,76],30:[2,76],46:[1,49],47:[1,50],48:[1,51]},{13:[2,10],45:[2,10],68:[2,10],69:[2,10],71:[2,10],79:[2,10]},{10:[2,42],13:[2,42],30:[2,42],46:[1,49],47:[1,50],48:[1,51]},{41:[1,129],42:[1,130],50:[1,131]},{41:[2,43],42:[2,43],50:[2,43]},{41:[2,44],42:[2,44],46:[1,49],47:[1,50],48:[1,51],50:[2,44]},{13:[2,94],41:[2,94],55:[2,94],57:[2,94],58:[1,101],76:[1,100]},{13:[2,92],45:[1,78],55:[2,92],57:[2,92],80:132,81:77},{13:[1,97],55:[1,98],57:[1,133]},{10:[2,88],28:[2,88],30:[2,88],38:[2,88],45:[2,88],73:[2,88],79:[2,88]},{13:[2,99],41:[2,99],55:[2,99],57:[2,99],58:[2,99],76:[2,99]},{13:[1,97],41:[1,134],55:[1,98]},{10:[2,91],28:[2,91],30:[2,91],38:[2,91],45:[2,91],50:[2,91],79:[2,91]},{10:[2,51],13:[2,51],28:[2,51],30:[2,51],38:[2,51],41:[2,51],45:[2,51],50:[2,51],55:[2,51],57:[2,51],58:[2,51],61:[2,51],76:[2,51],79:[2,51]},{57:[1,135]},{16:[1,84],23:87,45:[1,29],51:136,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89]},{10:[2,53],13:[2,53],28:[2,53],30:[2,53],38:[2,53],41:[2,53],45:[2,53],50:[2,53],55:[2,53],57:[2,53],58:[2,53],61:[2,53],76:[2,53],79:[2,53]},{45:[1,109],52:[1,108],66:137},{16:[1,84],23:87,45:[1,29],51:138,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89]},{10:[2,31],28:[2,31],30:[2,31],38:[2,31]},{30:[1,139]},{23:140,45:[1,29]},{13:[1,97],55:[1,98],57:[1,141]},{13:[2,96],41:[2,96],55:[2,96],57:[2,96]},{13:[2,98],41:[2,98],55:[2,98],57:[2,98],58:[2,98],76:[2,98]},{10:[2,52],13:[2,52],28:[2,52],30:[2,52],38:[2,52],41:[2,52],45:[2,52],50:[2,52],55:[2,52],57:[2,52],58:[2,52],61:[2,52],76:[2,52],79:[2,52]},{13:[2,66],57:[2,66],58:[2,66]},{15:[1,142]},{13:[2,68],61:[2,68]},{10:[2,32],28:[2,32],30:[2,32],38:[2,32]},{41:[2,45],42:[2,45],46:[1,49],47:[1,50],48:[1,51],50:[2,45]},{13:[2,95],41:[2,95],55:[2,95],57:[2,95]},{16:[1,84],23:87,45:[1,29],51:143,52:[1,83],53:[1,85],54:[1,86],55:[1,88],59:[1,89]},{13:[2,69],61:[2,69]}],
defaultActions: {3:[2,1],41:[2,22],108:[2,70],109:[2,71]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 5
break;
case 1:/* skip whitespaces */
break;
case 2:this.begin('tags'); return 6
break;
case 3:/* skip vanilla code */
break;
case 4:this.popState(); return 10
break;
case 5:this.popState(); this.begin('def')
break;
case 6:return 13 /* list separator */
break;
case 7:return 15 /* key/value delimiter */
break;
case 8:return 17 /* range */
break;
case 9:return 47
break;
case 10:return 46
break;
case 11:/* skip whitespaces */
break;
case 12:return 16
break;
case 13:return 14
break;
case 14:return 18
break;
case 15:return 19
break;
case 16:return 20
break;
case 17:return 21
break;
case 18:return 22
break;
case 19:return 24
break;
case 20:/* N.B. shouldn't it be ALIAS, and reversed sense */ return 24
break;
case 21:return 25
break;
case 22:return 26
break;
case 23:return 45
break;
case 24:this.popState(); return 10
break;
case 25:return 30
break;
case 26:/* skip whitespaces */
break;
case 27:this.begin('arg'); return 42
break;
case 28:return 38
break;
case 29:return 'FIRES'
break;
case 30:return 28
break;
case 31:/*return '*'*/
break;
case 32:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 52
break;
case 33:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 52
break;
case 34:return 16
break;
case 35:return 54
break;
case 36:return 53
break;
case 37:return 53
break;
case 38:return 47
break;
case 39:return 48
break;
case 40:return 49
break;
case 41:return 58
break;
case 42:return 46
break;
case 43:return 13
break;
case 44:return 73
break;
case 45:return 68
break;
case 46:return 76
break;
case 47:return 70
break;
case 48:return 15
break;
case 49:return 39
break;
case 50:return 41
break;
case 51:return 55
break;
case 52:return 57
break;
case 53:return 59
break;
case 54:return 61
break;
case 55:return 50
break;
case 56:return 69
break;
case 57:return 71
break;
case 58:return 79
break;
case 59:return 45
break;
case 60:this.popState(); return 30
break;
case 61:this.popState(); console.log('LEFTCOMM'); return 30
break;
}
};
lexer.rules = [/^$/,/^\s+/,/^\/\*\*(?=([^/]))/,/^.*/,/^\*\*\//,/^\s*[\n]/,/^, /,/^: /,/^\.\./,/^#/,/^\./,/^\s+/,/^-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,/^deprecated\b/,/^required\b/,/^read-only\b/,/^internal\b/,/^chainable\b/,/^section\b/,/^alias of\b/,/^alias\b/,/^related to\b/,/^belongs to\b/,/^(?:[$_a-zA-Z][$_a-zA-Z0-9]*)/,/^\*\*\//,/^\*\s*?[\n][\s\S]*?(?=\*\*\/)/,/^\s+/,/^\)\s*:/,/^\*\s*-/,/^\*\s*fires\b/,/^\*\s*includes\b/,/^\*/,/^"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,/^'(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*'/,/^-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,/^\/(?:[^\/]|\\\/)*\/[gim]*/,/^true\b/,/^false\b/,/^#/,/^@/,/^\?/,/^\.\.\./,/^\./,/^,/,/^->/,/^==/,/^=/,/^</,/^:/,/^\(/,/^\)/,/^\[/,/^\]/,/^\{/,/^\}/,/^\|/,/^class\b/,/^mixin\b/,/^new\b/,/^(?:[$_a-zA-Z][$_a-zA-Z0-9]*)/,/^[\s\S]*?(?=(\*\s*[-\n]))/,/^[\s\S]*?(?=\*\*\/)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3],"inclusive":true},"tags":{"rules":[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":false},"def":{"rules":[0,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],"inclusive":false},"arg":{"rules":[0,60],"inclusive":false},"comment":{"rules":[0,61],"inclusive":false}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}