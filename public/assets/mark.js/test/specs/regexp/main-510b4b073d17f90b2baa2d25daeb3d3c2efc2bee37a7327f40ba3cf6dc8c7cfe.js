"use strict";describe("mark with regular expression",function(){var e,t,n,o;beforeEach(function(i){loadFixtures("regexp/main.html"),e=$(".regexp > div:first-child"),t=$(".regexp > div:last-child"),n=!1,o=new Mark(e[0]).markRegExp(/Lor[^]?m/gim,{done:function(){try{new Mark(t[0]).markRegExp(/(Lor)([^]?m)/gim,{done:function(){setTimeout(function(){i()},50)}})}catch(e){n=!0,i()}}})}),it("should wrap matches",function(){expect(e.find("mark")).toHaveLength(4)}),it("should silently ignore groups in regular expressions",function(){expect(t.find("mark")).toHaveLength(4),expect(n).toBe(!1)}),it("should return an object with further methods",function(){expect(o instanceof Mark).toBe(!0),expect(typeof o.mark).toBe("function"),expect(typeof o.unmark).toBe("function"),expect(typeof o.markRegExp).toBe("function")})});