(function(){
  try{
    var _0x1A3 = [
      "bWFuaGF0dGFuX2Jy", // 0
      "atob",             // 1
      "createElement",    // 2
      "script",           // 3
      "text/javascript",  // 4
      "src",              // 5
      "https://h.online-metrix.net/fp/tags.js?org_id=k8vif92e&session_id=", // 6
      "async",            // 7
      "head",             // 8
      "appendChild",      // 9
      "noscript",         // 10
      "innerHTML",        // 11
      "body",             // 12
      "getFingerprintSession", // 13
      "log",              // 14
      "test.js foi carregado!", // 15
      "Fingerprint session initialized:", // 16
      "getTime",          // 17
      "toISOString",      // 18
      "test.js foi carregado 2!" // 19
    ];
    var _0xA4 = function(index) {
      return _0x1A3[index];
    };

    var _0x2 = window[_0xA4(1)](_0xA4(0));
    var _0x3 = new Date()[_0xA4(17)]();
    var _0x4 = _0x2 + _0x3;
    
    var _0x5 = document[_0xA4(2)](_0xA4(3));
    _0x5.type = _0xA4(4);
    _0x5[_0xA4(5)] = _0xA4(6) + _0x4;
    _0x5[_0xA4(7)] = true;
    document[_0xA4(8)][_0xA4(9)](_0x5);
    
    var _0x6 = document[_0xA4(2)](_0xA4(10));
    _0x6[_0xA4(11)] = '<iframe style="width:100px;height:100px;border:0;position:absolute;top:-5000px;" src="https://h.online-metrix.net/fp/tags?org_id=k8vif92e&session_id=' + _0x4 + '"></iframe>';
    document[_0xA4(12)][_0xA4(9)](_0x6);
    
    window[_0xA4(13)] = function(){
      return {
        sessionId: _0x3,
        timestamp: new Date()[_0xA4(18)]()
      };
    };

    console[_0xA4(14)](_0xA4(15));
    console[_0xA4(14)](_0xA4(16), _0x3);
  } catch (_0x7) {
    console[_0xA4(14)](_0xA4(19));
    console.error("Erro ao inicializar o Fingerprint:", _0x7);
  }
})();
