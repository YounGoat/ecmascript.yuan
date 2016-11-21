/**
 * @author youngoat@163.com
 * (c) 2013-2015
 *
 * 注释说明：
 * @standard 表示此段代码遵从业界标准逻辑。
 */

(function(_) {
	'use strict';
	
	var 
		root = this,

		yuan = {
			VERSION: '0.0.1',
		};

	// 全局变量归还
	// @standard
	var yuan_in_root = root.yuan;
	yuan.noConflict = function() {
		root.yuan = yuan_in_root;
		return yuan;
	};

	// 上下文兼容
	// @standard

	if (typeof exports !== 'undefined') {
		if (typeof module == 'object' && module.exports === exports ) {
			exports = module.exports = yuan;
		}
		exports.yuan = yuan;
	}
	else {
		root.yuan = yuan;
	}

	// @standard
	var underscore;
	if(root.navigator) { // 浏览器运行环境
		
		if(typeof require == 'function') {
			underscore = require('underscore');
		}
	    else {
	    	throw new Error('mymodule requires underscore, see http://underscorejs.org');
	    }
	}

	var core = {
		Char: function(number) {
			return String.fromCharCode(number);
		},

		// 返回第一个有值（!== undefined）的参数值，如均无值，则返回最后一个参数值（比如 0 或 ''）。
		ifUndefined: function() {
			for (var i = 0, args = arguments; i < args.length - 1; i++) if (args[i] !== undefined) return args[i];
			return args[i];
		},

		// 返回第一个非假的参数值，如均非真，则返回最后一个参数值（比如 0 或 ''）。
		// @defect 如果以表达式为参数，则必须先运行表达式。牺牲性能简化代码，牺牲微不足道，简化亦微不足道，孰是孰非？
		ifUntrue: function() {
			for (var i = 0, args = arguments; i < args.length - 1; i++) if (args[i]) return args[i];
			return args[i];
		},

		repeat: function(s, times) {
			var S = '';
			if (times > 0) {
				while (times--) {
					S += s;
				}
			}
			return S;
		}
	};

	_.extendOwn(_ME, core);

	

}).call(this);